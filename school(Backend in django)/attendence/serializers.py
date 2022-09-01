from rest_framework import serializers
from .models import *

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = {
            "name",
            "sid",
            "parentNo",
            "standardId",
            "get_absolute_url",
        }
    
class StandardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Standard
        fields = {
            "name",
            "sid",
            "section",
            "teacherId",
            "get_absolute_url",
        }

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = {
            "name",
            "address",
            "sid",
            "email",
            "password",
            "phone",
            "schoolId",
            "get_absolute_url",
        }
    
class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = {
            "sid",
            "name",
            "standardId",
            "get_absolute_url",
        }

class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = {
            "sid",
            "name",
            "address",
            "get_absolute_url",
        }
    
class AttendenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendence
        fields = {
            "classId",
            "studentId",
            "date",
            "present",
            "remark",
            "get_absolute_url",
        }