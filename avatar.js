var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var figura = "circulo"; // Inicialmente, dibujaremos círculos
var color = "blue"; // Color inicial
var TamFigura=20;
var down=false;
function pintarCirc(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, TamFigura, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}
function pintarTriangulo(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y - TamFigura);
    ctx.lineTo(x - TamFigura, y + TamFigura);
    ctx.lineTo(x + TamFigura, y + TamFigura);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }
  function pintarTrianguloV(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y + TamFigura);
    ctx.lineTo(x - TamFigura, y - TamFigura);
    ctx.lineTo(x + TamFigura, y - TamFigura);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }

function pintarRec(x, y) {
  ctx.fillStyle = color;
  ctx.fillRect(x -30, y -30, TamFigura, TamFigura);
}
document.getElementById("BotonCir").addEventListener("click", function() {
    figura = "circulo";
    
  });
  
  document.getElementById("BotonRect").addEventListener("click", function() {
    figura = "rectangulo";
    
  });
  document.getElementById("BotonTrian").addEventListener("click", function() {
    figura = "triangulo";
    
  });
  document.getElementById("BotonTrianV").addEventListener("click", function() {
    figura = "trianguloV";
    
  });
  document.getElementById("BotonNegro").addEventListener("click", function() {
    color="#EFEC1D";
  });
  document.getElementById("BotonAzulM").addEventListener("click", function() {
    color="blue";
  });
  document.getElementById("BotonAzulR").addEventListener("click", function() {
    color="#118A13";
  });
  document.getElementById("BotonAzulC").addEventListener("click", function() {
    color="#20EC00";
  });
  document.getElementById("BotonBlanco").addEventListener("click", function() {
    color="#43733C";
  });
  document.getElementById("BotonCafeO").addEventListener("click", function() {
    color="#C08034";
  });
  document.getElementById("BotonCafeC").addEventListener("click", function() {
    color="#0D510E";
  });

  canvas.addEventListener("mousedown", function(event) {
    var x = event.layerX;
    var y = event.layerY;
    down=true;
    switch(figura)
    {
        case "circulo":
            pintarCirc(x, y);
            break;
        case "rectangulo":
            pintarRec(x,y);
            break;
        case "triangulo":
            pintarTriangulo(x,y);
            break;
        case "trianguloV":
            pintarTrianguloV(x,y);
            break;    
    }
  });
  canvas.addEventListener("mousemove", function(event) {
    var x = event.layerX;
    var y = event.layerY;
    if(down===true){
        switch(figura)
    {
        case "circulo":
            pintarCirc(x, y);
            break;
        case "rectangulo":
            pintarRec(x,y);
            break;
        case "triangulo":
            pintarTriangulo(x,y);
            break;
        case "trianguloV":
            pintarTrianguloV(x,y);
            break;    
    }
    }
  });
  canvas.addEventListener("mouseup", function(event) {
    down=false;
  });
  
  document.addEventListener("keydown", function(event) {
    if (event.key === "+") {
      TamFigura += 2;
      
    } else if (event.key === "-"&&TamFigura-2>0) {
      TamFigura-=2;
     
    }
  });