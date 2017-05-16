var painted;
var content;
var winningCombinations;
var turn=0;
var theCanvas;
var cxt;
var c;
var cxt;
var squareFilled=0;
var w;
var y;
var flag=0;
var colour,colour2;
var count=0;
var f=0;
window.onload=function(){
  painted= new Array();
  content= new Array();
  winningCombinations=[[0,1,2],[2,5,8],[8,7,6],[0,3,6],[3,4,5],[1,4,7],[0,4,8],[2,4,6]];
  for(var l=0;l<9;l++){
    painted[l]=false;
    content[l]='';
  }
}
function changecolor(clr){
  if(clr==1)
  colour='#46a049';
  if (clr==2)
  colour='#0b7dda';
  if (clr==3)
  colour='#e68a00';
  if(clr==4)
  colour='#da190b';
  localStorage.setItem("colour", colour);
}
function changecolor2(clr1){
  if(clr1==1)
  colour2='#46a049';
  if (clr1==2)
  colour2='#0b7dda';
  if (clr1==3)
  colour2='#e68a00';
  if(clr1==4)
  colour2='#da190b';
  localStorage.setItem("colour2", colour2);
}

function canvasClicked(canvasNumber){
  theCanvas="canvas"+canvasNumber;
  c=document.getElementById(theCanvas);
  cxt=c.getContext("2d");
  if(flag==0)
  if(painted[canvasNumber-1]==false){
    if(turn%2==0){
      cxt.beginPath();
      cxt.moveTo(10,10);
      cxt.lineTo(90,90);
      cxt.moveTo(90,10);
      cxt.lineTo(10,90);
      cxt.lineWidth=15;
      cxt.strokeStyle = localStorage.getItem("colour");
      cxt.stroke();
      cxt.closePath();
      content[canvasNumber-1]='x';
      painted[canvasNumber-1]=true;
      checkForWinners(content[canvasNumber-1]);
      if(flag==1)
      return;
      if(f==1){
        //for computer
        //edges
        if(content[0]=='0'&&content[1]=='0'&&content[2]=='')
          canvasNumber=3;
        else if(content[0]=='0'&&content[1]==''&&content[2]=='0')
          canvasNumber=2;
        else if(content[0]==''&&content[1]=='0'&&content[2]=='0')
          canvasNumber=1;
          else if(content[2]=='0'&&content[5]=='0'&&content[8]=='')
            canvasNumber=9;
          else if(content[2]=='0'&&content[5]==''&&content[8]=='0')
            canvasNumber=6;
          else if(content[2]==''&&content[5]=='0'&&content[8]=='0')
            canvasNumber=3;
            else if(content[6]=='0'&&content[7]=='0'&&content[8]=='')
              canvasNumber=9;
            else if(content[6]=='0'&&content[7]==''&&content[8]=='0')
              canvasNumber=8;
            else if(content[6]==''&&content[7]=='0'&&content[8]=='0')
              canvasNumber=7;
              else if(content[0]=='0'&&content[3]=='0'&&content[6]=='')
                canvasNumber=7;
              else if(content[0]=='0'&&content[3]==''&&content[6]=='0')
                canvasNumber=4;
              else if(content[0]==''&&content[3]=='0'&&content[6]=='0')
                canvasNumber=1;
              //middle horizontal and verticle
              else if(content[3]=='0'&&content[4]=='0'&&content[5]=='')
                canvasNumber=6;
              else if(content[3]=='0'&&content[4]==''&&content[5]=='0')
                canvasNumber=5;
              else if(content[3]==''&&content[4]=='0'&&content[5]=='0')
                canvasNumber=4;
                else if(content[1]=='0'&&content[4]=='0'&&content[7]=='')
                  canvasNumber=8;
                else if(content[1]=='0'&&content[4]==''&&content[7]=='0')
                  canvasNumber=5;
                else if(content[1]==''&&content[4]=='0'&&content[7]=='0')
                  canvasNumber=2;
                //Diagonals
                else if(content[0]=='0'&&content[4]=='0'&&content[8]=='')
                  canvasNumber=9;
                else if(content[0]=='0'&&content[4]==''&&content[8]=='0')
                  canvasNumber=5;
                else if(content[0]==''&&content[4]=='0'&&content[8]=='0')
                  canvasNumber=1;
                  else if(content[2]=='0'&&content[4]=='0'&&content[6]=='')
                    canvasNumber=7;
                  else if(content[2]=='0'&&content[4]==''&&content[6]=='0')
                    canvasNumber=5;
                  else if(content[2]==''&&content[4]=='0'&&content[6]=='0')
                    canvasNumber=3;
                    //for player
        //combined corners
        else if(content[1]=='x'&&content[5]=='x'&&content[2]==''&&content[0]==''&&content[8]=='')
          canvasNumber=3;
        else if(content[5]=='x'&&content[7]=='x'&&content[8]==''&&content[2]==''&&content[6]=='')
          canvasNumber=9;
        else if(content[3]=='x'&&content[7]=='x'&&content[6]==''&&content[0]==''&&content[8]=='')
          canvasNumber=7;
        else if(content[1]=='x'&&content[3]=='x'&&content[0]==''&&content[6]==''&&content[2]=='')
          canvasNumber=1;
        //if first move corner
        else if(content[0]=='x'&&content[4]==''&&content[8]=='')
          canvasNumber=5;
        else if(content[2]=='x'&&content[4]==''&&content[6]=='')
          canvasNumber=5;
        else if(content[8]=='x'&&content[4]==''&&content[0]=='')
          canvasNumber=5;
        else if(content[6]=='x'&&content[4]==''&&content[2]=='')
          canvasNumber=5;
        //if first move middle
        else if(content[0]==''&&content[1]==''&&content[2]==''&&content[3]==''&&content[5]==''&&content[6]==''&&content[7]==''&&content[8]==''&&content[4]=='x'){
          canvasNumber=getRandom();
          while(1){
            if(canvasNumber==1||canvasNumber==3||canvasNumber==7||canvasNumber==9)
            break;
            canvasNumber=getRandom();
          }
        }
        //edges
        else if(content[0]=='x'&&content[1]=='x'&&content[2]=='')
          canvasNumber=3;
        else if(content[0]=='x'&&content[1]==''&&content[2]=='x')
          canvasNumber=2;
        else if(content[0]==''&&content[1]=='x'&&content[2]=='x')
          canvasNumber=1;
          else if(content[2]=='x'&&content[5]=='x'&&content[8]=='')
            canvasNumber=9;
          else if(content[2]=='x'&&content[5]==''&&content[8]=='x')
            canvasNumber=6;
          else if(content[2]==''&&content[5]=='x'&&content[8]=='x')
            canvasNumber=3;
            else if(content[6]=='x'&&content[7]=='x'&&content[8]=='')
              canvasNumber=9;
            else if(content[6]=='x'&&content[7]==''&&content[8]=='x')
              canvasNumber=8;
            else if(content[6]==''&&content[7]=='x'&&content[8]=='x')
              canvasNumber=7;
              else if(content[0]=='x'&&content[3]=='x'&&content[6]=='')
                canvasNumber=7;
              else if(content[0]=='x'&&content[3]==''&&content[6]=='x')
                canvasNumber=4;
              else if(content[0]==''&&content[3]=='x'&&content[6]=='x')
                canvasNumber=1;
              //middle horizontal and verticle
              else if(content[3]=='x'&&content[4]=='x'&&content[5]=='')
                canvasNumber=6;
              else if(content[3]=='x'&&content[4]==''&&content[5]=='x')
                canvasNumber=5;
              else if(content[3]==''&&content[4]=='x'&&content[5]=='x')
                canvasNumber=4;
                else if(content[1]=='x'&&content[4]=='x'&&content[7]=='')
                  canvasNumber=8;
                else if(content[1]=='x'&&content[4]==''&&content[7]=='x')
                  canvasNumber=5;
                else if(content[1]==''&&content[4]=='x'&&content[7]=='x')
                  canvasNumber=2;
                //Diagonals
                else if(content[0]=='x'&&content[4]=='x'&&content[8]=='')
                  canvasNumber=9;
                else if(content[0]=='x'&&content[4]==''&&content[8]=='x')
                  canvasNumber=5;
                else if(content[0]==''&&content[4]=='x'&&content[8]=='x')
                  canvasNumber=1;
                  else if(content[2]=='x'&&content[4]=='x'&&content[6]=='')
                    canvasNumber=7;
                  else if(content[2]=='x'&&content[4]==''&&content[6]=='x')
                    canvasNumber=5;
                  else if(content[2]==''&&content[4]=='x'&&content[6]=='x')
                    canvasNumber=3;
        else{
          canvasNumber=getRandom();
          while(painted[canvasNumber-1]==true){
            canvasNumber=getRandom();
            if(squareFilled>7)
            return;
          }
        }
        theCanvas="canvas"+canvasNumber;
        c=document.getElementById(theCanvas);
        cxt=c.getContext("2d");
        cxt.beginPath();
        cxt.arc(50,50,40,0,Math.PI*2,true);
        cxt.lineWidth=15;
        cxt.strokeStyle = localStorage.getItem("colour2");
        cxt.stroke();
        cxt.closePath();
        content[canvasNumber-1]='0';
        painted[canvasNumber-1]=true;
        checkForWinners(content[canvasNumber-1]);
    }
    else if(f==2){
      canvasNumber=getRandom();
      while(painted[canvasNumber-1]==true){
        canvasNumber=getRandom();
        if(squareFilled>7)
        return;
      }
    theCanvas="canvas"+canvasNumber;
    c=document.getElementById(theCanvas);
    cxt=c.getContext("2d");
    cxt.beginPath();
    cxt.arc(50,50,40,0,Math.PI*2,true);
    cxt.lineWidth=15;
    cxt.strokeStyle = localStorage.getItem("colour2");
    cxt.stroke();
    cxt.closePath();
    content[canvasNumber-1]='0';
    painted[canvasNumber-1]=true;
    checkForWinners(content[canvasNumber-1]);
  }
  }
    else{
      cxt.beginPath();
      cxt.arc(50,50,40,0,Math.PI*2,true);
      cxt.lineWidth=15;
      cxt.strokeStyle = localStorage.getItem("colour2");
      cxt.stroke();
      cxt.closePath();
      content[canvasNumber-1]='0';
      painted[canvasNumber-1]=true;
      checkForWinners(content[canvasNumber-1]);
    }
    if(f==0)
    turn++;
    if(f==0)
    squareFilled++;
    else
    squareFilled=squareFilled+2;
  }
  else{
    alert("That space is already occupied!");
  }
}

function checkForWinners(symbol){
  for(var a=0;a<winningCombinations.length;a++){
    if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]==symbol&&content[winningCombinations[a][2]]==symbol){
      flag=1;
      if(symbol==0){
        for(var i=0;i<3;i++){
          theCanvas="canvas"+(winningCombinations[a][i]+1);
          c=document.getElementById(theCanvas);
          cxt=c.getContext("2d");
          cxt.beginPath();
          cxt.arc(50,50,40,0,Math.PI*2,true);
          cxt.lineWidth=20;
          cxt.strokeStyle = '#999';
          cxt.stroke();
          cxt.closePath();
        }
        setTimeout(function(){
          alert("Player 0 Wins!");
        },100);
      }
      else{
        for(var i=0;i<3;i++){
        theCanvas="canvas"+(winningCombinations[a][i]+1);
        c=document.getElementById(theCanvas);
        cxt=c.getContext("2d");
        cxt.beginPath();
        cxt.moveTo(10,10);
        cxt.lineTo(90,90);
        cxt.moveTo(90,10);
        cxt.lineTo(10,90);
        cxt.lineWidth=20;
        cxt.strokeStyle='#999';
        cxt.stroke();
        cxt.closePath();
      }
        setTimeout(function(){
          alert("Player X Wins!");
        },100);
      }
    }
  }
}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}
function slidr(){
  if(count%2==0)
  f=1;
  else
  f=0;
  count++;
  turn=0;
  squareFilled=0;
  flag=0;
  for(var l=0;l<9;l++){
      painted[l]=false;
      content[l]='';
      theCanvas="canvas"+(l+1);
      c=document.getElementById(theCanvas);
      cxt=c.getContext("2d");
      cxt.clearRect(0,0,100,100);
    }
}
function slidr1(){
  if(count%2==0)
  f=2;
  else
  f=0;
  count++;
  turn=0;
  squareFilled=0;
  flag=0;
  for(var l=0;l<9;l++){
      painted[l]=false;
      content[l]='';
      theCanvas="canvas"+(l+1);
      c=document.getElementById(theCanvas);
      cxt=c.getContext("2d");
      cxt.clearRect(0,0,100,100);
    }
}
function getRandom(){
  return canvasNumber=Math.floor(Math.random()*(8))+1;
}
