# hangman
은민's 장난감

#### <시작화면>
![1](https://user-images.githubusercontent.com/63971484/112332186-de0d6880-8cfc-11eb-96dd-22a39b36611c.JPG)

#### <플레이화면>
![2](https://user-images.githubusercontent.com/63971484/112332605-380e2e00-8cfd-11eb-9a6d-7e9563b59990.JPG)

![3](https://user-images.githubusercontent.com/63971484/112333040-976c3e00-8cfd-11eb-87ea-e3f866ff842b.JPG)
<br>
- 약간 아쉽지만 글자를 다 찾아야지만 answer창이 나타나는 건 아마도 정답을 입력하면 새로고침이 되는데
  그때 current miss 를 잘..동기화..? 시킬 능력이 없었가 때문
  
#### <엔딩>
- 방금 틀린 단어 & 나의 순위를 확인할 수 잇다
- 행맨 무병장수 엔딩도 존재는 하나 단어 개수가 너무 많아서 아마도 불가능할 것이기 때문에 따로 꾸며놓지는 않았습니다

![4](https://user-images.githubusercontent.com/63971484/112333396-e9ad5f00-8cfd-11eb-9b42-6a73f71198f3.JPG)  
_그림 by menuin.k_
<br><br>

#### 난관 및 처음 써 본 것 :  
```
 - jquery ajax : 자바스크립트 파일을 함께 써보는 건 처음이라 서버로 데이터 전달 및 변경하는 데 어려움이 있었다..
 - json decoder : player 모델에 listfield로 word list를 주고 싶었는데 listfield 가 없대서 
    txt field에 대신 몰아넣고 후에 temp에다가 다시 리스트로? 디코드
 - beautiful soup 으로 위키피디아에서 기초 단어 목록 (3글자 이상으로) 크롤링
```
