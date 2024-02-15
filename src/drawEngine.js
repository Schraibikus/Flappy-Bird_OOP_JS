class DrawEngine {
  drawImage({ spriteSheet, image, x, y, width, height }) {}
  clear() {}
}

class CanvasDrawEngine extends DrawEngine {
  constructor({ canvas }) {
    super();
    this._canvas = canvas;
    this._context = canvas.getContext("2d");
  }

  drawImage({ spriteSheet, image, x, y, width, height }) {
    super.drawImage({ spriteSheet, image, x, y, width, height });
    this._context.drawImage(spriteSheet, x, y, width, height);
    if (!spriteSheet.complete) {
      spriteSheet.onload = () => {
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
      };
    } else {
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
      console.log("CanvasDrawEngine image.x", image.x);
      console.log("CanvasDrawEngine image.y", image.y);
      // console.log("CanvasDrawEngine image.w", image.w);
      // console.log("CanvasDrawEngine image.h", image.h);
      // console.log("CanvasDrawEngine x", x);
      // console.log("CanvasDrawEngine y", y);
    }
  }

  // drawImage({ spriteSheet, image, x, y, width, height }) {
  //   super.drawImage({ spriteSheet, x, y, width, height });
  //   this._context.drawImage(spriteSheet, x, y, width, height);
  //   // console.log("drawbg x", x);
  //   // console.log("y", y);
  //   // console.log("w", width);
  //   // console.log("h", height);
  // }

  clear() {
    super.clear();
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }
}
