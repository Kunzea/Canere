var context = new AudioContext(); //Object for generating sound
/* 
Creating an audio object with set parameters
// Note: OscillatorNode is a single use entity
    var o = context.createOscillator(); //Create Oscillator
    var g = context.createGain(); //This should get rid of a clicking noise when sound stops
    o.connect(g);
    g.connect(context.destination); //Connect oscillator to context
    o.type = "sine"; //Note default type is sine
//In order to stop the sound, we chage the gain value -note, this must be positive
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.5);
*/
var frequency = null;
var btn = null;


// Implementing the audio object when a button is pushed
function btnG3() {
    btn=document.getElementById("G3").innerText; // Fire when G3 is pushed
    /* ---- Audio Object ---- */
    oG3 = context.createOscillator();
    gG3 = context.createGain();
    oG3.connect(gG3);
    gG3.connect(context.destination);
    gG3.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.5); 
    oG3.frequency.value=392;
    oG3.start();
    console.log(btn);
    console.log(oG3.frequency.value);
    NewSound=context.createOscillator();
};

function btnA4() {
    btn=document.getElementById("A4").innerText;
    /* ---- Audio Object ---- */
    oA4 = context.createOscillator();
    gA4 = context.createGain();
    oA4.connect(gA4);
    gA4.connect(context.destination);
    gA4.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.5);
    oA4.frequency.value=440;
    oA4.start();
    console.log(btn);
    console.log(oA4.frequency.value);
    NewSound=context.createOscillator();
};

function btnB4() {
    btn=document.getElementById("B4").innerText;
    /* ---- Audio Object ---- */
    oB4 = context.createOscillator();
    gB4 = context.createGain();
    oB4.connect(gB4);
    gB4.connect(context.destination);
    gB4.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.5);
    oB4.frequency.value=493.9;
    oB4.start();
    console.log(btn);
    console.log(oB4.frequency.value);
    NewSound=context.createOscillator();
};

function btnC4() {
    btn=document.getElementById("C4").innerText;
    /* ---- Audio Object ---- */
    oC4 = context.createOscillator();
    gC4 = context.createGain();
    oC4.connect(gC4);
    gC4.connect(context.destination);
    gC4.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.5);
    oC4.frequency.value=523.3;
    oC4.start();
    console.log(btn);
    console.log(oC4.frequency.value);
    NewSound=context.createOscillator();
}

function btnD4() {
    btn=document.getElementById("D4").innerText;
    /* ---- Audio Object ---- */
    oD4 = context.createOscillator();
    gD4 = context.createGain();
    oD4.connect(gD4);
    gD4.connect(context.destination);
    gD4.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.5);
    oD4.frequency.value=587.3;
    oD4.start();
    console.log(btn);
    console.log(oD4.frequency.value);
    NewSound=context.createOscillator();
}
function btnE4() {
    btn=document.getElementById("E4").innerText;
    /* ---- Audio Object ---- */
    oE4 = context.createOscillator();
    gE4 = context.createGain();
    oE4.connect(gE4);
    gE4.connect(context.destination);
    gE4.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.5);
    oE4.frequency.value=659.3;
    oE4.start();
    console.log(btn);
    console.log(oE4.frequency.value);
    NewSound=context.createOscillator();
}
function btnShF4() {
    btn=document.getElementById("ShF4").innerText;
    /* ---- Audio Object ---- */
    oShF4 = context.createOscillator();
    gShF4 = context.createGain();
    oShF4.connect(gShF4);
    gShF4.connect(context.destination);
    gShF4.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.5);
    oShF4.frequency.value=740;
    oShF4.start();
    console.log(btn);
    console.log(oShF4.frequency.value);
    NewSound=context.createOscillator();
}
function btnG4() {
    btn=document.getElementById("G4").innerText;
    /* ---- Audio Object ---- */
    oG4 = context.createOscillator();
    gG4 = context.createGain();
    oG4.connect(gG4);
    gG4.connect(context.destination);
    gG4.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.5);
    oG4.frequency.value=784;
    oG4.start();
    console.log(btn);
    console.log(oG4.frequency.value);
    NewSound=context.createOscillator();
}
function btnA5() {
    btn=document.getElementById("A5").innerText;
    /* ---- Audio Object ---- */
    oA5 = context.createOscillator();
    gA5 = context.createGain();
    oA5.connect(gA5);
    gA5.connect(context.destination);
    gA5.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.5);
    oA5.frequency.value=880;
    oA5.start();
    console.log(btn);
    console.log(oA5.frequency.value);
    NewSound=context.createOscillator();
}
function btnB5() {
    btn=document.getElementById("B5").innerText;
    /* ---- Audio Object ---- */
    oB5 = context.createOscillator();
    gB5 = context.createGain();
    oB5.connect(gB5);
    gB5.connect(context.destination);
    gB5.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.5);
    oB5.frequency.value=987.8;
    oB5.start();
    console.log(btn);
    console.log(oB5.frequency.value);
    NewSound=context.createOscillator();
}
function btnShC5() {
    btn=document.getElementById("ShC5").innerText;
    /* ---- Audio Object ---- */
    oShC5 = context.createOscillator();
    gShC5 = context.createGain();
    oShC5.connect(gShC5);
    gShC5.connect(context.destination);
    gShC5.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.5);
    oShC5.frequency.value=1108.7;
    oShC5.start();
    console.log(btn);
    console.log(oShC5.frequency.value);
    NewSound=context.createOscillator();
}
function btnD5() {
    btn=document.getElementById("D5").innerText;
    /* ---- Audio Object ---- */
    oD5 = context.createOscillator();
    gD5 = context.createGain();
    oD5.connect(gD5);
    gD5.connect(context.destination);
    gD5.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.5);
    oD5.frequency.value=1174.7;
    oD5.start();
    console.log(btn);
    console.log(oD5.frequency.value);
    NewSound=context.createOscillator();
}
function btnE5() {
    btn=document.getElementById("E5").innerText;
    /* ---- Audio Object ---- */
    oE5 = context.createOscillator();
    gE5 = context.createGain();
    oE5.connect(gE5);
    gE5.connect(context.destination);
    gE5.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.5);
    oE5.frequency.value=1318.5;
    oE5.start();
    console.log(btn);
    console.log(oE5.frequency.value);
    NewSound=context.createOscillator();
}
function btnShF5() {
    btn=document.getElementById("ShF5").innerText;
    /* ---- Audio Object ---- */
    oShF5 = context.createOscillator();
    gShF5 = context.createGain();
    oShF5.connect(gShF5);
    gShF5.connect(context.destination);
    gShF5.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.5);
    oShF5.frequency.value=1480;
    oShF5.start();
    console.log(btn);
    console.log(oShF5.frequency.value);
    NewSound=context.createOscillator();
}
function btnShG5() {
    btn=document.getElementById("ShG5").innerText;
    /* ---- Audio Object ---- */
    oShG5 = context.createOscillator();
    gShG5 = context.createGain();
    oShG5.connect(gShG5);
    gShG5.connect(context.destination);
    gShG5.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.5);
    oShG5.frequency.value=1661.2;
    oShG5.start();
    console.log(btn);
    console.log(oShG5.frequency.value);
    NewSound=context.createOscillator();
}
function btnA6() {
    btn=document.getElementById("A6").innerText;
    /* ---- Audio Object ---- */
    oA6 = context.createOscillator();
    gA6 = context.createGain();
    oA6.connect(gA6);
    gA6.connect(context.destination);
    gA6.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.5);
    oA6.frequency.value=1760;
    oA6.start();
    console.log(btn);
    console.log(oA6.frequency.value);
    NewSound=context.createOscillator();
}

// http://marcgg.com/blog/2016/11/01/javascript-audio/
