import Phaser from "phaser";
import logoImg from "./assets/logo.png";

import startButtonImg from "./assets/start-button.png";

class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    //  This is an example of a bundled image:
    this.load.image("logo", logoImg);
    this.load.image("startButton", startButtonImg);

    //  This is an example of loading a static image from the public folder:
    this.load.image("background", "assets/bg.jpg");
  }

  create() {
    this.add.image(400, 300, "background");

    const logo = this.add.image(400, 150, "logo");

    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: "Power2",
      yoyo: true,
      loop: -1,
    });

    const startButton = this.add
      .sprite(300, 300, "startButton")
      .setInteractive()
      .setDisplaySize(400, 100);

    startButton.on("pointerover", function () {
      this.setTint("0xffed8a");
    });

    startButton.on("pointerdown", function () {
      this.setTint("0xffed8a");
    });

    startButton.on("pointerout", function () {
      this.clearTint();
    });

    startButton.on("pointerup", function () {
      this.clearTint();

      alert("clicou");
      //   sceneRef.scene.start("Game");
    });
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: MyGame,
};

const game = new Phaser.Game(config);
