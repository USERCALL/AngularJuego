function Game(gameDiv){             
 	var frames = [];             
 	var framesNames = [];             
 	for (var i=0; i<gameDiv.childNodes.length; i++){
 	 	var id = gameDiv.childNodes[i].id;
 	 	    if (id != undefined){
				var child = gameDiv.childNodes[i];
				 if (child.classList.contains("frame")){
				    frames[id] = child;
				    framesNames.push(id); 
				 }                 
			}             
	}             

	function setFrameVisible(name){                

	 frames[name].classList.remove("hidden");                 
	 frames[name].classList.add("visible");            
	 }             

	 function setFrameHidden(name){                
	  frames[name].classList.remove("visible");                 
	  frames[name].classList.add("hidden");            
	 }             

	   return { 
	   	"setFrameVisible": setFrameVisible,                
	   	"setFrameHidden": setFrameHidden            
	   	 };         

}        
 window.addEventListener("load", function (){             
 		game = new Game(document.getElementById("game"));        
  });        
   var game;     

  
 $(document).ready(inicio);


function inicio(){
	var canvas= document.getElementById("#lienzo"); 
	var ctx= canvas.getContext("2d");
//	var text="hola mkas";
//	ctx.font= "20 pt Comic Sans MS";
//	ctx.textAlign= "center";
//	ctx.fillStyle= "blue";
//	ctx.fillText(text,canvas.width/2);
	
}



