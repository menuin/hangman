from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Player
from django.urls import reverse
import random
import json
from django.views.decorators.csrf import csrf_exempt

# codes for beautiful soup usage
import requests
from bs4 import BeautifulSoup
req = requests.get('https://en.wiktionary.org/wiki/Appendix:1000_basic_English_words')
source=req.text
soup=BeautifulSoup(source,'html.parser')
temp_list=soup.select("#mw-content-text > div.mw-parser-output > dl > dd > a")
wordList = []

for word in temp_list:
    if (len(word.text)>=3):  # i'll use words longer than 3 letters
        wordList.append(word.text)



# Create your views here.

def start_home(request):
    if request.method=="POST":
        name=request.POST['name']
        player=Player(name=name)

        player.words=json.dumps(wordList)
        player.save()
        print(player.words)
        pk=Player.objects.order_by('-id')[0].id
        
        return redirect(reverse('play', kwargs={'pk':pk}))
    else:
        return render(request, "core/start_home.html")

def choose_word(request,pk):
    jsonDec=json.decoder.JSONDecoder()
    temp=jsonDec.decode(Player.objects.get(pk=pk).words)
    print(len(temp))
    player=Player.objects.get(pk=pk)
    
    if player.wrong<=5:
        if request.method=="GET": # correct answer
            numOfWords=len(temp)
            choice=random.randint(1,numOfWords)
            word=temp[choice-1]
            player.currentWord=word
            player.save()
            return render(request, 'core/play_home.html',{'pk':pk,'wordlist':temp, 'word':word,'wrong':player.wrong})

        else: 
            # correct answer
            if (request.POST['answer'].lower()==player.currentWord):
                print(player.currentWord)
                player.score=player.score+1
                temp.remove(player.currentWord)
                player.words=json.dumps(temp)
                player.save()

                if (player.words=="[]"):
                    return render(request,'core/you_win.html',{'pk':pk})

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
    players=Player.objects.all().order_by('-score')
    players_list=[]
    for rank in range(len(players)):
        score=players[rank].score
        name=players[rank].name
        a=(rank+1,name,score)
        players_list.append(a)

    return render(request,'core/game_over.html',{'score':player.score,'player':player,'players_list':players_list})

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


def win(request,pk):
    return render(request, 'core/you_win.html',{'pk':pk})
