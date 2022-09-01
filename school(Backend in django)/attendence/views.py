from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import pyrebase
from django.shortcuts import render
from .models import *
from .serializers import *
# import jsonify

config={
  "apiKey": "AIzaSyDeXuRsZdWcDFHRReGXh0ATB-HiE0HXcBg",
  "authDomain": "sundarpichai-17f11.firebaseapp.com/",
  "databaseURL": "https://sundarpichai-17f11-default-rtdb.firebaseio.com",
  "projectId": "sundarpichai-17f11",
  "storageBucket": "sundarpichai-17f11.appspot.com/",
  "messagingSenderId": "856447493772",
  "appId" : "1:856447493772:web:238d83bb23b426c84f3da9",
}

firebase=pyrebase.initialize_app(config)
authe = firebase.auth()
database=firebase.database()

# Create your views here.
    
class Teacher(APIView):
  def get(self, request):
    if(request.method=="GET"):
      tid = database.child('teacher').child('id').get().val()
      name = database.child('teacher').child('name').get().val()
      email = database.child('teacher').child('email').get().val()
      address = database.child('teacher').child('address').get().val()
      role = database.child('teacher').child('role').get().val()
      school = database.child('teacher').child('school').get().val()
      
      data = {
        'tid':tid,
        'name':name,
        'email':email,
        'address':address,
        'role':role,
        'school':school,
      }
      return Response(data)

  def post(self, request):
    if(request.method=="POST"):
      tid = request.post.get('tid')
      name = request.post.get('name')
      email = request.post.get('email')
      address = request.post.get('address')
      school = request.post.get('school')
      standard = request.post.get('standard')
      
      database.child('teacher').set({
        'tid':tid,
        'name':name,
        'email':email,
        'address':address,
        'school':school,
        'standard':standard,
        })
      data = {
        'res':'successful'
      }
      return Response(data)
    res = {
      'res':'Unsuccessful'
    }
    return Response(res)

  def put(self, request):
    if(request.method=="PUT"):
      name = request.post.get('name')
      database.child('teacher').set({
        'name':name
      })
      data = {
        'res':'successful'
      }
      return Response(data)
    res = {
      'res':'Unsuccessful'
    }
    return Response(res)

  def delete(self, request):
    if(request.method=='DELETE'):
      name = request.delete.get('name') # delete single table
      database.child('teacher').delete()    # delete entire table
    
    res = {
          'res':'Unsuccessful'
        }
    return Response(res)

class Student(APIView):
  def get(self, request):
    if(request.method=="GET"):
      all_data = firebase.database().child('student').get()
      print(all_data.val())
      return Response(all_data.val())
      # id = database.child('student').child('adm').get().val()
      # name = database.child('student').child('name').get().val()
      # hex = database.child('student').child('hex').get().val()
      # standard = database.child('student').child('standard').get().val()
      # section = database.child("student").child('section').get().val()
      # status
      # gender
      # data={
      #   'id':id,
      #   'name':name,
      #   'hex':hex,
      #   'standard':standard,
      #   'parent_no':parent_no,
      # }
      # return Response(data)

  def post(self, request):
    if(request.method=="POST"):
      id = request.post.get('id')
      name = request.post.get('name')
      dob = request.post.get('dob')
      standard = request.post.get('standard')
      parent_no = request.post.get('number')

      database.child('teacher').set({
          'id':id,
          'name':name,
          'dob':dob,
          'standard':standard,
          'parent_no':parent_no,
          })
      data = {
        'res':'successful'
      }
      return Response(data)

      res = {
        'res':'Unsuccessful'
      }
      return Response(res)

  def put(self, request):
    if(request.method=="PUT"):
      name = request.post.get('name')
      database.child('student').set({
        'name':name
      })
      data = {
        'res':'successful'
      }
      return Response(data)
    res = {
      'res':'Unsuccessful'
    }
    return Response(res)

  def delete(self, request):
    if(request.method=='DELETE'):
      name = request.delete.get('name') # delete single table
      database.child('student').delete() 
    res = {
          'res':'Unsuccessful'
    }
    return Response(res)
class Registration(APIView):
  def post(self, request):
    #create authetication
    print(request.data.get('stu').get('name'))
    name = request.data.get('stu').get('name')
    gender=request.data.get('stu').get('gender')
    clss=request.data.get('stu').get('class')
    hex_value = request.data.get('stu').get('hex')
    school= request.data.get('stu').get('school')
    print(school)
    
    database.child('student').child(hex_value).set({
          'name':name,
          'class':clss,
          'gender':gender,
          'hex':hex_value,
          'school':school,
    })
    return Response({
      'res':"success added student"
    })
class Login(APIView):
  def post(self, request):
    #create authetication
    role = request.data.get('role')
    email = request.data.get('email')
    password = request.data.get('password')
    auth = firebase.auth()
    signin = auth.sign_in_with_email_and_password(email, password)
    print("Sign In Was Successfull")   
    token = signin['localId']
    user={
      'data':signin
    }
    if(role == 'teacher'):
      database.child('users').child('teacher').child(token).set({
          'role':role,
           'email':email,
           'id':token
      })
    if(role == 'Block officer'):
      database.child('users').child('BlockOfficer').child(token).set({
          'role':role,
           'email':email,
           'id':token
      })
    print("USER added Was Successfull")  

    return Response(user)
  
class Attendance(APIView):
  def get(self, request):
    if(request.method=="GET"):
      all_data = firebase.database().child('attendance').get()  # sends whole data from start date
      print(all_data.val())
      return Response(all_data.val())
