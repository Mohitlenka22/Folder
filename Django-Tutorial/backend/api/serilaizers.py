# serializers are used to convert the python model objects to json & viceversa.
from django.shortcuts import get_object_or_404
from rest_framework import serializers
from rest_framework.response import Response
from api.models import Person, Details, Product, Voter
from datetime import date


class DetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Details
        fields = ['person_id']


class PersonSerializer(serializers.ModelSerializer):
    # used instead of depth, to give more control of choosing attributes.
    person = DetailSerializer()

    # way of adding a new feild in objects
    dobYear = serializers.SerializerMethodField()

    def get_dobYear(self, obj):
        return date.today().year - obj.age

    class Meta:
        model = Person
        fields = '__all__'
        # depth = 1 #used to get whole object

    # It will invoke when we call .save() method, we oveeridden it to save nested objects also.
    def create(self, validated_data):
        # print(validated_data)
        person_data = validated_data.pop('person')
        details = Details.objects.create(**person_data)
        person = Person.objects.create(person=details, **validated_data)
        return person

    # we can also get and put validation on a specific attribute
    '''
    def validate_name(self, name):
        # queryset = Person.objects.get(name=name) #get method throws an error if query object doesn't exist.
        #but filter returns empty Queryset if object doesn't exists.
        queryset = Person.objects.filter(name=name)
        if queryset:
            raise serializers.ValidationError('Name already taken')
        return name
    '''
    # writing your own is_valid() method.

    def validate(self, data):
        # check if age exits ,if it exists then only update it
        if data.get('age') and data['age'] < 18:
            raise serializers.ValidationError('Age must be greater than 18')
        return data


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class VoterSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    voter_name = serializers.CharField(max_length=100)
    voter_age = serializers.IntegerField()

    def validate(self, object):
        if self.context['request'].method != 'POST':
            try:
                query = Voter.objects.get(id=object['id'])
            except Voter.DoesNotExist:
                raise serializers.ValidationError({'message': 'user already exists'})
        else:
            query = Voter.objects.get(id=object['id'])
            if query is not None:
                raise serializers.ValidationError({'id': 'id must be unique'})        
        return object

    def create(self, validated_data):
        return Voter.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.voter_name = validated_data.get('voter_name', instance.voter_name)
        instance.voter_age = validated_data.get('voter_age', instance.voter_age)
        instance.save()
        return instance
