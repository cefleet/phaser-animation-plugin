var game = new Phaser.Game(960,640, Phaser.CANVAS,'', {
	create:create,
	preload:preload,
	update : update
});

function preload(){

	//Preload Images
	game.load.image('head', 'assets/head.png');
	game.load.image('hips', 'assets/hips.png');
	game.load.image('larm1', 'assets/larm1.png');
	game.load.image('larm2', 'assets/larm2.png');
	game.load.image('lfoot', 'assets/lfoot.png');
	game.load.image('lshin', 'assets/lshin.png');	
	game.load.image('lhand', 'assets/lhand.png');
	game.load.image('lknee', 'assets/lknee.png');
	game.load.image('lshoulder', 'assets/lshoulder.png');
	game.load.image('lthigh', 'assets/lthigh.png');
	game.load.image('lthumb', 'assets/lthumb.png');
	game.load.image('midsection', 'assets/midsection.png');
	game.load.image('neck', 'assets/neck.png');
	game.load.image('rarm1', 'assets/rarm1.png');
	game.load.image('rarm2', 'assets/rarm2.png');
	game.load.image('rfoot', 'assets/rfoot.png');
	game.load.image('rhand', 'assets/rhand.png');
	game.load.image('rknee', 'assets/rknee.png');
	game.load.image('rshin', 'assets/rshin.png');
	game.load.image('rshoulder', 'assets/rshoulder.png');
	game.load.image('rthigh', 'assets/rthigh.png');
	game.load.image('rthumb', 'assets/rthumb.png');
	game.load.image('upperbody', 'assets/upperbody.png');
}

function create(){
	game.stage.backgroundColor ='#F5EE00';
	//add sprites
	var objs = {
		hips: {
			sprite : 'hips',
			anchor : {
				x :0.5,
				y : 0.5
			},
			maxRot : 10,
			minRot : -10,
			parent : null
		},
		midsection : {
			sprite : 'midsection',
			anchor : {
				x : 0.5,
				y : 0.9
			},
			maxRot : 20,
			minRot : -20,
			parent : {
				object : 'hips',
				attachPoint : {
					x : 0,
					y : -4
				}
			}
		},
		upperbody : {
			sprite : 'upperbody',
			anchor : {
				x : 0.5,
				y : 0.9
			},
			maxRot : 20,
			minRot : -20,
			parent : {
				object : 'midsection',
				attachPoint : {
					x : 0,
					y : -12
				}
			}
		},
		neck : {
			sprite : 'neck',
			anchor : {
				x : 0.5,
				y : 0.9
			},
			maxRot : 30,
			minRot : -30,
			parent : {
				object : 'upperbody',
				attachPoint :{
					x : 0,
					y :-12
				}
			}
		},
		head : {
			sprite : 'head',
			anchor : {
				x : 0.5,
				y : 0.5
			},
			maxRot : 10,
			minRot : -10,
			parent : {
				object : 'neck',
				attachPoint :{
					x : 0,
					y :-14
				} 
			},
		},
		lshoulder : {
			sprite : 'lshoulder',
			anchor : {
				x : 0.9,
				y : 0.5
			},
			maxRot : 170,
			minRot : -170,
			parent : {
				object : 'upperbody',
				attachPoint : {
					x : -12,
					y :-7
				}
			}
		},
		larm1 : {
			sprite : 'larm1',
			anchor : {
				x : 0.9,
				y : 0.5
			},
			maxRot : 30,
			minRot : -30,
			parent : {
				object : 'lshoulder',
				attachPoint : {
					x : -12,
					y :0
				}
			}
		},
		larm2 : {
			sprite : 'larm2',
			anchor : {
				x : 0.9,
				y : 0.5
			},
			maxRot : 30,
			minRot : -30,
			parent : {
				object : 'larm1',
				attachPoint : {
					x : -12,
					y :0
				}
			}
		},
		lhand : {
			sprite : 'lhand',
			anchor : {
				x : 0.9,
				y : 0.5
			},
			maxRot : 30,
			minRot : -30,
			lastImpact : 'lshoulder',
			parent : {
				object : 'larm2',
				attachPoint : {
					x : -12,
					y :0
				}
			}
		},
		lthumb : {
			sprite : 'lthumb',
			anchor : {
				x : 0.9,
				y : 0.5
			},
			parent : {
				object : 'lhand',
				attachPoint : {
					x : 0,
					y :-4
				}
			}
		},
		rshoulder : {
			sprite : 'rshoulder',
			anchor : {
				x : 0.1,
				y : 0.5
			},
			parent : {
				object : 'upperbody',
				sprite : 'upperbody',
				attachPoint : {
					x : 12,
					y :-7
				}
			}
		},
		rarm1 : {
			sprite : 'rarm1',
			anchor : {
				x : 0.1,
				y : 0.5
			},
			parent : {
				object : 'rshoulder',
				attachPoint : {
					x : 12,
					y :0
				}
			}
		},
		rarm2 : {
			sprite : 'rarm2',
			anchor : {
				x : 0.1,
				y : 0.5
			},
			parent : {
				object : 'rarm1',
				attachPoint : {
					x : 12,
					y :0
				}
			}
		},
		rhand : {
			sprite : 'rhand',
			anchor : {
				x : 0.1,
				y : 0.5
			},
			parent : {
				object : 'rarm2',
				attachPoint : {
					x : 12,
					y :0
				}
			}
		},
		rthumb : {
			sprite : 'rthumb',
			anchor : {
				x : 0.1,
				y : 0.5
			},
			parent : {
				object : 'rhand',
				attachPoint : {
					x : 0,
					y :-4
				}
			}
		},
		
		lthigh: {
			sprite : 'lthigh',
			anchor : {
				x :0.5,
				y : 0.1
			},
			parent : {
				object : 'hips',
				attachPoint : {
					x : -10,
					y :2
				}
			}
		},
		lknee: {
			sprite : 'lknee',
			anchor : {
				x :0.5,
				y : 0.5
			},
			parent : {
				object : 'lthigh',
				attachPoint : {
					x : 0,
					y :20
				}
			}
		},
		lshin: {
			sprite : 'lshin',
			anchor : {
				x :0.5,
				y : 0.1
			},
			parent : {
				object : 'lknee',
				attachPoint : {
					x : 0,
					y :2
				}
			}
		},
		lfoot: {
			sprite : 'lfoot',
			anchor : {
				x :0.5,
				y : 0.1
			},
			parent : {
				object : 'lshin',
				attachPoint : {
					x : 0,
					y :12
				}
			}
		},
		rthigh: {
			sprite : 'rthigh',
			anchor : {
				x :0.5,
				y : 0.1
			},
			parent : {
				object : 'hips',
				attachPoint : {
					x : 8,
					y :2
				}
			}
		},
		rknee: {
			sprite : 'rknee',
			anchor : {
				x :0.5,
				y : 0.5
			},
			parent : {
				object : 'rthigh',
				attachPoint : {
					x : 0,
					y :20
				}
			}
		},
		rshin: {
			sprite : 'rshin',
			anchor : {
				x :0.5,
				y : 0.1
			},
			parent : {
				object : 'rknee',
				attachPoint : {
					x : 0,
					y :2
				}
			}
		},
		rfoot: {
			sprite : 'rfoot',
			anchor : {
				x :0.5,
				y : 0.1
			},
			parent : {
				object : 'rshin',
				attachPoint : {
					x : 0,
					y :12
				}
			}
		}
	};
	
	var sGroup = {};
	//starting point
	var sp = {
		x : game.world.centerX,
		y : 300
	}
	
	for(var o in objs){	
		var item = objs[o];
		
		//offset the parent
		var loc = {
			x : sp.x,
			y : sp.y,
			angle : 0,
			dist :0
		};
		var parent = null;
		if(item.parent){
			loc.x = sGroup[item.parent.object].x+item.parent.attachPoint.x;
			loc.y = sGroup[item.parent.object].y+item.parent.attachPoint.y;
			loc.angle = Phaser.Math.angleBetween(sGroup[item.parent.object].x, sGroup[item.parent.object].y,loc.x,loc.y);
			loc.dist = Phaser.Math.distance(sGroup[item.parent.object].x, sGroup[item.parent.object].y,loc.x,loc.y);
			parent = sGroup[item.parent.object];
		}
		
		sGroup[o] = game.add.sprite(loc.x, loc.y, item.sprite);
		sGroup[o].anchor.setTo(item.anchor.x,item.anchor.y);
		sGroup[o].inputEnabled = true;
		sGroup[o].input.enableDrag();
		
		sGroup[o].skelObj = item;
		sGroup[o].skelObj.parent = parent;
		sGroup[o].skelObj.rotation = 0;
		sGroup[o].skelObj.basRot = 0;
		sGroup[o].skelObj.angleToParent = loc.angle;
		sGroup[o].skelObj.distToParent = loc.dist;
		
		sGroup[o].alpha = 0.5;
		
		sGroup[o].events.onInputOver.add(highlight,sGroup[o]);
		sGroup[o].events.onInputOut.add(shade,sGroup[o]);
		sGroup[o].events.onInputUp.add(stick, sGroup[o]);
		
		sGroup[o].scale.setTo(3,3);
		//sGroup[o].events.onDragStart.add(startDrag, this);
		//sGroup[o].events.onDrag.add(dragging, this);
	//sprite.events.onDragStop.add(stopDrag, this);
	//	this.aGroup.add(sGroup[0]);
	
	}
	game.bodyItems = sGroup;
	setBones();
	
	game.h = game.add.sprite(200,400, 'facbook');
	game.h.inputEnabled = true;
	game.h.input.enableDrag();

}

function checkConstraint(h,sprite){

  var ang = Phaser.Math.angleBetweenPoints(sprite,h);

  h.skelObj.rotation = ang;  
  if(Phaser.Math.distance(h.x,h.y,sprite.x,sprite.y) > 100){

		var angle = Phaser.Math.angleBetween(h.x,h.y,sprite.x,sprite.y)
		var y = h.y+100*Math.sin(angle);
		var x = h.x+100*Math.cos(angle);
		sprite.x = x;
		sprite.y = y;
	}
}

function stick(){
	if(game.activeItem){
		game.activeItem.highlight = false;
		game.activeItem.active = false;
	}
	game.activeItem = this;
	this.active = true;
	game.h.x = game.activeItem.x;
	game.h.y = game.activeItem.y-100;
	
}

function highlight(){
	this.highlight = true;
	this.alpha = 1;
}

function shade(){
	this.highlight = false;
}

function update(){

  if(game.activeItem){
	  checkConstraint(game.activeItem,game.h);
	}
	setBones();
		
}

var setBones = function(){
	for(var s in game.bodyItems){
		
		var item = game.bodyItems[s];
		if(item.skelObj.parent){
			item.skelObj.basRot = item.skelObj.parent.skelObj.rotation+item.skelObj.parent.skelObj.basRot;
			item.x =  Math.cos(item.skelObj.angleToParent+item.skelObj.basRot)*item.skelObj.distToParent*item.scale.x + item.skelObj.parent.x;
			item.y = Math.sin(item.skelObj.angleToParent+item.skelObj.basRot)*item.skelObj.distToParent*item.scale.y + item.skelObj.parent.y;
			
		}
				
		if(item.skelObj.rotation > Phaser.Math.degToRad(item.skelObj.maxRot)){
			item.skelObj.rotation = Phaser.Math.degToRad(item.skelObj.maxRot);

			if(item.skelObj.parent){
				item.skelObj.parent.skelObj.rotation += Phaser.Math.degToRad(5);
			}
		}
		if(item.skelObj.rotation < Phaser.Math.degToRad(item.skelObj.minRot)){
			item.skelObj.rotation = Phaser.Math.degToRad(item.skelObj.minRot);

			if(item.skelObj.parent){
				item.skelObj.parent.skelObj.rotation -= Phaser.Math.degToRad(5);
			}
		}
		item.rotation = item.skelObj.rotation+item.skelObj.basRot;
		if(!item.highlight && !item.active){
			item.alpha = 0.5;
		}
	}	
}

function output(){
	for(var s in game.bodyItems){
		var item = game.bodyItems[s];
		
		if(item.skelObj.parent){
					
		}
	}
}

var move = function(){
		
}
