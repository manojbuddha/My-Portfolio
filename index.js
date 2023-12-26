var tcs = document.getElementById('tcs');
var intern = document.getElementById('intern');
var gmu1 = document.getElementById('gmu1');
var gmu2 = document.getElementById('gmu2');

tcs.addEventListener('click' , tcsDisplay);
intern.addEventListener('click', internDisplay);
gmu1.addEventListener('click' , gmu1Display);
gmu2.addEventListener('click', gmu2Display)

var tcsD = document.getElementById('experience-info-tcs');
var internD = document.getElementById('experience-info-intern');
var gmu1D = document.getElementById('experience-info-gmu1');
var gmu2D = document.getElementById('experience-info-gmu2');

function gmu2Display(){
    tcs.style.fontSize = '16px';
    tcsD.style.display = 'none';    
    intern.style.fontSize = '16px';
    internD.style.display = 'none';
    gmu1.style.fontSize = '16px';
    gmu1D.style.display = 'none';
    gmu2.style.fontSize = '20px';
    gmu2D.style.display = 'block';    
}

function tcsDisplay(){
    tcs.style.fontSize = '20px';
    tcsD.style.display = 'block';    
    intern.style.fontSize = '16px';
    internD.style.display = 'none';
    gmu1.style.fontSize = '16px';
    gmu1D.style.display = 'none';
    gmu2.style.fontSize = '16px';
    gmu2D.style.display = 'none';        
}
function internDisplay(){
    tcs.style.fontSize = '16px';
    tcsD.style.display = 'none';    
    intern.style.fontSize = '20px';
    internD.style.display = 'block';
    gmu1.style.fontSize = '16px';
    gmu1D.style.display = 'none';
    gmu2.style.fontSize = '16px';
    gmu2D.style.display = 'none';      
}
function gmu1Display(){
    tcs.style.fontSize = '16px';
    tcsD.style.display = 'none';    
    intern.style.fontSize = '16px';
    internD.style.display = 'none';
    gmu1.style.fontSize = '20px';
    gmu1D.style.display = 'block';
    gmu2.style.fontSize = '16px';
    gmu2D.style.display = 'none';      
}
gmu2Display()

const resume = document.getElementById('resume');
resume.addEventListener('click',resumefile);
function resumefile() {
    window.location.href="https://drive.google.com/file/d/1Ddr2Ic1hYQpEdYEy4AD612TrBAZFrdj7/view?usp=sharing";
    console.log('okay');
}