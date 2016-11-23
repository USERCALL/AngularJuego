var fondo;
var tubos;
var pajaro;
var luna;
var salto;
var timer;
var puntos;
var txtpuntos;
var Juego= {
  
    preload: function(){
        juego.load.image('fondo', 'img/paisaje.png');
        juego.load.spritesheet('pajaro1', 'img/pajaro.png', 78, 80);
        juego.load.spritesheet('tubo', 'img/tubo1.png');
        juego.load.image('luna', 'img/luna.png');
        
        juego.forceSingleUpdate = true;
    },
    
    create: function(){
        fondo= juego.add.tileSprite(0, 0, 550, 750, 'fondo');  
		
		luna = juego.add.tileSprite(280, -40, 300, 302, 'luna');
		juego.physics.startSystem(Phaser.Physics.ARCADE);
   		tubos= juego.add.group();
		tubos.enableBody = true;
		tubos.createMultiple(20, 'tubo');
		
		
		pajaro = juego.add.sprite(230, 445, 'pajaro1');
		pajaro.frame=0;
		pajaro.anchor.setTo(0, 0.5);
		pajaro.animations.add('vuelo',[0,1,2,3,4,5,6,7,8,9,7,6,5,4,3,2,1], 12, true);
		
		juego.physics.arcade.enable(pajaro);
		pajaro.body.gravity.y = 1200;
		
		salto=juego.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		salto.onDown.add(this.saltar, this);
		
		timer = juego.time.events.loop(2500, this.crearColumna, this);
		
		puntos=-1;
		txtpuntos= juego.add.text(20,20, "0", {font: "30px Arial", fill: "#FFF"})
	},
    
    update: function(){
		if(pajaro.inWorld == false){
			//game over
		    juego.state.start('Game_Over');
		}
		/*else if(pajaro.y >690)
		{
			//game Over
			pajaro.alive= false;
			tubos.forEachAlive(function(t){
				t.body.velocity.x = 0;
			}, this);
		}*/
		else 
		{
			fondo.tilePosition.x -= 1;
		}
		
		juego.physics.arcade.overlap(pajaro, tubos, this.tocoTubo, null, this);
    	
		pajaro.animations.play('vuelo');
		if(pajaro.angle <20)
			{
				pajaro.angle +=1;
			}
    },
	
	saltar: function(){
		pajaro.body.velocity.y = -350;
		juego.add.tween(pajaro).to({angle:-20}, 100).start();
	},
	
	crearColumna: function(){
		var hueco= Math.floor(Math.random()*5)+1;
		for(var i= 0; i<10; i++)
			{
				if(i !=hueco && i != hueco+1)
					{
						this.crearUnTubo(520, i*95+20);
					}
			}
		puntos +=1;
		txtpuntos.text = puntos;
	},
	
	crearUnTubo: function(x,y){
		var tubo = tubos.getFirstDead();
		
		tubo.reset(x, y);
		tubo.body.velocity.x = -100;
		tubo.checkWorldBounds= true;
		tubo.outOfBoundsKill= true;
	},
	
	tocoTubo: function(){
		if(pajaro.alive==false){
			return;
		}	
		
		salto.onDown.remove(this.saltar, this);
		pajaro.alive = false;
		juego.time.events.remove(timer);
		tubos.forEachAlive(function(t){
				t.body.velocity.x = 0;
			}, this);
	}
	
	
};
