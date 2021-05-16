var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;

// if we click on start/reset 
document.getElementById("startreset").onclick = function(){
    //if we are playing
    if(playing == true){
        
        location.reload(); //reload the page
    }else{ //if we are not playing
        
        //change mode to playing
        playing = true;
        
        //set score to 0
        score = 0;
document.getElementById("scorevalue").innerHTML = score;

        //show countdown box
        show("timeremain");
        timeremaining = 60;
        document.getElementById("timeremainvalue").innerHTML = timeremaining;
        
        //hide game over box
        hide("gameover");
        
        //change the button to reset
document.getElementById("startreset").innerHTML = "Reset Game";
        
        //start the countdown
        startCountdown();
        
        //generate new ques and multiple ans
        generateQA();
    }
}

//clicking on ans box
for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    //check if we are playing?
    if(playing == true){ //yes
       if(this.innerHTML == correctAnswer){
            //correct ans
           
           //increase score by 1
            score++;
            document.getElementById("scorevalue").innerHTML = score;
           
           //hide wrong box and show correct box
           hide("wrong");
           show("correct");
           setTimeout(function(){
               hide("correct");
           }, 1000);
           //generate new Q&A
           generateQA();
           
          }else{
              //wrong ans
              hide("correct");
           show("wrong");
           setTimeout(function(){
               hide("wrong");
           }, 1000);
          }
       }   
}
} 


//if we click on ans box
    //if we are playing
        //correct?
            //yes
                //increase score by 1
                //show correct box for 1sec
                //generate new Q&A
            //no
                //show try again box doe 1sec





//functions

//start counter
function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;
                         
document.getElementById("timeremainvalue").innerHTML = timeremaining;
        if(timeremaining == 0){//game over 
            stopCountdown();
            show("gameover");
            document.getElementById("gameover").innerHTML = "<p>game over!</p><p>your score is " + score + ".</p>";
            hide("timeremain");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
            }
        }, 1000);
}

//stop counter
function stopCountdown(){
    clearInterval(action);
}

//hide a element

function hide(Id){
    document.getElementById(Id).style.display = "none";
}

//show an element

function show(Id){
    document.getElementById(Id).style.display = "block";
}

//generae ques and multiple ans
function generateQA(){
    var x = 1+ Math.round(9*Math.random());
    var y = 1+ Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1+ Math.round(3*Math.random());
    document.getElementById("box"+ correctPosition).innerHTML = correctAnswer; //fill one box with the correct answer
    
    //fill other boxes with wrong ans
    
    var answers = [correctAnswer];
    
    for(i=1; i<5; i++){
        if(i != correctPosition ){
            var wrongAnswer;
            do{
                 wrongAnswer = (1+Math.round(9*Math.random())) * (1+ Math.round(9*Math.random())); //a wrong ans
            }while(answers.indexOf(wrongAnswer)>-1)
                
                
            document.getElementById("box"+i).innerHTML = wrongAnswer;
                answers.push(wrongAnswer);
        }
    }
}


