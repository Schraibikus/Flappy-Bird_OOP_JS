class Config {
  // score_sound = {
  //   src: "./assets/audio/sfx_point.wav",
  // };
  // flap_sound = {
  //   src: "./assets/audio/sfx_flap.wav",
  // };
  // hit_sound = {
  //   src: "./assets/audio/sfx_hit.wav",
  // };
  // swooshing_sound = {
  //   src: "./assets/audio/sfx_swooshing.wav",
  // };
  // die_sound = {
  //   src: "./assets/audio/sfx_die.wav",
  // };

  gravity = 300;

  speedGame = 1;

  score = 0;
  scoreX = 40;

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

  background = {
    x: 0,
    y: 0,
    width: this.canvas.width,
    height: this.canvas.height,
    frames: [
      {
        x: 0,
        y: 0,
        w: 275,
        h: 228,
      },
    ],
  };

  backgroundBottom = {
    x: 0,
    y: 300,
    width: this.canvas.width,
    height: 110,
    frames: [
      {
        x: 276,
        y: 2,
        w: 224,
        h: 110,
      },
    ],
  };

  pipeGap = 104;
  pipeMin = 154;
  pipeMax = 270;
  pipeNext = 208;

  pipe = {
    pipes: [],

    x: this.canvas.width,
    y: 0,
    width: 68, //bird.width * 2
    height: 400,

    frames: [
      {
        x: 502,
        y: 0,
        w: 52,
        h: 400,
      },
      {
        x: 555,
        y: 0,
        w: 52,
        h: 400,
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

  //заготовки
  getReadyBG = {
    x: 100,
    y: 50,
    width: 300,
    height: 300,
    frames: [
      {
        x: 0,
        y: 229,
        w: 173,
        h: 200,
      },
    ],
  };

  gameOverBG = {
    x: 100,
    y: 50,
    width: 300,
    height: 300,
    frames: [
      {
        x: 174,
        y: 229,
        w: 250,
        h: 300,
      },
    ],
  };
}
