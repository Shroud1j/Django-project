from django.shortcuts import render, get_object_or_404
from .models import Course, Question, Submission


def submit(request, course_id):
    course = get_object_or_404(Course, id=course_id)

    if request.method == "POST":
        score = 0
        total_questions = Question.objects.filter(
            lesson__course=course
        ).count()

        questions = Question.objects.filter(
            lesson__course=course
        )

        for question in questions:
            selected_choice = request.POST.get(
                f"question_{question.id}"
            )

            if selected_choice:
                choice = question.choice_set.filter(
                    id=selected_choice
                ).first()

                if choice and choice.is_correct:
                    score += 1

                Submission.objects.create(
                    user=request.user,
                    question=question,
                    choice=choice
                )

        return render(
            request,
            "OnlineCourse/exam_result.html",
            {
                "course": course,
                "score": score,
                "total_questions": total_questions,
            }
        )

    return render(
        request,
        "OnlineCourse/course_details_bootstrap.html",
        {"course": course}
    )


def show_exam_result(request, course_id):
    course = get_object_or_404(Course, id=course_id)

    submissions = Submission.objects.filter(
        user=request.user,
        question__lesson__course=course
    )

    total_questions = submissions.count()
    score = sum(
        1 for submission in submissions
        if submission.choice and submission.choice.is_correct
    )

    return render(
        request,
        "OnlineCourse/exam_result.html",
        {
            "course": course,
            "score": score,
            "total_questions": total_questions,
            "submissions": submissions,
        }
    )
