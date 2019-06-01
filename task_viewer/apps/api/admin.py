import django.contrib.admin
from .models import UserModel, TaskModel

django.contrib.admin.site.register(UserModel)
django.contrib.admin.site.register(TaskModel)
