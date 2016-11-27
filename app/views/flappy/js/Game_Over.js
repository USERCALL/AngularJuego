var Game_Over= {

	preload: function(){
		juego.stage.backgroundColor= '#FFF';
        juego.load.image('boton', '../img/boton.png');
	},

	create: function(){

		var boton= this.add.button(juego.width/2, juego.height/2, 'boton', this.iniciarJuego, this);
        boton.anchor.setTo(0.5);

        var txtIniciar= juego.add.text(juego.width/2, juego.height/2 -185, "Juego Terminado", {font: "bold 40px sans-serif", fill:"black", algin:"center"});
        txtIniciar.anchor.setTo(0.5);

		if(puntos==-2 || puntos==-1)
			puntos=0;
        var txtIniciar1= juego.add.text(juego.width/2 + 50, juego.height/2 -115, puntos.toString(), {font: "bold 25px sans-serif", fill:"black", algin:"center"});
        txtIniciar1.anchor.setTo(0.5);

		var txtpuntos= juego.add.text(juego.width/2 - 50, juego.height/2 -115, "Puntos: ", {font: "bold 25px sans-serif", fill:"black", algin:"center"});
        txtpuntos.anchor.setTo(0.5);
	},

	iniciarJuego: function(){
        juego.state.start('Juego');
    }
};
