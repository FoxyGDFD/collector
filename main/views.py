from django.shortcuts import render
from django.views import View


class MainView(View):
    @staticmethod
    def get(request):
        return render(request,'main/main.html')


class MapView(View):
    @staticmethod
    def get(request):
        return render(request,'main/map.html')


class ProfileView(View):
    @staticmethod
    def get(request):
        return render(request,'main/profile.html')

