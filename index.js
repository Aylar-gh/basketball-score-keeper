let homeScoreDisplay = document.getElementById("homeScore")
let home = 0;

let guestScoreDisplay = document.getElementById("guestScore")
let guest =0;

function score1(){
    home+= 1;
    homeScoreDisplay.textContent = home;
}
function score2(){
    home+=2;
    homeScoreDisplay.textContent = home;
}
function score3(){
    home+=3
    homeScoreDisplay.textContent = home;
}

function gScore1(){
 guest +=1
 guestScoreDisplay.textContent = guest;
}

function gScore2(){
 guest +=2
    guestScoreDisplay.textContent = guest;

}
function gScore3(){
 guest +=3
 guestScoreDisplay.textContent = guest;
    
}