from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    return HttpResponse("A view funcionou")

def about(request):
    return HttpResponse("Sistema testado")

def suport(request):
    return HttpResponse("Suporte")

def contact(request):
    return HttpResponse("Contato")