from rest_framework import serializers
from api.models import UserModel, TaskModel




class TaskSerializer(serializers.ModelSerializer):
    users = serializers.SlugRelatedField(many=True, read_only=False, queryset=UserModel.objects.all(), slug_field='pk')

    class Meta:
        model = TaskModel
        fields = ('title', 'description', 'start_date', 'end_date', 'due_date', 'users', 'pk')

    def create(self, validated_data):
        print("validated_data:",validated_data)
        try:
            user = UserModel.objects.get(username=validated_data.pop('username'))
        except UserModel.DoesNotExist:
            pass
        else:
            task = TaskModel.objects.create(**validated_data)
            task.usermodel_set.add(user)
            task.save()
            return task


        

class UserSerializer(serializers.ModelSerializer):
    task_list = TaskSerializer(many=True, read_only=True)

    class Meta:
        model = UserModel
        fields = ('username', 'email', 'tasks', 'url', 'task_list', 'id')
        depth = 2

