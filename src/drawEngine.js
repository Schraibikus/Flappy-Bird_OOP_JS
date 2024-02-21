class DrawEngine {
  drawImage({ spriteSheet, image, x, y, width, height }) {}
  clear() {}
}

class CanvasDrawEngine extends DrawEngine {
  constructor({ canvas, game }) {
    super();
    this._canvas = canvas;
    this._context = canvas.getContext("2d");
  }

  drawImage({ spriteSheet, image, x, y, width, height }) {
    super.drawImage({ spriteSheet, image, x, y, width, height });
    this._context.drawImage(
      spriteSheet,
      image.x,
      image.y,
      image.w,
      image.h,
      x,
      y,
      width,
      height
    );
  }

  drawText({ x, y, text }) {
    this._context.fillStyle = "#00cc99";
    this._context.font = "16px 'Press Start 2P'";
    this._context.fillText(text, x, y);
  }

  clear() {
    super.clear();
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }
}
