from io import BytesIO
from PIL import Image
from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=200)
    sid = models.CharField(max_length=100) #primary key
    qr = models.CharField(max_length=100)
    parentNo = models.IntegerField()
    standardId = models.ForeignKey("attendence.Standard", verbose_name=("sid"), related_name='students', on_delete=models.CASCADE)
    slug = models.SlugField()

    def __str__(self):
        return f'{self.sid} {self.name} {self.standardId} {self.parentNo}' 

    def get_absolute_url(self):
        return f'/{self.slug}/'
    
    class Meta:
        ordering = ('sid',)
    
class Standard(models.Model):
    name = models.CharField(max_length=100)
    sid = models.CharField(max_length=150) #primary key
    section = models.CharField(max_length=150)
    teacherId = models.ForeignKey("attendence.Teacher", verbose_name=("sid"), on_delete=models.CASCADE)
    slug = models.SlugField()

    def __str__(self):
        return f'{self.name}    {self.section}'
    def get_absolute_url(self):
        return f'/{self.slug}/'

    class Meta:
        ordering = ('sid',)


class Teacher(models.Model):
    sid = models.CharField(max_length=150) #primary key
    name = models.CharField(max_length=150)
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=254)
    phone = models.IntegerField()
    slug = models.SlugField()
    schoolId = models.ForeignKey("attendence.School", verbose_name=("sid"), on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name}    {self.email}    {self.phone}'
    def get_absolute_url(self):
        return f'/{self.slug}/'

    class Meta:
        ordering = ('sid',)


class Subject(models.Model):
    sid = models.CharField(max_length=50) #primary key
    name = models.CharField(max_length=50)
    standardId = models.ForeignKey("attendence.Standard", verbose_name=("sid"), on_delete=models.CASCADE)
    slug = models.SlugField()

    def __str__(self):
        return f'{self.name}    {self.standardId}'
    def get_absolute_url(self):
        return f'/{self.slug}/'

    class Meta:
        ordering = ('sid',)

class School(models.Model):
    sid = models.CharField(max_length=50) #primary key
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=500)
    slug = models.SlugField()

    def __str__(self):
        return f'{self.name}    {self.address}'

    def get_absolute_url(self):
        return f'/{self.slug}/'

    class Meta:
        ordering = ('sid',)


class Attendence(models.Model):
    classId = models.ForeignKey("attendence.Standard", verbose_name=("sid"), on_delete=models.CASCADE)
    studentId = models.ForeignKey("attendence.Student", verbose_name=("sid"), on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    present = models.BooleanField(null=True)
    remark = models.CharField(max_length=5000, blank=True, null=True)
    slug = models.SlugField()

    def __str__(self):
        return f'{self.date}    {self.classId}  {self.studentId}    {self.present}'
    
    def get_absolute_url(self):
        return f'/{self.slug}/'

    class Meta:
        ordering = ('classId',)
