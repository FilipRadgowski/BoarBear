let checkBool = true;
let checkInt = 0;  
let buttIndex = 0;

let timer = 0;
let score = 0;
let highScore = 0;
let lives = 3;

let mainInterval;

let intervalTime = 5000;
let timeParameter = 0.9;
let minimalTime = 750;

const htmltimer = document.querySelector("#timer");
const highscore = document.querySelector("#highscore");
const livecount = document.querySelector("#lives");

const startButt = document.querySelector("#start");

const silly = document.querySelector("#silly");
const sillybilly = document.querySelector("#sillybilly");
const billy = document.querySelector("#billy");

silly.addEventListener("click", function(e){buttPress(e, 2, silly)});
sillybilly.addEventListener("click", function(e){buttPress(e, 5, sillybilly)});
billy.addEventListener("click", function(e){buttPress(e, 3, billy)});

function startInterval(){
    timer = 0;
    lives = 3;
    timer++;
    htmltimer.innerHTML = timer;

    startButt.style.display = 'none';

    mainInterval = setInterval(counting, intervalTime);
    checkBool = false;

    //mainInterval = setInterval(counting, 5000);
}

//the main timer function//
function counting(){
    check();
    resetButtons();

    score = timer;

    if(highScore < timer){
        highScore = timer;
        highscore.innerHTML = highScore;
    }

    if((!checkBool) && (checkInt!=0)){
        lives--;
        vibeCheck();
    }
    timer++;
    checkBool = false;
    checkInt = 0;

    htmltimer.innerHTML = timer;
}

function buttPress(event, buttIndex, buttObj){
    check();
    //checking if a button was pressed before - multiple clicks protection//
    if(!checkBool){
        //check if the correct button was pressed//
        if(buttIndex != checkInt){
            lives--;
            buttObj.style.background = '#FF0000';
        }else{
            buttObj.style.background = '#00FF00';
        }
        checkBool = true;

        vibeCheck();
    }
}

//button press checking function//
function check(){
    //checking if the timer number is divisible by 2 and 3 or if it has a 2 or 3 in it//
    if(timer%2==0||timer.toString().indexOf("2") > -1){
        checkInt+=2;
    }
    if(timer%3==0||timer.toString().indexOf("3") > -1){
        checkInt+=3;
    }
}

function vibeCheck(){
    livecount.innerHTML = lives;
    if(lives <= 0){
        clearInterval(mainInterval+1);
        clearInterval(mainInterval);
        clearInterval(mainInterval-1);

        htmltimer.innerHTML = `GAME OVER <br> Your score: ${score}`;

        checkBool = true;
        resetButtons();

        startButt.innerHTML = 'ReStart';
        startButt.style.display = 'inline';
    }else{
        if(intervalTime > minimalTime){
            intervalTime *= timeParameter;
            clearInterval(mainInterval);
            mainInterval = setInterval(counting, intervalTime);
        }else{
            intervalTime = minimalTime;
        };
    }

    console.log(intervalTime);
}

function resetButtons(){
    silly.style.background = '#FFFFFF';
    sillybilly.style.background = '#FFFFFF';
    billy.style.background = '#FFFFFF';
}

/*
//reaction time - version not final, have to adjust some things and make it viable again//
button.addEventListener("click", reactiontime);
const output = document.querySelector("#output");

function reactiontime(event) {
    console.log(event.target)
  if (czas) {
    var konieczas = Date.now();
    var difference = konieczas - czas;
    output.innerText = difference + ' ms';
    czas = null;
    button.innerText = "Silly";
  } else {
    czas = Date.now();
    button.innerText = "Silly";
    output.innerText = "\n";
  }
}
*/