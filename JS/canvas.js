// Codigo para el canvas

// Linea de Rango configuraciones
var pAncho = document.querySelector("#pincel-ancho");
var txtpA = document.querySelector("#pA");
var cM = document.querySelector("#circleMedida");
var bAncho = document.querySelector("#borrador-ancho");
var txtbA = document.querySelector("#bA");
var cMB = document.querySelector("#circleMedidaB");

// Variables
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var cw = window.innerWidth-20;
var ch = window.innerHeight/2.5;
canvas.width = cw;
canvas.height = ch;

var initialX;
var initialY;
var fondo = "#FFFFFF";
var pinzel = { color: "#000", ancho: 3 }
var indiColor = document.querySelector("#indicadorColor");
var indiFondo = document.querySelector("#indicadorFondo");
indiColor.style.background = "#000";
indiFondo.style.background = "#FFF";
var config = document.querySelector("#config");

canvas.style.background = fondo;

var draw = ({x, y})=>{
    ctx.beginPath();
    ctx.moveTo(initialX, initialY);
    ctx.lineWidth = pinzel.ancho;
    ctx.strokeStyle = pinzel.color;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineTo(x, y);
    ctx.stroke();
    
    initialX = x;
    initialY = y;
}
var touch = ({x, y})=>{
    initialX = x;
    initialY = y;
    draw({x: initialX, y: initialY});
    canvas.addEventListener("touchmove", (t)=>{
        if(t.targetTouches.length == 1){
            var touch = t.targetTouches[0];
            draw({x: touch.pageX-10, y: touch.pageY-50});
        }
    });
}
canvas.addEventListener("touchstart", (t)=>{
    if(t.targetTouches.length == 1){
        var touc = t.targetTouches[0];
        touch({x: touc.pageX-10, y: touc.pageY-50});
    }
});

function iF(color){ canvas.style.background = color; cMB.style.background = color; fondo = color; indiFondo.style.background = color; }
// Color de fondo
function fondoRed(){ iF("red"); }
function fondoGreen(){ iF("green"); }
function fondoBlue(){ iF("blue"); }
function fondoBrown(){ iF("brown"); }
function fondoWhite(){ iF("white"); }
function fondoBlack(){ iF("black"); }
function fondoGray(){ iF("gray"); }
function fondoOrange(){ iF("orange"); }
function fondoViolet(){ iF("violet"); }
function fondoPink(){ iF("pink"); }
function fondoYellow(){ iF("yellow"); }
function fondoMargenta(){ iF("#FF6300"); }
function fondoCeleste(){ iF("#00EAFF"); }
function fondoMorado(){ iF("#9D00FF"); }
function fondoLigthGreen(){ iF("#00FF87"); }
function fondoUpPink(){ iF("#FF0091"); }

function ic(color){ cM.style.background = color; pinzel.color = color; indicadorColor.style.background = color; }
// Color del pinzel
function colorRed(){ ic("red"); }
function colorGreen(){ ic("green"); }
function colorBlue(){ ic("blue"); }
function colorBrown(){ ic("brown"); }
function colorWhite(){ ic("white"); }
function colorBlack(){ ic("black"); }
function colorGray(){ ic("gray"); }
function colorOrange(){ ic("orange"); }
function colorViolet(){ ic("violet"); }
function colorPink(){ ic("pink"); }
function colorYellow(){ ic("yellow"); }
function colorMargenta(){ ic("#FF6300");}
function colorCeleste(){ ic("#00EAFF"); }
function colorMorado(){ ic("#9D00FF"); }
function colorLigthGreen(){ ic("#00FF87"); }
function colorUpPink(){ ic("#FF0091"); }

function btnConfig(){
    let conf = document.querySelector("#btnConfigStyle");
    if(config.style.display != "none"){
        config.style.display = "none";
        conf.style.borderTop = "1px solid #fff";
        conf.style.borderLeft = "1px solid #fff";
        conf.style.borderRight = "1px solid #000";
        conf.style.borderBottom = "1px solid #000";
        conf.style.background = "#fff";
    } else {
        config.style.display = "block";
        conf.style.borderTop = "1px solid #000";
        conf.style.borderLeft = "1px solid #000";
        conf.style.borderRight = "1px solid #fff";
        conf.style.borderBottom = "1px solid #fff";
        conf.style.background = "#AAAAAA";
    }
}

pAncho.oninput = ()=>{
    txtpA.innerHTML = pAncho.value+"%";
    pinzel.ancho = pAncho.value;
    pinzel.color = indicadorColor.style.background;
    cM.style.width = pAncho.value;
    cM.style.height = pAncho.value;
}

bAncho.oninput = ()=>{
    txtbA.innerHTML = bAncho.value+"%";
    pinzel.ancho = bAncho.value;
    pinzel.color = fondo;
    cMB.style.width = bAncho.value;
    cMB.style.height = bAncho.value;
    cMB.style.background = fondo;
}

