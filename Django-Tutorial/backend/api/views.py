from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.serilaizers import PersonSerializer, ProductSerializer, VoterSerializer
from api.models import Person, Product, Voter
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.renderers import JSONRenderer
from rest_framework import status
from rest_framework import generics


# CRUD API's
@api_view(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
def index(request):
    if request.method == 'GET':
        queryset = Person.objects.all()
        serializer = PersonSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        data = request.data  # way for getting data posted by user
        serializer = PersonSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == 'PUT':
        data = request.data
        obj = Person.objects.get(id=data.get('id'))
        # we need to pass that object we need to update whole
        serializer = PersonSerializer(obj, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == 'PATCH':
        data = request.data
        obj = Person.objects.get(id=data.get('id'))
        # used to partially update the feilds of the object
        serializer = PersonSerializer(obj, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)
    elif request.method == "DELETE":
        id = request.data['id']
        obj = Person.objects.get(id=id)
        obj.delete()
        return Response({'message': 'sucess'})


# APIView, used to implement api's by classes
class PersonAPI(APIView):
    # There many methods in APIView which extended by our class
    # They include get, post, put, patch, delete
    def get(self, request):
        # queryset = Person.objects.all()
        queryset = Person.objects.filter(person__isnull=False)
        serializer = PersonSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = request.data  # way for getting data posted by user
        serializer = PersonSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def put(self, request):
        data = request.data
        obj = Person.objects.get(id=data['id'])
        serializer = PersonSerializer(obj, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def patch(self, request):
        data = request.data
        obj = Person.objects.get(id=data.get('id'))
        # used to partially update the feilds of the object
        serializer = PersonSerializer(obj, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)

    def delete(self, request):
        id = request.data['id']
        obj = Person.objects.filter(id=id)
        if obj:
            obj.delete()
            return Response({'messgae': 'success'}, status=200)
        return Response({'error': 'not found'}, status=400)


# ViewSet
class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    # def list(self, request):
    #     queryset = self.queryset
    #     serializer = self.serializer_class(queryset, many=True)

    #     return Response(serializer.data)

    # def update(self, request, pk):
    #     data = request.data
    #     try:
    #         product = Product.objects.get(pk=pk)
    #     except Product.DoesNotExist:
    #         return Response({'error': 'product not found.'})
    #     serializer = self.serializer_class(product, data=data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors)

    # def partial_update(self, request, pk):
    #     data = request.data
    #     try:
    #         product = Product.objects.get(pk=pk)
    #     except Product.DoesNotExist:
    #         return Response({'error': 'product not found.'})
    #     serializer = self.serializer_class(product, data=data, partial=True)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors)

    '''
    def list(self, request):
        queryset = self.queryset
        serializer = ProductSerializer(queryset, many=True)
        return Response({'data': serializer.data, 'status': 200})

    def create(self, validated_data):
        serializer = self.serializer_class(data=validated_data.data)
        if serializer.is_valid():
            obj = Product.objects.filter(
                product_name=validated_data.data['product_name'])
            if obj is None:
                serializer.save()
                return Response({'message': 'success'})

            # data = validated_data
            # return Product.objects.create(**data)

        return Response({'error': 'Name already Taken'})
        # print(validated_data.data)
        # return Response(validated_data.data)
    '''

# serializers.Serializer
class VoterSerializerView(APIView):

    def get(self, request):
        queryset = Voter.objects.all()
        serializer = VoterSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = request.data
        serializer = VoterSerializer(data=data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def put(self, request):
        data = request.data
        voter_id = data.get('id')
        try:
            voter = Voter.objects.get(id=voter_id)
        except Voter.DoesNotExist:
            return Response({'error': 'Voter not found'}, status=status.HTTP_404_NOT_FOUND)
        serializer = VoterSerializer(
            voter, data=data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def patch(self, request):
        data = request.data
        try:
            voter = Voter.objects.get(id=data['id'])
        except Voter.DoesNotExist:
            return Response({'messsage': 'Voter Not found'})
        serializer = VoterSerializer(
            voter, data=data, partial=True, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response('Error')

# generics
class PersonGenericView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
