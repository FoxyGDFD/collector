from django.views import View
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseForbidden
from json import JSONEncoder


class MainView(View):
    @staticmethod
    def get(request):
        return render(request, 'main/main.html')


class MapView(View):
    @staticmethod
    def get(request):
        return render(request, 'main/map.html')


def test(request):
    response = {
        'test_LIST': ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7'],
    }
    return HttpResponse(JSONEncoder().encode(response))


class ProfileView(View):
    @staticmethod
    def get(request):
        return render(request, 'main/profile.html')


class ResultView(View):
    @staticmethod
    def get(reqest):
        return render(reqest, 'main/resault.html')


class ReasonView(View):
    @staticmethod
    def get(reqest):
        return render(reqest, 'main/reason.html')


class ManagerView(View):
    @staticmethod
    def get(reqest):
        return render(reqest, 'main/manager.html')