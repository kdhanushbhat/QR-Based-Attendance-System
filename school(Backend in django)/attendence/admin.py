from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Student)
admin.site.register(Standard)
admin.site.register(Teacher)
admin.site.register(School)
admin.site.register(Subject)
admin.site.register(Attendence)

