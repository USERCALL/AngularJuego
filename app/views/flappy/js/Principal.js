var fondoJuego;
var boton;

var juego = new Phaser.Game(370, 550, Phaser.CANVAS, 'bloque_juego');

var estadoPrincipal = {

  preload: function () {
      //carga los recursos del juego
      juego.load.image('fondo', '../img/paisaje.png');
      juego.load.image('personaje', '../img/personaje1.png');
      juego.load.image('btn', '../img/')
  },

  create: function () {
    //mostrar en pantalla
      fondoJuego=juego.add.tileSprite('fondo',0, 0, 370, 550);
      juego.add.sprite(30,90,'personaje')

  },

  update: function () {
        //animamos el juego
      fondoJuego.tilePosition.x -=1;
  }

};

juego.stage.add('Principal', estadoPrincipal);
juego.stage.start('Principal');
