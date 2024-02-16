class Config {
  gravity = 300;

  speedGame = 6.2;

  canvas = {
    id: "game",
    width: 480,
    height: 320,
  };

  spritesheet = {
    width: 606,
    height: 428,
    src: "./assets/spritesheet.png",
  };

  /*   pipe = {
    x: 70,
    y: 110,
    width: 300,
    height: 300,
  }; */

  background = {
    x: 0,
    y: 0,
    width: this.canvas.width,
    height: this.canvas.height,
    frames: [
      {
        x: 0,
        y: 0,
        w: 276,
        h: 228,
      },
    ],
  };

  bird = {
    x: 50,
    y: 100,
    width: 34,
    height: 26,

    flapSpeed: 150,

    frames: [
      {
        x: 276,
        y: 112,
        w: 34,
        h: 26,
      },
      {
        x: 276,
        y: 139,
        w: 34,
        h: 26,
      },
      {
        x: 276,
        y: 164,
        w: 34,
        h: 26,
      },
      {
        x: 276,
        y: 139,
        w: 34,
        h: 26,
      },
    ],
  };
}
