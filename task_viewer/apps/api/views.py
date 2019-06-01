from api.models import UserModel, TaskModel
from api.serializers import UserSerializer, TaskSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework import filters
from rest_framework.decorators import action
from django_filters.rest_framework import DjangoFilterBackend
from django.http import JsonResponse



class UserViewSet(ModelViewSet):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer

class TaskViewSet(ModelViewSet):
    queryset = TaskModel.objects.all()
    serializer_class = TaskSerializer

#    def partial_update(self, request, pk):
#        task = self.get_object()
#        serializer = TaskSerializer(task, data=request.data, partial=True)
#        if serializer.is_valid():
#            task = serializer.save()
#            print('usermodel_set')
#            print(task.usermodel_set)
#            username = task.username
#            user = None
#            if username:
#                try:
#                    user = UserModel.objects.get(username=username)
#                except UserModel.DoesNotExist:
#                    pass
#                else:
#                    if not task.usermodel_set.filter(username=username).exists():
#                        task.usermodel_set.add(user)
#            task.save()
#            return JsonResponse(data=serializer.data)
#        return JsonResponse(data=serializer.errors)
#
