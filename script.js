function drawPikachu(ctx) {
  // Body
  ctx.fillStyle = "#FFF000";
  ctx.beginPath();
  ctx.ellipse(100, 100, 70, 60, 0, 0, 2 * Math.PI);
  ctx.fill();

  // Ears
  ctx.beginPath();
  ctx.moveTo(60, 40);
  ctx.lineTo(80, 80);
  ctx.lineTo(100, 60);
  ctx.fillStyle = "#FFF000";
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(140, 40);
  ctx.lineTo(120, 80);
  ctx.lineTo(100, 60);
  ctx.fillStyle = "#FFF000";
  ctx.fill();

  // Cheeks
  ctx.fillStyle = "#FF0000";
  ctx.beginPath();
  ctx.arc(60, 110, 15, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(140, 110, 15, 0, 2 * Math.PI);
  ctx.fill();

  // Eyes
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(80, 90, 10, 0, 2 * Math.PI);
  ctx.arc(120, 90, 10, 0, 2 * Math.PI);
  ctx.fill();

  // Mouth
  ctx.beginPath();
  ctx.arc(100, 120, 10, 0, Math.PI);
  ctx.stroke();

  // Tail
  ctx.fillStyle = "#FFF000";
  ctx.beginPath();
  ctx.moveTo(170, 60);
  ctx.lineTo(140, 100);
  ctx.lineTo(170, 140);
  ctx.closePath();
  ctx.fill();
}

function drawBulbasaur(ctx) {
  // Body
  ctx.fillStyle = "#88CC88";
  ctx.beginPath();
  ctx.ellipse(100, 120, 60, 50, 0, 0, 2 * Math.PI);
  ctx.fill();

  // Head
  ctx.fillStyle = "#88CC88";
  ctx.beginPath();
  ctx.arc(80, 80, 40, 0, 2 * Math.PI);
  ctx.fill();

  // Bulb
  ctx.fillStyle = "#448844";
  ctx.beginPath();
  ctx.ellipse(130, 70, 30, 25, Math.PI / 4, 0, 2 * Math.PI);
  ctx.fill();

  // Eyes
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(70, 70, 5, 0, 2 * Math.PI);
  ctx.arc(90, 70, 5, 0, 2 * Math.PI);
  ctx.fill();

  // Mouth
  ctx.beginPath();
  ctx.arc(80, 90, 10, 0, Math.PI);
  ctx.stroke();
}

function drawCharmander(ctx) {
  // Body
  ctx.fillStyle = "#FF8800";
  ctx.beginPath();
  ctx.ellipse(100, 120, 50, 60, 0, 0, 2 * Math.PI);
  ctx.fill();

  // Head
  ctx.fillStyle = "#FF8800";
  ctx.beginPath();
  ctx.arc(100, 70, 40, 0, 2 * Math.PI);
  ctx.fill();

  // Eyes
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(85, 60, 5, 0, 2 * Math.PI);
  ctx.arc(115, 60, 5, 0, 2 * Math.PI);
  ctx.fill();

  // Mouth
  ctx.beginPath();
  ctx.arc(100, 80, 10, 0, Math.PI);
  ctx.stroke();

  // Tail
  ctx.fillStyle = "#FF0000";
  ctx.beginPath();
  ctx.moveTo(150, 100);
  ctx.lineTo(170, 70);
  ctx.lineTo(190, 100);
  ctx.closePath();
  ctx.fill();
}

function drawSquirtle(ctx) {
  // Shell
  ctx.fillStyle = "#884400";
  ctx.beginPath();
  ctx.ellipse(100, 110, 60, 50, 0, 0, 2 * Math.PI);
  ctx.fill();

  // Body
  ctx.fillStyle = "#88CCFF";
  ctx.beginPath();
  ctx.ellipse(100, 120, 40, 50, 0, 0, Math.PI);
  ctx.fill();

  // Head
  ctx.fillStyle = "#88CCFF";
  ctx.beginPath();
  ctx.arc(100, 70, 35, 0, 2 * Math.PI);
  ctx.fill();

  // Eyes
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(85, 60, 5, 0, 2 * Math.PI);
  ctx.arc(115, 60, 5, 0, 2 * Math.PI);
  ctx.fill();

  // Mouth
  ctx.beginPath();
  ctx.arc(100, 80, 10, 0, Math.PI);
  ctx.stroke();
}

function drawJigglypuff(ctx) {
  // Body
  ctx.fillStyle = "#FFAACC";
  ctx.beginPath();
  ctx.arc(100, 100, 80, 0, 2 * Math.PI);
  ctx.fill();

  // Eyes
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(70, 70, 10, 0, 2 * Math.PI);
  ctx.arc(130, 70, 10, 0, 2 * Math.PI);
  ctx.fill();

  // Mouth
  ctx.beginPath();
  ctx.arc(100, 100, 20, 0, Math.PI);
  ctx.stroke();

  // Ears
  ctx.fillStyle = "#FFAACC";
  ctx.beginPath();
  ctx.moveTo(60, 20);
  ctx.lineTo(80, 50);
  ctx.lineTo(100, 20);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(140, 20);
  ctx.lineTo(120, 50);
  ctx.lineTo(100, 20);
  ctx.fill();
}

function drawMeowth(ctx) {
  // Head
  ctx.fillStyle = "#FFDDAA";
  ctx.beginPath();
  ctx.arc(100, 100, 70, 0, 2 * Math.PI);
  ctx.fill();

  // Ears
  ctx.fillStyle = "#FFDDAA";
  ctx.beginPath();
  ctx.moveTo(50, 20);
  ctx.lineTo(70, 70);
  ctx.lineTo(90, 20);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(150, 20);
  ctx.lineTo(130, 70);
  ctx.lineTo(110, 20);
  ctx.fill();

  // Eyes
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(70, 90, 10, 0, 2 * Math.PI);
  ctx.arc(130, 90, 10, 0, 2 * Math.PI);
  ctx.fill();

  // Nose
  ctx.fillStyle = "#FF0000";
  ctx.beginPath();
  ctx.arc(100, 110, 5, 0, 2 * Math.PI);
  ctx.fill();

  // Mouth
  ctx.beginPath();
  ctx.moveTo(80, 120);
  ctx.lineTo(120, 120);
  ctx.stroke();

  // Whiskers
  ctx.beginPath();
  ctx.moveTo(50, 110);
  ctx.lineTo(90, 110);
  ctx.moveTo(50, 120);
  ctx.lineTo(90, 120);
  ctx.moveTo(110, 110);
  ctx.lineTo(150, 110);
  ctx.moveTo(110, 120);
  ctx.lineTo(150, 120);
  ctx.stroke();

  // Coin
  ctx.fillStyle = "#FFFF00";
  ctx.beginPath();
  ctx.arc(100, 60, 15, 0, 2 * Math.PI);
  ctx.fill();
}

function drawSnorlax(ctx) {
  // Body
  ctx.fillStyle = "#4466AA";
  ctx.beginPath();
  ctx.ellipse(100, 120, 80, 70, 0, 0, 2 * Math.PI);
  ctx.fill();

  // Head
  ctx.fillStyle = "#4466AA";
  ctx.beginPath();
  ctx.arc(100, 60, 40, 0, 2 * Math.PI);
  ctx.fill();

  // Belly
  ctx.fillStyle = "#FFDDAA";
  ctx.beginPath();
  ctx.ellipse(100, 140, 50, 40, 0, 0, 2 * Math.PI);
  ctx.fill();

  // Eyes
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(80, 50, 5, 0, 2 * Math.PI);
  ctx.arc(120, 50, 5, 0, 2 * Math.PI);
  ctx.fill();

  // Mouth
  ctx.beginPath();
  ctx.arc(100, 70, 10, 0, Math.PI);
  ctx.stroke();
}

function drawEevee(ctx) {
  // Body
  ctx.fillStyle = "#AA8866";
  ctx.beginPath();
  ctx.ellipse(100, 120, 60, 50, 0, 0, 2 * Math.PI);
  ctx.fill();

  // Head
  ctx.fillStyle = "#AA8866";
  ctx.beginPath();
  ctx.arc(100, 70, 40, 0, 2 * Math.PI);
  ctx.fill();

  // Ears
  ctx.fillStyle = "#AA8866";
  ctx.beginPath();
  ctx.moveTo(70, 20);
  ctx.lineTo(90, 60);
  ctx.lineTo(110, 20);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(130, 20);
  ctx.lineTo(110, 60);
  ctx.lineTo(90, 20);
  ctx.fill();

  // Eyes
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(85, 60, 5, 0, 2 * Math.PI);
  ctx.arc(115, 60, 5, 0, 2 * Math.PI);
  ctx.fill();

  // Nose
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(100, 75, 5, 0, 2 * Math.PI);
  ctx.fill();

  // Mouth
  ctx.beginPath();
  ctx.arc(100, 85, 10, 0, Math.PI);
  ctx.stroke();

  // Tail
  ctx.fillStyle = "#FFDDAA";
  ctx.beginPath();
  ctx.moveTo(160, 100);
  ctx.lineTo(180, 80);
  ctx.lineTo(180, 120);
  ctx.closePath();
  ctx.fill();
}

// Draw all Pokemon
window.onload = function () {
  const canvases = document.querySelectorAll("canvas");
  const drawFunctions = [
    drawPikachu,
    drawBulbasaur,
    drawCharmander,
    drawSquirtle,
    drawJigglypuff,
    drawMeowth,
    drawSnorlax,
    drawEevee,
  ];

  canvases.forEach((canvas, index) => {
    const ctx = canvas.getContext("2d");
    drawFunctions[index](ctx);
  });
};
