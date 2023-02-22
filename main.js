
var timer = {
  pomodoro: 25,
  shortbreak: 5,
  longbreak: 15,
  longbreakInterval: 4,
};

let shortbreak_time = 4;
let longbreak_time = 14;
let pomodoro_time = 24;
var intervalId;
let pomodoro_seconds = 59;
let longbreak_seconds = 59;
let shortbreak_seconds = 59;
let count_min = pomodoro_time;
let count_seconds = pomodoro_seconds;
let current_time = (pomodoro_time + 1)*60
var conic_primary = "#F87070"
var conic_secondary = "#161932"

// let pomodoro_current = pomodoro_time*60
// let shortbreak_current = shortbreak_time*60
// let longbreak_current = longbreak_time*60


let stateOfApp = "pomodoro";

window.onload = function insertDefaultValue(){
  
  document.getElementById('min').innerHTML = pomodoro_time + 1
}


if (stateOfApp == "pomodoro"){
  
  current_time = (pomodoro_time + 1)*60
}else if (stateOfApp == "shortbreak"){
  
  current_time = (shortbreak_time + 1)*60
}else if (stateOfApp == "longbreak"){
  
  current_time = (longbreak_time + 1)*60
}


function change(e) {
  if (e.id == "shortbreak" || e.id == "longbreak" || e.id == "pomodoro") {
    const activeButton = document.querySelector(".active");

    activeButton.classList.add("button");
    activeButton.classList.remove("active");

    const currentActive = document.getElementById(e.id);
    stateOfApp = e.id;
    currentActive.classList.remove("button");
    currentActive.classList.add("active");


    //reset progress bar when tab is clicked
    let progressBar = document.querySelector(".inner-most");

    if (stateOfApp == "pomodoro"){
    progressValue = 100
      progressBar.style.background = `conic-gradient(
        ${conic_primary} ${progressValue * 3.6}deg,
        ${conic_secondary} ${progressValue * 3.6}deg
    )`;
  }else if (stateOfApp == "shortbreak"){
      
    
      progressValue = 100
      progressBar.style.background = `conic-gradient(
        ${conic_primary} ${progressValue * 3.6}deg,
        ${conic_secondary} ${progressValue * 3.6}deg
    )`;
      
  }else if (stateOfApp == "longbreak"){
      
    progressValue = 100
    progressBar.style.background = `conic-gradient(
      ${conic_primary} ${progressValue * 3.6}deg,
      ${conic_secondary} ${progressValue * 3.6}deg
  )`;
  }

    changeTime(e.id);
    clearInterval(intervalId);


    var startbutton = document.getElementById("start");
    var pausebutton = document.getElementById("pause");
    var continuebutton = document.getElementById("continue");
    var restartbutton = document.getElementById("restart");

    startbutton.classList.remove('closed');
    pausebutton.classList.add('closed');
    continuebutton.classList.add('closed');
    restartbutton.classList.add('closed');
  }
}

function changeTime(e) {
  if (e == "shortbreak") {
    document.getElementById("min").innerHTML = shortbreak_time + 1;
    document.getElementById("sec").innerHTML = "00";
  } else if (e == "longbreak") {
    document.getElementById("min").innerHTML = longbreak_time +1;
    document.getElementById("sec").innerHTML = "00";
  } else if (e == "pomodoro") {
    document.getElementById("min").innerHTML = pomodoro_time + 1;
    document.getElementById("sec").innerHTML = "00";
  }
  
}

function clickStart() {

  if (stateOfApp == "pomodoro"){
      count_min = pomodoro_time;
      count_seconds = pomodoro_seconds;
  }else if (stateOfApp == "shortbreak"){
      count_min = shortbreak_time;
      count_seconds = shortbreak_seconds;

  }else if (stateOfApp == "longbreak"){
      count_min = longbreak_time
      count_seconds = longbreak_seconds
  }
  
  if (count_min >= 0) {
    document.getElementById("min").innerHTML = count_min;
    document.getElementById("sec").innerHTML = count_seconds;

    intervalId = setInterval(countTime, 1000);
  }


  if (stateOfApp == "pomodoro"){
  
    current_time = (pomodoro_time + 1)*60
}else if (stateOfApp == "shortbreak"){
    
    current_time = (shortbreak_time + 1)*60
}else if (stateOfApp == "longbreak"){
    
    current_time = (longbreak_time + 1)*60
}


  var startbutton = document.getElementById("start");
  var pausebutton = document.getElementById("pause");
  var continuebutton = document.getElementById("continue");

  startbutton.classList.add('closed');
  pausebutton.classList.remove('closed');
  continuebutton.classList.add('closed');
  
}


function clickContinue(){
  if (count_min >= 0) {
    document.getElementById("min").innerHTML = count_min;
    document.getElementById("sec").innerHTML = count_seconds;

    intervalId = setInterval(countTime, 1000);
  }


  var startbutton = document.getElementById("start");
  var pausebutton = document.getElementById("pause");
  var continuebutton = document.getElementById("continue");

  startbutton.classList.add('closed');
  pausebutton.classList.remove('closed');
  continuebutton.classList.add('closed');
}

function clickPause(){
  clearInterval(intervalId);

  var startbutton = document.getElementById("start");
  var pausebutton = document.getElementById("pause");
  var continuebutton = document.getElementById("continue");
  var restartbutton = document.getElementById("restart");

  startbutton.classList.add('closed');
  pausebutton.classList.add('closed');
  continuebutton.classList.remove('closed');
  restartbutton.classList.add('closed')
}


function clickReStart(){


    let progressBar = document.querySelector(".inner-most");

    if (stateOfApp == "pomodoro"){
    progressValue = 100
      progressBar.style.background = `conic-gradient(
        ${conic_primary} ${progressValue * 3.6}deg,
        ${conic_secondary} ${progressValue * 3.6}deg
    )`;
  }else if (stateOfApp == "shortbreak"){
      
    
      progressValue = 100
      progressBar.style.background = `conic-gradient(
        ${conic_primary} ${progressValue * 3.6}deg,
        ${conic_secondary} ${progressValue * 3.6}deg
    )`;
      
  }else if (stateOfApp == "longbreak"){
      
    progressValue = 100
    progressBar.style.background = `conic-gradient(
      ${conic_primary} ${progressValue * 3.6}deg,
      ${conic_secondary} ${progressValue * 3.6}deg
  )`;
  }



 changeTime(stateOfApp);
 clearInterval(intervalId);


    var startbutton = document.getElementById("start");
    var pausebutton = document.getElementById("pause");
    var continuebutton = document.getElementById("continue");
    var restartbutton = document.getElementById("restart");

    startbutton.classList.remove('closed');
    pausebutton.classList.add('closed');
    continuebutton.classList.add('closed');
    restartbutton.classList.add('closed')
}

function countTime() {
let total_time;
  if (stateOfApp == "pomodoro"){
      total_time = (pomodoro_time + 1)*60
     
  }else if (stateOfApp == "shortbreak"){
      total_time = (shortbreak_time + 1)*60
     
  }else if (stateOfApp == "longbreak"){
      total_time = (longbreak_time + 1)*60
     
  }

  let progressBar = document.querySelector(".inner-most");
  let progressValue = (((current_time-1)/total_time)*100);
   
  
  progressBar.style.background = `conic-gradient(
    ${conic_primary} ${progressValue * 3.6}deg,
    ${conic_secondary} ${progressValue * 3.6}deg
  )`;

if (count_seconds == 0) {
  if (count_min == 0) {
    
    clearInterval(intervalId);
    var startbutton = document.getElementById("start");
    var pausebutton = document.getElementById("pause");
    var continuebutton = document.getElementById("continue");
    var restartbutton = document.getElementById("restart");

    startbutton.classList.add('closed');
    pausebutton.classList.add('closed');
    continuebutton.classList.add('closed');
    restartbutton.classList.remove('closed')
  } else {
    count_min = count_min - 1;

    count_seconds = 60;
    

    if (count_min < 10) {
      document.getElementById("min").innerHTML = `0${count_min}`;
    } else {
      document.getElementById("min").innerHTML = count_min;
    }
  }
}

if (count_seconds > 0) {
  count_seconds = count_seconds - 1;
  current_time = current_time - 1;
  

  if (count_seconds < 10) {
    document.getElementById("sec").innerHTML = `0${count_seconds}`;
  } else {
    document.getElementById("sec").innerHTML = count_seconds;
  }
}
}


//Pop modal
var modal = document.getElementById("modal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
modal.style.display = "block";
}

span.onclick = function() {
modal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
}


function changeColor (e){

if (e.id == "green"){
  
  document.documentElement.style.setProperty('--orange-color', '#70F3F8');
  conic_primary = "#70F3F8"
  const activeFontButton = document.querySelector(".color-active")
  
  activeFontButton.classList.add("color-change")
  activeFontButton.classList.remove("color-active")
  const currentFontActive = document.getElementById(e.id);
  currentFontActive.classList.remove("color-change")
  currentFontActive.classList.add("color-active")
  let progressBar = document.querySelector(".inner-most");
  progressBar.style.background = `conic-gradient(
    ${conic_primary} ${progressValue * 3.6}deg,
    ${conic_secondary} ${progressValue * 3.6}deg
)`;
  
}else if (e.id == "purple"){
  document.documentElement.style.setProperty('--orange-color', '#D881F8');
  conic_primary = "#D881F8"
  const activeFontButton = document.querySelector(".color-active")
  
  activeFontButton.classList.add("color-change")
  activeFontButton.classList.remove("color-active")
  const currentFontActive = document.getElementById(e.id);
  currentFontActive.classList.remove("color-change")
  currentFontActive.classList.add("color-active")

  let progressBar = document.querySelector(".inner-most");
  progressBar.style.background = `conic-gradient(
    ${conic_primary} ${progressValue * 3.6}deg,
    ${conic_secondary} ${progressValue * 3.6}deg
)`;
  
}else if (e.id == "orange"){
  document.documentElement.style.setProperty('--orange-color', '#F87070');
  conic_primary = "#F87070"
  const activeFontButton = document.querySelector(".color-active")
  
  activeFontButton.classList.add("color-change")
  activeFontButton.classList.remove("color-active")
  const currentFontActive = document.getElementById(e.id);
  currentFontActive.classList.remove("color-change")
  currentFontActive.classList.add("color-active")

  let progressBar = document.querySelector(".inner-most");
  progressBar.style.background = `conic-gradient(
    ${conic_primary} ${progressValue * 3.6}deg,
    ${conic_secondary} ${progressValue * 3.6}deg
)`;
  
}

}







function changeFont(e){

if (e.id == "RobotoSlab"){
  document.documentElement.style.setProperty('--font-family', 'RobotoSlab-bold');
  const activeFontButton = document.querySelector(".font-active")
  
  activeFontButton.classList.add("font-change")
  activeFontButton.classList.remove("font-active")
  const currentFontActive = document.getElementById(e.id);
  currentFontActive.classList.remove("font-change")
  currentFontActive.classList.add("font-active")
} else if (e.id == "SpaceMono"){
  document.documentElement.style.setProperty('--font-family', 'SpaceMono-Bold');
  const activeFontButton = document.querySelector(".font-active")
  activeFontButton.classList.add("font-change")
  activeFontButton.classList.remove("font-active")
  const currentFontActive = document.getElementById(e.id);
  currentFontActive.classList.remove("font-change")
  currentFontActive.classList.add("font-active")
} else if (e.id == "KumbhSans"){
  document.documentElement.style.setProperty('--font-family', 'KumbhSans-Bold');
  const activeFontButton = document.querySelector(".font-active")
  activeFontButton.classList.add("font-change")
  activeFontButton.classList.remove("font-active")
  const currentFontActive = document.getElementById(e.id);
  
  currentFontActive.classList.remove("font-change")
  currentFontActive.classList.add("font-active")
}
}



function applyChange(){

var setPomodoro = document.getElementById('pomodoro-setting').value
var setShortbreak =document.getElementById('shortbreak-setting').value
var setLongbreak = document.getElementById('longbreak-setting').value 

if (setPomodoro !== ""){
pomodoro_time = parseInt(setPomodoro)-1
count_min = pomodoro_time;
document.getElementById("min").innerHTML = count_min + 1;
}

if (setShortbreak !== ""){
shortbreak_time = parseInt(setShortbreak)-1
}

if (setLongbreak !== ""){
longbreak_time = parseInt(setLongbreak) -1
}

var modal = document.getElementById("modal");
modal.style.display = "none";

}
