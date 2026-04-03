class scene0 extends Phaser.Scene {
  constructor() {
    super("scene0");

   
  }

  preload() {
    this.load.setPath("assets/");
    this.load.image("ilu", "ilu.png");
    
    
  }

  create() {
   
    this.add
      .image(400, 225, "ilu")
      .setScale(0.5);
  }

  update() {
    
  }
}

export default scene0;
