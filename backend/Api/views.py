from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.template import loader

def test(request):
    return JsonResponse({"value":"test"})
