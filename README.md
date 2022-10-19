# **프로젝트 소개 - 게시판 만들기**

## 배포 주소
### 📒 

<br>
<br>

## 프로젝트 설명

- 게시판에 글쓰기로 한줄평을 작성하여 게시판에 올리는 기능입니다.
- 사이드 메뉴바는 버튼 클릭시 슬라이드형식으로 나옵니다.

<br>
<br>

## **언어**

> JavaScript
> React.js

## **라이브러리**

> styled-components

> styled-reset

> react-dom

> react-router-dom

> react-chart.js


<br>
<br>

## 프로젝트 설치 및 실행 방법

1. Node.js를 설치해주세요.
```
https://nodejs.org/
```

2. 레포지토리를 클론 후 폴더로 이동 해주세요.
```
https://github.com/KOWOONLEE/5th_mini_notice_board.git
```

3. dependencies를 설치해주세요.
```
npm install
```

4. 명령어를 통해 server를 실행해주세요.
```
npm run start
```

<br>
<br>

## 기능 소개

### ✅ 사이드 바
왼쪽 상단에 메뉴 아이콘을 클릭하여 사이드바를 슬라이드로 열고 닫을 수 있습니다.
![게시판](https://user-images.githubusercontent.com/108816777/196780801-0e92eb6f-23c3-4fb7-b850-40cc385b3543.gif)

### ✅ 메인화면
화면의 차트는 게시판 작성 월 등록 개수를 표현한 것입니다.

<br>
<br>

### ✅ 게시판 작성 및 조회
왼쪽 상단에 게시판 메뉴를 클릭하면 게시판으로 이동하고 하단에 한줄평 입력창에서 내용 입력 후 등록하기 버튼을 누르면 위의 게시판에 업로드 됩니다.
![슬라이드](https://user-images.githubusercontent.com/108816777/196780247-0172a598-6933-487b-a7fd-b1aee3e9462d.gif)

<br>
<br>



## 코드 설명
- 사이드 메뉴바는 boolean 상태값을 지정해서 해당 상태값에 따라 className을 변경하게 해주었습니다. 변경된 className으로 메뉴바 너비를 조정하였고,
  너비 조정시에 슬라이드 효과를 주기위해 transition을 사용했습니다.
  
- 메인화면에 차트화면은 게시판 메뉴의 월 작성 글 갯수를 나타낸 것입니다. 데이터를 연동해서 넣고 싶었는데 진행이 안되어 수기로 하드코딩 진행했습니다.
  chart.js 라이브러리 사용에 의의를 두었습니다.
  
- 게시판 메뉴는 하단에 제목 및 한줄평을 작성하게 input 창을 두었습니다. 내용 입력 후 입력하기 버튼을 클릭하면 위의 게시판 목록에 업로드 됩니다.
  이 때 날짜는 금일날짜 (new Date())로 들어가게 됩니다.

<br>
<br>


## 작성자 깃허브 및 블로그 계정

- 깃허브 https://github.com/KOWOONLEE
- 블로그 https://velog.io/@kkk5689
