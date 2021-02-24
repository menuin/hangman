from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Player
from django.urls import reverse
import random
import json
from django.views.decorators.csrf import csrf_exempt


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

    if player.wrong<=5:
        if request.method=="GET": # correct answer
            numOfWords=len(wordList)
            choice=random.randint(1,numOfWords)
            word=wordList[choice-1]
            player.currentWord=word
            player.save()
            return render(request, 'core/play_home.html',{'pk':pk,'word':word,'wrong':player.wrong})

        else: 
            # correct answer
            if (request.POST['answer']==player.currentWord):
                print(player.currentWord)
                player.score=player.score+1
                player.save()
                return redirect(reverse('play', kwargs={'pk':pk}))
            else : # wrong answer
                print("wrong")
                player.wrong=player.wrong+1
                player.save()
                return render(request, 'core/play_home.html',{'pk':pk,'word':player.currentWord,'wrong':player.wrong})
    
    else:
        return redirect(reverse('game_over',kwargs={'pk':pk}))

def game_over(request,pk):
    print("done")
    player=Player.objects.get(pk=pk)
    return render(request,'core/game_over.html',{'score':player.score,'player':player})

def restart(request, pk):
    player=Player.objects.get(pk=pk)
    player.wrong=0
    player.score=0
    player.save()
    return redirect(reverse('play',kwargs={'pk':pk}))



def update_miss(request):
    pk=request.POST['pk']
    player=Player.objects.get(pk=pk)

    # if (int(player.wrong)>=7):
    #     return redirect(reverse('game_over',kwargs={'pk':pk}))

    if request.method=='POST':
        player.wrong=request.POST['miss']
        player.save()
        message='update successful'

        context={
            'wrong':player.wrong,
            'message':message,}

        return HttpResponse(json.dumps(context),content_type="application/json")
