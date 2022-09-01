from django.urls import path, include
from attendence import views

urlpatterns = [
    path('student/', views.Student.as_view()),
    path('teacher/', views.Teacher.as_view()),
    path('login/', views.Login.as_view()),
    path('registration/', views.Registration.as_view()),
    path('attendance/', views.Attendance.as_view()),
]
