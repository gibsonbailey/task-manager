from django.urls import include, path

from .views import card_view, gantt_view

urlpatterns = [
    path('', card_view, name='card'),
    path('gantt/', gantt_view, name='gantt'),
]
