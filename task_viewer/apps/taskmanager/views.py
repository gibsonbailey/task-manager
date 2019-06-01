from django.shortcuts import render


def card_view(request):
    return render(request, 'personal-lists.html')

def gantt_view(request):
    return render(request, 'gantt.html')
