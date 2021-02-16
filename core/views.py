from django.shortcuts import render, redirect
from .models import Player
from django.urls import reverse
import random
import json


# Create your views here.

def start_home(request):
    if request.method=="POST":
        name=request.POST['name']
        player=Player(name=name)
        player.save()
        pk=Player.objects.order_by('-id')[0].id
        
        return redirect(reverse('play', kwargs={'pk':pk}))
    else:
        return render(request, "core/start_home.html")

def choose_word(request,pk):
    wordList=Player.objects.get(pk=pk).words

    numOfWords=len(wordList)
    choice=random.randint(1,numOfWords)
    word=wordList[choice-1] 
    wordJson=json.dumps(word)  # view에서 작성한 변수를 js파일로 전달하기 위함

    if request.method=="GET":
        return render(request, 'core/play_home.html',{'pk':pk,'word':word,'wordJson':wordJson})

    elif request.method=="POST":
        return JsonResponse({'pk':pk,'word':word,'wordJson':wordJson})