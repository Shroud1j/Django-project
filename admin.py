from django.contrib import admin
from .models import (
    Course,
    Lesson,
    Instructor,
    Learner,
    Question,
    Choice,
    Submission
)


class ChoiceInline(admin.TabularInline):
    model = Choice
    extra = 1


class QuestionInline(admin.StackedInline):
    model = Question
    extra = 1
    show_change_link = True


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = (
        "question_text",
        "course",
        "lesson",
        "grade"
    )
    inlines = [ChoiceInline]


@admin.register(Lesson)
class LessonAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "course"
    )
    inlines = [QuestionInline]


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ("name", "description")


@admin.register(Instructor)
class InstructorAdmin(admin.ModelAdmin):
    list_display = ("user",)


@admin.register(Learner)
class LearnerAdmin(admin.ModelAdmin):
    list_display = ("user",)


@admin.register(Choice)
class ChoiceAdmin(admin.ModelAdmin):
    list_display = (
        "choice_text",
        "question",
        "is_correct"
    )


@admin.register(Submission)
class SubmissionAdmin(admin.ModelAdmin):
    list_display = (
        "learner",
        "course"
    )
