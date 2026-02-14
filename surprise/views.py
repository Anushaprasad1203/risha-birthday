from django.shortcuts import render

from django.shortcuts import render

def home(request):
    return render(request, 'index.html')
def gallery(request):
    return render(request, 'gallery.html')
# Create your views here.
