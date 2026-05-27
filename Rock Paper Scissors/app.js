// Math.floor(Math.random() * 11);

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
var valuee=-1, user=0 , computer=0;


      function result(){
        var pc = Math.floor(Math.random()*3)+1;
        if(valuee === pc) {
            document.getElementById("demo").innerHTML="DRAW";
            document.getElementById("demo").style.color="#fed330";
        }
        else if(valuee < pc) {
            document.getElementById("demo").innerHTML="Oh No! you loose the  game. Try again";
            document.getElementById("demo").style.color="#9f050bff";
            computer++;
            document.getElementById("computer-point").innerHTML = computer ;
        }
        else if(valuee > pc) {
            document.getElementById("demo").innerHTML="Congrats! You won the game. Lets play again";
            document.getElementById("demo").style.color="#4cd137";
            user++;
            document.getElementById("user-point").innerHTML = user ;
        }
        
    }


    rock.addEventListener("click",(event) => {
        
         if(valuee <0 ){
            event.target.classList.add('hover');
            valuee =1;
            result();
            setTimeout(function(){
                event.target.classList.remove('hover');
            },1000)
            valuee=-1;
         }
    });



    paper.addEventListener("click",(event) => {

        if(valuee <0 ){
            event.target.classList.add('hover');
            valuee =2;
            result();
            setTimeout(function(){
                event.target.classList.remove('hover');
            },1000)
            valuee=-1;

         }
    });
 
   
    scissors.addEventListener("click",(event) => {

    if(valuee <0 ){
            event.target.classList.add('hover');
            valuee =3;
            result();
            setTimeout(function(){
                event.target.classList.remove('hover');
            },1000)
            valuee=-1;
         }
    });

  
    



 

