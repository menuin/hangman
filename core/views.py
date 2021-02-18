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
    player=Player.objects.get(pk=pk)

    if request.method=="GET": # correct answer
        numOfWords=len(wordList)
        choice=random.randint(1,numOfWords)
        word=wordList[choice-1]
        player.currentWord=word
        player.save()
        return render(request, 'core/play_home.html',{'pk':pk,'word':word})

    else: # correct answer
        if (request.POST['answer']==player.currentWord):
            print(player.currentWord)
            return redirect(reverse('play', kwargs={'pk':pk}))
        else : # wrong answer
            print("wrong")
            return render(request, 'core/play_home.html',{'pk':pk,'word':player.currentWord})

