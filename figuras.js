var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

class Rectangulo {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color || "black"; // Color predeterminado si no se proporciona
  }

  // Método para dibujar el rectángulo en un contexto de lienzo
  paint(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}