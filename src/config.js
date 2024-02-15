class Config {
  gravity = 50;

  canvas = {
    id: "game",
    x: 0,
    y: 0,
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
    width: 276,
    height: 226,
  };

  bird = {
    x: 50,
    y: 100,
    width: 34,
    height: 26,

    flapSpeed: 50,

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
