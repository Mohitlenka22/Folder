# from django.http import JsonResponse, HttpResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import users
from .serializers import usersSerializer
from rest_framework import generics
# from pymongo import MongoClient

# MongoDB
# client = MongoClient(
#     'mongodb+srv://admin:Lh9VLJS2vSTDtxgW@cluster0.lpqhi.mongodb.net/?retryWrites=true&w=majority')
# db = client['users']


@api_view(['GET'])
def retrieve(request):
    instance = users.objects.all().order_by('?').first()
    data = usersSerializer(instance).data
    return Response(data)

# class based-views

# creating


class UserCreateAPIView(generics.CreateAPIView):
    queryset = users.objects.all()
    serializer_class = usersSerializer

# retrieving


class UserRetrieveAPIView(generics.RetrieveAPIView):
    queryset = users.objects.all()
    serializer_class = usersSerializer

    # Takes <int:pk> as parameter pk -> primaryKey (lookup_field)


'''
Similar way using function based-views && serializar

@api_view(['POST'])
def create(request):
    instance = users.objects.all()
    serializer = usersSerializer(data=request.data)
    if serializer.is_valid():
        data = serializer.data 
    return Response(data)

'''
