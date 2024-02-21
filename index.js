var tcs = document.getElementById('tcs');
var intern = document.getElementById('intern');
var gmu1 = document.getElementById('gmu1');
var gmu2 = document.getElementById('gmu2');
var glic = document.getElementById('glic');


tcs.addEventListener('click' , tcsDisplay);
intern.addEventListener('click', internDisplay);
gmu1.addEventListener('click' , gmu1Display);
gmu2.addEventListener('click', gmu2Display)
glic.addEventListener('click', glicDisplay)

var tcsD = document.getElementById('experience-info-tcs');
var internD = document.getElementById('experience-info-intern');
var gmu1D = document.getElementById('experience-info-gmu1');
var gmu2D = document.getElementById('experience-info-gmu2');
var glicD = document.getElementById('experience-info-glic');

function glicDisplay(){
    tcs.style.fontSize = '16px';
    tcsD.style.display = 'none';    
    intern.style.fontSize = '16px';
    internD.style.display = 'none';
    gmu1.style.fontSize = '16px';
    gmu1D.style.display = 'none';
    gmu2.style.fontSize = '16px';
    gmu2D.style.display = 'none';    
    glic.style.fontSize = '20px';
    glicD.style.display = 'block';      
}

function gmu2Display(){
    tcs.style.fontSize = '16px';
    tcsD.style.display = 'none';    
    intern.style.fontSize = '16px';
    internD.style.display = 'none';
    gmu1.style.fontSize = '16px';
    gmu1D.style.display = 'none';
    gmu2.style.fontSize = '20px';
    gmu2D.style.display = 'block';   
    glic.style.fontSize = '16px';
    glicD.style.display = 'none';
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
    glic.style.fontSize = '16px';
    glicD.style.display = 'none';        
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
    glic.style.fontSize = '16px';
    glicD.style.display = 'none';      
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
    glic.style.fontSize = '16px';
    glicD.style.display = 'none';       
}
glicDisplay()

const resume = document.getElementById('resume');
resume.addEventListener('click',resumefile);
function resumefile() {
    window.location.href="https://drive.google.com/file/d/1T8fkB8dddEgJ5-I52J_Jl7xJZhLIbu0C/view?usp=drive_link";
    console.log('okay');
}
