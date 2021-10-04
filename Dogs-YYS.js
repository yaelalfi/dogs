(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Dogs_YYS_atlas_1", frames: [[593,3354,512,512],[3558,3267,224,211],[2858,3558,362,359],[3222,3558,362,359],[2928,1875,449,378],[3508,318,449,378],[1633,1282,591,591],[0,1575,591,591],[2372,1875,554,316],[3508,0,554,316],[593,1575,591,591],[2226,1282,591,591],[0,0,1631,1573],[2819,1282,591,591],[2915,0,591,591],[1186,1575,307,251],[2915,593,591,591],[3412,1186,591,591],[3586,3480,207,203],[3558,2372,257,316],[3558,2690,257,316],[3412,1779,591,591],[1186,1875,591,591],[0,2168,591,591],[593,2168,591,591],[1779,1875,591,591],[2372,2372,591,591],[1186,2468,591,591],[0,2761,591,591],[593,2761,591,591],[1779,2468,591,591],[2965,2372,591,591],[2372,2965,591,591],[2965,2965,591,591],[1186,3061,591,591],[3508,698,484,338],[2372,3558,484,338],[1633,0,1280,1280],[3558,3008,256,257],[1779,3061,591,591],[0,3354,591,591]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._1727490 = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.building = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.buildingG = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.family = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.familyG = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.golden = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.goldenGREY = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.gurden = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.gurdenG = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.husky = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.huskyGREY = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.infowindow = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.jack = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.jackGREY = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.ketem = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.lavrador = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.lavradorGREY = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Oblue = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.old = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.oldG = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.pekinez = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.pekinezGREY = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.pitbull = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.pitbullGREY = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.pug = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.pugGREY = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.pumernian = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.pumernianGREY = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.roee = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.roeeGREY = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.rotvailer = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.rotvailerGREY = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.shitzu = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.shitzuGREY = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.single = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.singleG = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.x1727490_1280 = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.yellow = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.york = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.yorkGREY = function() {
	this.initialize(ss["Dogs_YYS_atlas_1"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.odot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("אודות", "55px 'Rubik Medium'");
	this.text.textAlign = "center";
	this.text.lineHeight = 71;
	this.text.lineWidth = 144;
	this.text.parent = this;
	this.text.setTransform(154,91.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(4));

	// button
	this.instance = new lib.ketem();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,307,251);


(lib.HITbtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(0,0,0.7629,0.7629);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170.9,161);


(lib.single_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("רווק/זוג", "20px 'Rubik Medium'");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 102;
	this.text.parent = this;
	this.text.setTransform(304.1,277.85);

	this.instance = new lib.single();
	this.instance.setTransform(254,206,0.2066,0.2066);

	this.instance_1 = new lib.singleG();
	this.instance_1.setTransform(254,206,0.2066,0.2066);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.2066,scaleY:0.2066,x:254,y:206}},{t:this.text}]}).to({state:[{t:this.instance,p:{scaleX:0.2658,scaleY:0.2659,x:240,y:186}},{t:this.text}]},1).to({state:[{t:this.text},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(240,186,128.7,127.80000000000001);


(lib.old_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("מבוגרים", "20px 'Rubik Medium'");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 69;
	this.text.parent = this;
	this.text.setTransform(75.5,124.95);

	this.instance = new lib.old();
	this.instance.setTransform(51,62,0.1945,0.1944);

	this.instance_1 = new lib.oldG();
	this.instance_1.setTransform(51,62,0.1945,0.1945);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.1945,scaleY:0.1944,x:51,y:62}},{t:this.text}]}).to({state:[{t:this.instance,p:{scaleX:0.2769,scaleY:0.2768,x:40,y:36}},{t:this.text}]},1).to({state:[{t:this.text},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39,36,73,118);


(lib.garden = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("בית עם גינה", "20px 'Rubik Medium'");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 119;
	this.text.parent = this;
	this.text.setTransform(220.1,318);

	this.instance = new lib.gurden();
	this.instance.setTransform(170,259,0.1805,0.1805);

	this.instance_1 = new lib.gurdenG();
	this.instance_1.setTransform(170,259,0.1805,0.1805);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.1805,scaleY:0.1805,x:170,y:259}},{t:this.text}]}).to({state:[{t:this.instance,p:{scaleX:0.2563,scaleY:0.2563,x:149,y:235}},{t:this.text}]},1).to({state:[{t:this.text},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,235,142,110.10000000000002);


(lib.family_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("משפחה\nעם ילדים", "20px 'Rubik Medium'");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 74;
	this.text.parent = this;
	this.text.setTransform(33,86.2);

	this.instance = new lib.family();
	this.instance.setTransform(-7,17,0.1782,0.1783);

	this.instance_1 = new lib.familyG();
	this.instance_1.setTransform(-7,17,0.1782,0.1783);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.1782,scaleY:0.1783,x:-7,y:17}},{t:this.text}]}).to({state:[{t:this.instance,p:{scaleX:0.2363,scaleY:0.2364,x:-20,y:-5}},{t:this.text}]},1).to({state:[{t:this.text},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-5,106.1,151.3);


(lib.building_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// layer1
	this.text = new cjs.Text("דירה בבניין", "20px 'Rubik Medium'");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 114;
	this.text.parent = this;
	this.text.setTransform(158.1,361);

	this.instance = new lib.building();
	this.instance.setTransform(108,260,0.2762,0.2762);

	this.instance_1 = new lib.buildingG();
	this.instance_1.setTransform(108,260,0.2762,0.2762);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.2762,scaleY:0.2762,x:108,y:260}},{t:this.text}]}).to({state:[{t:this.instance,p:{scaleX:0.3333,scaleY:0.3332,x:98,y:239}},{t:this.text}]},1).to({state:[{t:this.instance_1},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(98,239,120.69999999999999,149.10000000000002);


(lib.york_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.york();
	this.instance.setTransform(-175,-367);

	this.text = new cjs.Text("יורקשייר", "bold 55px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 71;
	this.text.lineWidth = 489;
	this.text.parent = this;
	this.text.setTransform(120.5,245.2);

	this.instance_1 = new lib.Oblue();
	this.instance_1.setTransform(-175,-367,2.8551,2.9113);

	this.instance_2 = new lib.yellow();
	this.instance_2.setTransform(-175,-367,2.3086,2.2996);

	this.instance_3 = new lib.yorkGREY();
	this.instance_3.setTransform(-175,-367);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance}]}).to({state:[{t:this.text},{t:this.instance_2},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-367,591,717);


(lib.shitzu_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.shitzu();
	this.instance.setTransform(-175,-367);

	this.text = new cjs.Text("שיצו", "bold 55px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 71;
	this.text.lineWidth = 489;
	this.text.parent = this;
	this.text.setTransform(120.5,245.2);

	this.instance_1 = new lib.Oblue();
	this.instance_1.setTransform(-175,-367,2.8551,2.9113);

	this.instance_2 = new lib.yellow();
	this.instance_2.setTransform(-175,-367,2.3086,2.2996);

	this.instance_3 = new lib.shitzuGREY();
	this.instance_3.setTransform(-175,-367);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance}]}).to({state:[{t:this.text},{t:this.instance_2},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-367,591,717);


(lib.rotvailer_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.rotvailer();
	this.instance.setTransform(-175,-367);

	this.text = new cjs.Text("רוטווילר", "bold 55px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 71;
	this.text.lineWidth = 489;
	this.text.parent = this;
	this.text.setTransform(120.5,245.2);

	this.instance_1 = new lib.Oblue();
	this.instance_1.setTransform(-175,-367,2.8551,2.9113);

	this.instance_2 = new lib.yellow();
	this.instance_2.setTransform(-175,-367,2.3086,2.2996);

	this.instance_3 = new lib.rotvailerGREY();
	this.instance_3.setTransform(-175,-367);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance}]}).to({state:[{t:this.text},{t:this.instance_2},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-367,591,717);


(lib.roee_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.roee();
	this.instance.setTransform(-174,-366);

	this.text = new cjs.Text("רועה גרמני", "bold 55px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 71;
	this.text.lineWidth = 489;
	this.text.parent = this;
	this.text.setTransform(120.5,245.2);

	this.instance_1 = new lib.Oblue();
	this.instance_1.setTransform(-175,-367,2.8551,2.9113);

	this.instance_2 = new lib.yellow();
	this.instance_2.setTransform(-175,-367,2.3086,2.2996);

	this.instance_3 = new lib.roeeGREY();
	this.instance_3.setTransform(-175,-367);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance,p:{x:-174,y:-366}}]}).to({state:[{t:this.text},{t:this.instance_2},{t:this.instance,p:{x:-175,y:-367}}]},1).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-367,592,717);


(lib.pumernian_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.pumernian();
	this.instance.setTransform(-175,-367);

	this.text = new cjs.Text("פומרניין", "bold 55px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 71;
	this.text.lineWidth = 489;
	this.text.parent = this;
	this.text.setTransform(120.5,245.2);

	this.instance_1 = new lib.Oblue();
	this.instance_1.setTransform(-175,-367,2.8551,2.9113);

	this.instance_2 = new lib.yellow();
	this.instance_2.setTransform(-175,-367,2.3086,2.2996);

	this.instance_3 = new lib.pumernianGREY();
	this.instance_3.setTransform(-175,-367);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance}]}).to({state:[{t:this.text},{t:this.instance_2},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-367,591,717);


(lib.pug_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.pug();
	this.instance.setTransform(-175,-367);

	this.text = new cjs.Text("פאג סיני", "bold 55px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 71;
	this.text.lineWidth = 489;
	this.text.parent = this;
	this.text.setTransform(120.5,245.2);

	this.instance_1 = new lib.Oblue();
	this.instance_1.setTransform(-175,-367,2.8551,2.9113);

	this.instance_2 = new lib.yellow();
	this.instance_2.setTransform(-175,-367,2.3086,2.2996);

	this.instance_3 = new lib.pugGREY();
	this.instance_3.setTransform(-175,-367);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.text},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-367,591,717);


(lib.pitbull_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.pitbull();
	this.instance.setTransform(-175,-367);

	this.text = new cjs.Text("פיטבול", "bold 55px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 71;
	this.text.lineWidth = 489;
	this.text.parent = this;
	this.text.setTransform(120.5,245.2);

	this.instance_1 = new lib.Oblue();
	this.instance_1.setTransform(-175,-367,2.8551,2.9113);

	this.instance_2 = new lib.yellow();
	this.instance_2.setTransform(-175,-367,2.3086,2.2996);

	this.instance_3 = new lib.pitbullGREY();
	this.instance_3.setTransform(-175,-367);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance}]}).to({state:[{t:this.text},{t:this.instance_2},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-367,591,717);


(lib.pekinez_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.pekinez();
	this.instance.setTransform(-175,-367);

	this.text = new cjs.Text("פקינז", "bold 55px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 71;
	this.text.lineWidth = 489;
	this.text.parent = this;
	this.text.setTransform(120.5,245.2);

	this.instance_1 = new lib.Oblue();
	this.instance_1.setTransform(-175,-367,2.8551,2.9113);

	this.instance_2 = new lib.yellow();
	this.instance_2.setTransform(-175,-367,2.3086,2.2996);

	this.instance_3 = new lib.pekinezGREY();
	this.instance_3.setTransform(-175,-367);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance}]}).to({state:[{t:this.text},{t:this.instance_2},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-367,591,717);


(lib.lavrador_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.lavrador();
	this.instance.setTransform(-175,-367);

	this.text = new cjs.Text("לברדור", "bold 55px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 71;
	this.text.lineWidth = 489;
	this.text.parent = this;
	this.text.setTransform(120.5,245.2);

	this.instance_1 = new lib.Oblue();
	this.instance_1.setTransform(-175,-367,2.8551,2.9113);

	this.instance_2 = new lib.yellow();
	this.instance_2.setTransform(-175,-367,2.3086,2.2996);

	this.instance_3 = new lib.lavradorGREY();
	this.instance_3.setTransform(-175,-367);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance}]}).to({state:[{t:this.text},{t:this.instance_2},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-367,591,717);


(lib.jack_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.jack();
	this.instance.setTransform(-175,-367);

	this.text = new cjs.Text("ג'ק ראסל", "bold 55px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 71;
	this.text.lineWidth = 489;
	this.text.parent = this;
	this.text.setTransform(120.5,245.2);

	this.instance_1 = new lib.Oblue();
	this.instance_1.setTransform(-175,-367,2.8551,2.9113);

	this.instance_2 = new lib.yellow();
	this.instance_2.setTransform(-175,-367,2.3086,2.2996);

	this.instance_3 = new lib.jackGREY();
	this.instance_3.setTransform(-175,-367);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance}]}).to({state:[{t:this.text},{t:this.instance_2},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-367,591,717);


(lib.husky_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.husky();
	this.instance.setTransform(-175,-367);

	this.text = new cjs.Text("האסקי סיבירי", "bold 55px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 71;
	this.text.lineWidth = 489;
	this.text.parent = this;
	this.text.setTransform(120.5,245.2);

	this.instance_1 = new lib.Oblue();
	this.instance_1.setTransform(-175,-367,2.8551,2.9113);

	this.instance_2 = new lib.yellow();
	this.instance_2.setTransform(-175,-367,2.3086,2.2996);

	this.instance_3 = new lib.huskyGREY();
	this.instance_3.setTransform(-175,-367);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.text},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-367,591,717);


(lib.golden_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text("גולדן רטריבר", "bold 55px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 71;
	this.text.lineWidth = 489;
	this.text.parent = this;
	this.text.setTransform(120.5,245.2);

	this.instance = new lib.golden();
	this.instance.setTransform(-175,-367);

	this.instance_1 = new lib.Oblue();
	this.instance_1.setTransform(-175,-367,2.8551,2.9113);

	this.instance_2 = new lib.yellow();
	this.instance_2.setTransform(-175,-367,2.3086,2.2996);

	this.instance_3 = new lib.goldenGREY();
	this.instance_3.setTransform(-175,-367);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.text}]}).to({state:[{t:this.instance_2},{t:this.instance},{t:this.text}]},1).to({state:[{t:this.instance_1},{t:this.text},{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-367,591,717);


(lib.x = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._1727490();
	this.instance.setTransform(307,-256);

	this.instance_1 = new lib.x1727490_1280();
	this.instance_1.setTransform(279,-275,0.4431,0.4296);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(279,-275,567.2,549.9);


(lib.INFOMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_12 = function() {
		this.logoHit.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://www.hit.ac.il/", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// Layer_2
	this.exit = new lib.x();
	this.exit.name = "exit";
	this.exit.setTransform(442.75,312,0.0732,0.0732);
	new cjs.ButtonHelper(this.exit, 0, 1, 2, false, new lib.x(), 3);

	this.timeline.addTween(cjs.Tween.get(this.exit).wait(13));

	// Layer_4
	this.logoHit = new lib.HITbtn();
	this.logoHit.name = "logoHit";
	this.logoHit.setTransform(846.45,596.45);
	this.logoHit._off = true;
	new cjs.ButtonHelper(this.logoHit, 0, 1, 2, false, new lib.HITbtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.logoHit).wait(12).to({_off:false},0).wait(1));

	// Layer_1
	this.text = new cjs.Text("גולדן רטריבר", "bold 34px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 49;
	this.text.lineWidth = 188;
	this.text.parent = this;
	this.text.setTransform(653.1,332.75);

	this.text_1 = new cjs.Text(",כלבי גולדן רטריבר הם משפחתיים ונאמנים מאוד האופי הנוח שלהם הופך אותם למתוקים ועדינים עם ילדים בנוסף הם מאוד סובלניים מה שהופך אותם .לכלבים המתאימים לכל סוגי המשפחות והבתים", "24px 'Rubik Medium'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 36;
	this.text_1.lineWidth = 532;
	this.text_1.parent = this;
	this.text_1.setTransform(646.9,581);

	this.text_2 = new cjs.Text("50-61 ס\"מ", "24px 'Rubik Medium'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 36;
	this.text_2.lineWidth = 136;
	this.text_2.parent = this;
	this.text_2.setTransform(455.3,503.65);

	this.text_3 = new cjs.Text("30 ק\"ג", "normal 500 24px 'Rubik'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 35;
	this.text_3.lineWidth = 109;
	this.text_3.parent = this;
	this.text_3.setTransform(653.1,503.65);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("12-15 שנים", "24px 'Rubik Medium'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 36;
	this.text_4.lineWidth = 133;
	this.text_4.parent = this;
	this.text_4.setTransform(851.05,503.65);

	this.instance = new lib.golden();
	this.instance.setTransform(202.75,226,0.3319,0.3188);

	this.instance_1 = new lib.infowindow();
	this.instance_1.setTransform(86.75,0,0.6545,0.6545);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0.698)").s().p("EhkKA47MAAAhx1MDIVAAAMAAABx1g");
	this.shape.setTransform(641.1,511.45);

	this.instance_2 = new lib.husky();
	this.instance_2.setTransform(205,223,0.3279,0.3279);

	this.instance_3 = new lib.jack();
	this.instance_3.setTransform(201,225,0.3384,0.3251);

	this.instance_4 = new lib.lavrador();
	this.instance_4.setTransform(205,225,0.3265,0.3265);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,153,153,0.698)").s().p("EhkKA4oMAAAhxPMDIVAAAMAAABxPg");
	this.shape_1.setTransform(641.025,514);

	this.instance_5 = new lib.pekinez();
	this.instance_5.setTransform(203,223,0.3299,0.3299);

	this.instance_6 = new lib.pitbull();
	this.instance_6.setTransform(204,222,0.33,0.33);

	this.instance_7 = new lib.pug();
	this.instance_7.setTransform(203,223,0.3299,0.3299);

	this.instance_8 = new lib.pumernian();
	this.instance_8.setTransform(203,223,0.33,0.33);

	this.instance_9 = new lib.roee();
	this.instance_9.setTransform(203,222,0.33,0.33);

	this.instance_10 = new lib.rotvailer();
	this.instance_10.setTransform(204,222,0.33,0.33);

	this.instance_11 = new lib.shitzu();
	this.instance_11.setTransform(203,222,0.33,0.33);

	this.instance_12 = new lib.york();
	this.instance_12.setTransform(203,223,0.33,0.33);

	this.instance_13 = new lib.HITbtn();
	new cjs.ButtonHelper(this.instance_13, 0, 1, 2, false, new lib.HITbtn(), 3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8FD9D1").s().p("EgwFAgyQlXAAjyjzQjzjyAAlXMAAAgnrQAAlXDzjzQDyjyFXAAMBgLAAAQFXAADyDyQDzDzAAFXMAAAAnrQAAFXjzDyQjyDzlXAAg");
	this.shape_2.setTransform(647.25,527.9327,1,1.2369);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,51,51,0.749)").s().p("EhkCA5TMAAAhylMDIFAAAMAAABx1IAAAwg");
	this.shape_3.setTransform(639.875,515.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(153,153,153,0.698)").s().p("EgAKA47MAAAhx1IAVAAMAAABx1g");
	this.shape_4.setTransform(1281.275,513);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:641.1,y:511.45}},{t:this.instance_1,p:{x:86.75,y:0}},{t:this.instance},{t:this.text_4,p:{x:851.05,y:503.65,text:"12-15 שנים"}},{t:this.text_3,p:{x:653.1,y:503.65,text:"30 ק\"ג",lineHeight:34.85,lineWidth:109,scaleX:1,font:"normal 500 24px 'Rubik'",textAlign:"center"}},{t:this.text_2,p:{x:455.3,y:503.65,text:"50-61 ס\"מ",lineWidth:136,font:"24px 'Rubik Medium'",color:"#000000",lineHeight:36.05}},{t:this.text_1,p:{x:646.9,y:581,text:",כלבי גולדן רטריבר הם משפחתיים ונאמנים מאוד האופי הנוח שלהם הופך אותם למתוקים ועדינים עם ילדים בנוסף הם מאוד סובלניים מה שהופך אותם .לכלבים המתאימים לכל סוגי המשפחות והבתים",font:"24px 'Rubik Medium'",lineHeight:36.05,lineWidth:532}},{t:this.text,p:{x:653.1,y:332.75,text:"גולדן רטריבר",lineWidth:188,font:"bold 34px 'Rubik'",lineHeight:48.6}}]}).to({state:[{t:this.shape,p:{x:641.025,y:512.1}},{t:this.instance_1,p:{x:86,y:1}},{t:this.text_4,p:{x:851,y:504.3,text:"12-14 שנים"}},{t:this.text_3,p:{x:653.05,y:504.3,text:"24 ק\"ג",lineHeight:36.05,lineWidth:109,scaleX:1,font:"normal 500 24px 'Rubik'",textAlign:"center"}},{t:this.text_2,p:{x:455.25,y:504.3,text:"50-59 ס\"מ",lineWidth:136,font:"24px 'Rubik Medium'",color:"#000000",lineHeight:36.05}},{t:this.text_1,p:{x:646.85,y:581.65,text:"האסקי סיבירי אוהב לרוץ ולשחק וזקוק להמון פעילות .גופנית, לגזע זה יש זיקה טבעית לילדים ואופי נח\nהגזע פורח בחברת אנשים והוא זקוק לחברה ממש כמו .שהוא זקוק לאוכל ומים",font:"24px 'Rubik Medium'",lineHeight:36.05,lineWidth:532}},{t:this.text,p:{x:655.3,y:333.4,text:"האסקי סיבירי",lineWidth:201,font:"bold 34px 'Rubik'",lineHeight:48.6}},{t:this.instance_2}]},1).to({state:[{t:this.shape,p:{x:641.025,y:512.1}},{t:this.instance_1,p:{x:86,y:1}},{t:this.text_4,p:{x:851,y:504.3,text:"15-17 שנים"}},{t:this.text_3,p:{x:653.05,y:504.3,text:"6-10 ק\"ג",lineHeight:36.05,lineWidth:109,scaleX:1,font:"normal 500 24px 'Rubik'",textAlign:"center"}},{t:this.text_2,p:{x:455.25,y:504.3,text:"25-38 ס\"מ",lineWidth:136,font:"24px 'Rubik Medium'",color:"#000000",lineHeight:36.05}},{t:this.text_1,p:{x:646.85,y:581.65,text:"ג'ק ראסל הוא כלב בית קטן, הם מתאימים גם למשפחה .עם ילדים, בהיותם ידידותיים, נמרצים וקלים לאילוף ניתן לגדלו גם בדירה, אולם יש לספק לו הרבה זמן של .טיולים, ספורט וריצה מידי יום",font:"24px 'Rubik Medium'",lineHeight:36.05,lineWidth:532}},{t:this.text,p:{x:655.3,y:333.4,text:"ג'ק ראסל",lineWidth:201,font:"bold 34px 'Rubik'",lineHeight:48.6}},{t:this.instance_3}]},1).to({state:[{t:this.shape_1},{t:this.instance_1,p:{x:86,y:1}},{t:this.text_4,p:{x:851,y:504.3,text:"12-14 שנים"}},{t:this.text_3,p:{x:659.1,y:504.3,text:"30-45 ק\"ג",lineHeight:36.05,lineWidth:121,scaleX:1,font:"normal 500 24px 'Rubik'",textAlign:"center"}},{t:this.text_2,p:{x:455.25,y:504.3,text:"54-63 ס\"מ",lineWidth:136,font:"24px 'Rubik Medium'",color:"#000000",lineHeight:36.05}},{t:this.text_1,p:{x:636.85,y:581.65,text:"מדובר בכלבים ידידותיים ונוחים שמגלים חיבה כלפי כל אחד. הם מסתגלים בקלות לכל מצב, אופטימיים מאוד וחברותיים מעצם טיבם, מסתדרים בקלות עם אנשים או .חיות חדשות\n  ",font:"24px 'Rubik Medium'",lineHeight:36.05,lineWidth:532}},{t:this.text,p:{x:655.3,y:333.4,text:"לברדור",lineWidth:201,font:"bold 34px 'Rubik'",lineHeight:48.6}},{t:this.instance_4}]},1).to({state:[{t:this.shape,p:{x:641.025,y:512.1}},{t:this.instance_1,p:{x:86,y:1}},{t:this.text_4,p:{x:851,y:504.3,text:"12-15 שנים"}},{t:this.text_3,p:{x:455.25,y:504.3,text:"15-23 ס\"מ",lineHeight:36.05,lineWidth:136,scaleX:1,font:"normal 500 24px 'Rubik'",textAlign:"center"}},{t:this.text_2,p:{x:624.4,y:581.65,text:"הפקינזים מצטיינים באומץ ומאוד נאמנים לבעליהם, בדרך כלל אינם חובבים אנשים זרים. כלב פקינז קל ונוח לגידול .גם בדירה קטנה. כיף לטפח אותו והוא ידידותי לילדים\n  ",lineWidth:561,font:"24px 'Rubik Medium'",color:"#000000",lineHeight:36.05}},{t:this.text_1,p:{x:655.3,y:333.4,text:"פקינז",font:"bold 34px 'Rubik'",lineHeight:48.6,lineWidth:201}},{t:this.text,p:{x:654.9,y:504.3,text:"4-6 ק\"ג",lineWidth:109,font:"24px 'Rubik Medium'",lineHeight:36.05}},{t:this.instance_5}]},1).to({state:[{t:this.shape,p:{x:641.025,y:512.1}},{t:this.instance_1,p:{x:86,y:1}},{t:this.text_4,p:{x:851,y:504.3,text:"8-15 שנים"}},{t:this.text_3,p:{x:455.25,y:504.3,text:"40-60 ס\"מ",lineHeight:36.05,lineWidth:136,scaleX:1,font:"normal 500 24px 'Rubik'",textAlign:"center"}},{t:this.text_2,p:{x:609.4,y:581.65,text:"כלבי פיטבול ידועים בנאמנותם, כוחם, ידידותם והחוכמה ,שלהם. ישנם מקומות בעולם שאסור לגדל בהם כלבים אלו למרות שרוב ההתנהגות השלילית שלהם נבעה מכך שהבעלים .שלהם התעללו בהם ולא בגלל התכונות של הגזע עצמו\n  ",lineWidth:607,font:"24px 'Rubik Medium'",color:"#000000",lineHeight:36.05}},{t:this.text_1,p:{x:655.3,y:333.4,text:"פיטבול",font:"bold 34px 'Rubik'",lineHeight:48.6,lineWidth:201}},{t:this.text,p:{x:654.9,y:504.3,text:"25-40 ק\"ג",lineWidth:109,font:"24px 'Rubik Medium'",lineHeight:36.05}},{t:this.instance_6}]},1).to({state:[{t:this.shape,p:{x:641.025,y:512.1}},{t:this.instance_1,p:{x:86,y:1}},{t:this.text_4,p:{x:851,y:504.3,text:"12-18 שנים"}},{t:this.text_3,p:{x:455.25,y:504.3,text:"23-28 ס\"מ",lineHeight:36.05,lineWidth:136,scaleX:1,font:"normal 500 24px 'Rubik'",textAlign:"center"}},{t:this.text_2,p:{x:639.85,y:581.65,text:"הרבה כלב בחלל קטן\" נאמר על כלב פאג שיכול להיות\" בו זמנית שובב, מכובד ומקסים. כלבי פאג מאוד טובים עם ילדים, אך הם לא אוהבים לרוץ לתקופות זמן .ממושכות. כלב פאג הוא בן לוויה טוב ולא כלב שמירה\n  ",lineWidth:532,font:"24px 'Rubik Medium'",color:"#000000",lineHeight:36.05}},{t:this.text_1,p:{x:655.3,y:333.4,text:"פאג סיני",font:"bold 34px 'Rubik'",lineHeight:48.6,lineWidth:201}},{t:this.text,p:{x:654.9,y:504.3,text:"6-12 ק\"ג",lineWidth:109,font:"24px 'Rubik Medium'",lineHeight:36.05}},{t:this.instance_7}]},1).to({state:[{t:this.shape,p:{x:641.025,y:512.1}},{t:this.instance_1,p:{x:86,y:1}},{t:this.text_4,p:{x:851,y:504.3,text:"12-16 שנים"}},{t:this.text_3,p:{x:455.25,y:504.3,text:"18-22 ס\"מ",lineHeight:36.05,lineWidth:136,scaleX:1,font:"normal 500 24px 'Rubik'",textAlign:"center"}},{t:this.text_2,p:{x:646.85,y:581.65,text:".כיום זהו אחד הכלבים הפופולאריים ביותר בעולם ,למרות גודלו הזעיר, כלב פומרניין הוא בעל אופי חזק עקשן ודומיננטי. אחד המאפיינים הבולטים של כלב זה .הוא חביבותו ושמחת החיים שלו\n  ",lineWidth:532,font:"24px 'Rubik Medium'",color:"#000000",lineHeight:36.05}},{t:this.text_1,p:{x:655.3,y:333.4,text:"פומרניין",font:"bold 34px 'Rubik'",lineHeight:48.6,lineWidth:201}},{t:this.text,p:{x:656.2,y:504.3,text:"1.5-2.8 ק\"ג",lineWidth:127,font:"24px 'Rubik Medium'",lineHeight:36.05}},{t:this.instance_8}]},1).to({state:[{t:this.shape,p:{x:641.025,y:512.1}},{t:this.instance_1,p:{x:86,y:1}},{t:this.text_4,p:{x:851,y:504.3,text:"13-14 שנים"}},{t:this.text_3,p:{x:455.25,y:504.3,text:"55-66 ס\"מ",lineHeight:36.05,lineWidth:136,scaleX:1,font:"normal 500 24px 'Rubik'",textAlign:"center"}},{t:this.text_2,p:{x:616.9,y:574.4,text:"כלבים נאמנים בצורה קיצונית ומגנים על משפחתם. לאחר שהכלב יוצר קשר עם הבעלים הוא הופך לבן לוויה נפלא, יש נטייה לחשוב שהגזע משמש ככלב שמירה או כלבי משטרה .אבל הם יכולים בקלות להפוך לחיות מחמד למשפחה\n  ",lineWidth:578,font:"24px 'Rubik Medium'",color:"#000000",lineHeight:36.05}},{t:this.text_1,p:{x:655.3,y:333.4,text:"רועה גרמני",font:"bold 34px 'Rubik'",lineHeight:48.6,lineWidth:201}},{t:this.text,p:{x:656.2,y:504.3,text:"40-45 ק\"ג",lineWidth:121,font:"24px 'Rubik Medium'",lineHeight:36.05}},{t:this.instance_9}]},1).to({state:[{t:this.shape,p:{x:641.025,y:512.1}},{t:this.instance_1,p:{x:86,y:1}},{t:this.text_4,p:{x:851,y:504.3,text:"9-10 שנים"}},{t:this.text_3,p:{x:455.25,y:504.3,text:"55-70 ס\"מ",lineHeight:36.05,lineWidth:136,scaleX:1,font:"normal 500 24px 'Rubik'",textAlign:"center"}},{t:this.text_2,p:{x:646.85,y:581.65,text:"כלבים מאוד דרוכים ובני לוויה נאמנים ואוהבים. כדאי להיזהר עם רכושנותו לאוכל ולצעצועים. כלבים אלו עשויים להשתעמם בקלות וזה יכול להוביל אותם .להתנהגות הרסנית, בעיות בריאות ואגרסיביות\n  ",lineWidth:532,font:"24px 'Rubik Medium'",color:"#000000",lineHeight:36.05}},{t:this.text_1,p:{x:655.3,y:333.4,text:"רוטווילר",font:"bold 34px 'Rubik'",lineHeight:48.6,lineWidth:201}},{t:this.text,p:{x:655.7,y:504.3,text:"40-55 ק\"ג",lineWidth:120,font:"24px 'Rubik Medium'",lineHeight:36.05}},{t:this.instance_10}]},1).to({state:[{t:this.shape,p:{x:641.025,y:512.1}},{t:this.instance_1,p:{x:86,y:1}},{t:this.text_4,p:{x:851,y:504.3,text:"12-14 שנים"}},{t:this.text_3,p:{x:455.25,y:504.3,text:"20-28 ס\"מ",lineHeight:36.05,lineWidth:136,scaleX:1,font:"normal 500 24px 'Rubik'",textAlign:"center"}},{t:this.text_2,p:{x:639.85,y:581.65,text:"כלבים קטנים אלו אינם משירים שיער ולכן הם טובים גם ,לסובלים מאלרגיה. שיצו הוא כלב שובב מאוד אך מתוק ,בני לוויה טובים, אופטימיים שאוהבים לשחק ולהשתולל .כלבי השיצו מסתדרים נפלא עם חיות מחמד אחרות\n  ",lineWidth:532,font:"24px 'Rubik Medium'",color:"#000000",lineHeight:36.05}},{t:this.text_1,p:{x:655.3,y:333.4,text:"שיצו",font:"bold 34px 'Rubik'",lineHeight:48.6,lineWidth:201}},{t:this.text,p:{x:654.9,y:504.3,text:"4-7.5 ק\"ג",lineWidth:109,font:"24px 'Rubik Medium'",lineHeight:36.05}},{t:this.instance_11}]},1).to({state:[{t:this.shape,p:{x:641.025,y:512.1}},{t:this.instance_1,p:{x:86,y:1}},{t:this.text_4,p:{x:851,y:504.3,text:"12-17 שנים"}},{t:this.text_3,p:{x:455.25,y:504.3,text:"16-22 ס\"מ",lineHeight:36.05,lineWidth:136,scaleX:1,font:"normal 500 24px 'Rubik'",textAlign:"center"}},{t:this.text_2,p:{x:639.85,y:581.65,text:"הפרווה הארוכה והמבריקה מחייבת הברשה וניקוי יומיומי. כלבי היורקשייר אינם מודעים לגודלם הקטן כאשר הם שומרים על הבית. מאוד נאמנים לבעליהם .ויעדיפו לישון במיטתם, מלאי אנרגייה וטובים עם ילדים\n  ",lineWidth:532,font:"24px 'Rubik Medium'",color:"#000000",lineHeight:36.05}},{t:this.text_1,p:{x:655.3,y:333.4,text:"יורקשייר",font:"bold 34px 'Rubik'",lineHeight:48.6,lineWidth:201}},{t:this.text,p:{x:654.9,y:504.3,text:"3-4.5 ק\"ג",lineWidth:109,font:"24px 'Rubik Medium'",lineHeight:36.05}},{t:this.instance_12}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.text_3,p:{x:832.843,y:630.25,text:"הופק במסגרת קורס ארגון וייצוג ידע וקורס מבוא לתכנות אינטראקציה ואנימציה הפקולטה לטכנולוגיות למידה, 2021",lineHeight:34.55,lineWidth:607,scaleX:0.9416,font:"normal 500 26px 'Rubik'",textAlign:"right"}},{t:this.text_2,p:{x:647.25,y:283.35,text:"אודות",lineWidth:216,font:"bold 50px 'Rubik'",color:"#FFFFCC",lineHeight:64.6}},{t:this.text_1,p:{x:647.25,y:395,text:"?איזה כלב מתאים לנו",font:"bold 55px 'Rubik'",lineHeight:70.9,lineWidth:503}},{t:this.text,p:{x:647.25,y:485.85,text:"ירין אלקיים, יעל חן אלפי סבטה גרמן",lineWidth:682,font:"30px 'Rubik Medium'",lineHeight:39.55}},{t:this.instance_13}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,0,1282.8000000000002,1030.5);


// stage content:
(lib.DogsYYS = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		stage.enableMouseOver(24);
		
		self.info.visible = false;
		/*הגדרת משתנה שיספור את מספר הלחיצות*/
		
		/*ליסנרים למאפיינים*/
		
		self.building.addEventListener("click", clickDogB);
		self.garden.addEventListener("click", clickDogG);
		self.single.addEventListener("click", clickDogS);
		self.family.addEventListener("click", clickDogF);
		self.old.addEventListener("click", clickDogO);
		
		self.building.addEventListener("mouseover", mouseDogB);
		self.garden.addEventListener("mouseover", mouseDogG);
		self.single.addEventListener("mouseover", mouseDogS);
		self.family.addEventListener("mouseover", mouseDogF);
		self.old.addEventListener("mouseover", mouseDogO);
		
		self.building.addEventListener("mouseout", outDogB);
		self.garden.addEventListener("mouseout", outDogG);
		self.single.addEventListener("mouseout", outDogS);
		self.family.addEventListener("mouseout", outDogF);
		self.old.addEventListener("mouseout", outDogO);
		
		/*ליסנרים לכלבים*/
		
		self.rot.addEventListener("click", clickRot);
		self.pikinez.addEventListener("click", clickPik);
		self.roee.addEventListener("click", clickRoee);
		self.york.addEventListener("click", clickYork);
		self.pumernian.addEventListener("click", clickPum);
		self.husky.addEventListener("click", clickHusky);
		self.jack.addEventListener("click", clickJack);
		self.golden.addEventListener("click", clickGolden);
		self.lavrador.addEventListener("click", clickLavrador);
		self.pug.addEventListener("click", clickPug);
		self.shizu.addEventListener("click", clickShizu);
		self.pitbull.addEventListener("click", clickPit);
		
		self.rot.addEventListener("mouseover", mouseRot);
		self.pikinez.addEventListener("mouseover", mousePik);
		self.roee.addEventListener("mouseover", mouseRoee);
		self.york.addEventListener("mouseover", mouseYork);
		self.pumernian.addEventListener("mouseover", mousePum);
		self.husky.addEventListener("mouseover", mouseHusky);
		self.jack.addEventListener("mouseover", mouseJack);
		self.golden.addEventListener("mouseover", mouseGolden);
		self.lavrador.addEventListener("mouseover", mouseLavrador);
		self.pug.addEventListener("mouseover", mousePug);
		self.shizu.addEventListener("mouseover", mouseShizu);
		self.pitbull.addEventListener("mouseover", mousePit);
		
		self.rot.addEventListener("mouseout", outRot);
		self.pikinez.addEventListener("mouseout", outPik);
		self.roee.addEventListener("mouseout", outRoee);
		self.york.addEventListener("mouseout", outYork);
		self.pumernian.addEventListener("mouseout", outPum);
		self.husky.addEventListener("mouseout", outHusky);
		self.jack.addEventListener("mouseout", outJack);
		self.golden.addEventListener("mouseout", outGolden);
		self.lavrador.addEventListener("mouseout", outLavrador);
		self.pug.addEventListener("mouseout", outPug);
		self.shizu.addEventListener("mouseout", outShizu);
		self.pitbull.addEventListener("mouseout", outPit);
		
		
		/*  יציאה ליסנר לכפתור X*/
		
		self.info.exit.addEventListener("click", exitInfo);
		
		/*ליסנר לכפתור אודות*/
		self.about.addEventListener("click", clickAbout);
		
		
		/*ביטול כל הליסנרים*/
		
		function zeroA() {
			self.building.removeEventListener("click", clickDogB);
			self.garden.removeEventListener("click", clickDogG);
			self.single.removeEventListener("click", clickDogS);
			self.family.removeEventListener("click", clickDogF);
			self.old.removeEventListener("click", clickDogO);
		
			self.building.removeEventListener("mouseover", mouseDogB);
			self.garden.removeEventListener("mouseover", mouseDogG);
			self.single.removeEventListener("mouseover", mouseDogS);
			self.family.removeEventListener("mouseover", mouseDogF);
			self.old.removeEventListener("mouseover", mouseDogO);
		
			self.building.removeEventListener("mouseout", outDogB);
			self.garden.removeEventListener("mouseout", outDogG);
			self.single.removeEventListener("mouseout", outDogS);
			self.family.removeEventListener("mouseout", outDogF);
			self.old.removeEventListener("mouseout", outDogO);
		
			self.rot.removeEventListener("click", clickRot);
			self.pikinez.removeEventListener("click", clickPik);
			self.roee.removeEventListener("click", clickRoee);
			self.york.removeEventListener("click", clickYork);
			self.pumernian.removeEventListener("click", clickPum);
			self.husky.removeEventListener("click", clickHusky);
			self.jack.removeEventListener("click", clickJack);
			self.golden.removeEventListener("click", clickGolden);
			self.lavrador.removeEventListener("click", clickLavrador);
			self.pug.removeEventListener("click", clickPug);
			self.shizu.removeEventListener("click", clickShizu);
			self.pitbull.removeEventListener("click", clickPit);
		
			self.rot.removeEventListener("mouseover", mouseRot);
			self.pikinez.removeEventListener("mouseover", mousePik);
			self.roee.removeEventListener("mouseover", mouseRoee);
			self.york.removeEventListener("mouseover", mouseYork);
			self.pumernian.removeEventListener("mouseover", mousePum);
			self.husky.removeEventListener("mouseover", mouseHusky);
			self.jack.removeEventListener("mouseover", mouseJack);
			self.golden.removeEventListener("mouseover", mouseGolden);
			self.lavrador.removeEventListener("mouseover", mouseLavrador);
			self.pug.removeEventListener("mouseover", mousePug);
			self.shizu.removeEventListener("mouseover", mouseShizu);
			self.pitbull.removeEventListener("mouseover", mousePit);
		
			self.rot.removeEventListener("mouseout", outRot);
			self.pikinez.removeEventListener("mouseout", outPik);
			self.roee.removeEventListener("mouseout", outRoee);
			self.york.removeEventListener("mouseout", outYork);
			self.pumernian.removeEventListener("mouseout", outPum);
			self.husky.removeEventListener("mouseout", outHusky);
			self.jack.removeEventListener("mouseout", outJack);
			self.golden.removeEventListener("mouseout", outGolden);
			self.lavrador.removeEventListener("mouseout", outLavrador);
			self.pug.removeEventListener("mouseout", outPug);
			self.shizu.removeEventListener("mouseout", outShizu);
			self.pitbull.removeEventListener("mouseout", outPit);
		
		}
		
		/*הפעלת כל הליסנרים*/
		
		function onA() {
		
			/*ליסנרים למאפיינים*/
			self.building.addEventListener("click", clickDogB);
			self.garden.addEventListener("click", clickDogG);
			self.single.addEventListener("click", clickDogS);
			self.family.addEventListener("click", clickDogF);
			self.old.addEventListener("click", clickDogO);
		
			self.building.addEventListener("mouseover", mouseDogB);
			self.garden.addEventListener("mouseover", mouseDogG);
			self.single.addEventListener("mouseover", mouseDogS);
			self.family.addEventListener("mouseover", mouseDogF);
			self.old.addEventListener("mouseover", mouseDogO);
		
			self.building.addEventListener("mouseout", outDogB);
			self.garden.addEventListener("mouseout", outDogG);
			self.single.addEventListener("mouseout", outDogS);
			self.family.addEventListener("mouseout", outDogF);
			self.old.addEventListener("mouseout", outDogO);
		
			/*ליסנרים לכלבים*/
		
			self.rot.addEventListener("click", clickRot);
			self.pikinez.addEventListener("click", clickPik);
			self.roee.addEventListener("click", clickRoee);
			self.york.addEventListener("click", clickYork);
			self.pumernian.addEventListener("click", clickPum);
			self.husky.addEventListener("click", clickHusky);
			self.jack.addEventListener("click", clickJack);
			self.golden.addEventListener("click", clickGolden);
			self.lavrador.addEventListener("click", clickLavrador);
			self.pug.addEventListener("click", clickPug);
			self.shizu.addEventListener("click", clickShizu);
			self.pitbull.addEventListener("click", clickPit);
		
			self.rot.addEventListener("mouseover", mouseRot);
			self.pikinez.addEventListener("mouseover", mousePik);
			self.roee.addEventListener("mouseover", mouseRoee);
			self.york.addEventListener("mouseover", mouseYork);
			self.pumernian.addEventListener("mouseover", mousePum);
			self.husky.addEventListener("mouseover", mouseHusky);
			self.jack.addEventListener("mouseover", mouseJack);
			self.golden.addEventListener("mouseover", mouseGolden);
			self.lavrador.addEventListener("mouseover", mouseLavrador);
			self.pug.addEventListener("mouseover", mousePug);
			self.shizu.addEventListener("mouseover", mouseShizu);
			self.pitbull.addEventListener("mouseover", mousePit);
		
			self.rot.addEventListener("mouseout", outRot);
			self.pikinez.addEventListener("mouseout", outPik);
			self.roee.addEventListener("mouseout", outRoee);
			self.york.addEventListener("mouseout", outYork);
			self.pumernian.addEventListener("mouseout", outPum);
			self.husky.addEventListener("mouseout", outHusky);
			self.jack.addEventListener("mouseout", outJack);
			self.golden.addEventListener("mouseout", outGolden);
			self.lavrador.addEventListener("mouseout", outLavrador);
			self.pug.addEventListener("mouseout", outPug);
			self.shizu.addEventListener("mouseout", outShizu);
			self.pitbull.addEventListener("mouseout", outPit);
		
		}
		/*הפעלת לסנרים: לחיצה על מאפיין*/
		
		function onDC() {
		
			self.building.addEventListener("click", clickDogB);
			self.garden.addEventListener("click", clickDogG);
			self.single.addEventListener("click", clickDogS);
			self.family.addEventListener("click", clickDogF);
			self.old.addEventListener("click", clickDogO);
		
			self.rot.addEventListener("click", clickRot);
			self.pikinez.addEventListener("click", clickPik);
			self.roee.addEventListener("click", clickRoee);
			self.york.addEventListener("click", clickYork);
			self.pumernian.addEventListener("click", clickPum);
			self.husky.addEventListener("click", clickHusky);
			self.jack.addEventListener("click", clickJack);
			self.golden.addEventListener("click", clickGolden);
			self.lavrador.addEventListener("click", clickLavrador);
			self.pug.addEventListener("click", clickPug);
			self.shizu.addEventListener("click", clickShizu);
			self.pitbull.addEventListener("click", clickPit);
		
		}
		/*פונקציית איפוס*/
		function zero() {
			self.building.gotoAndStop(0);
			self.garden.gotoAndStop(0);
			self.single.gotoAndStop(0);
			self.family.gotoAndStop(0);
			self.old.gotoAndStop(0);
		
			self.rot.gotoAndStop(0);
			self.pikinez.gotoAndStop(0);
			self.roee.gotoAndStop(0);
			self.york.gotoAndStop(0);
			self.pumernian.gotoAndStop(0);
			self.husky.gotoAndStop(0);
			self.jack.gotoAndStop(0);
			self.golden.gotoAndStop(0);
			self.lavrador.gotoAndStop(0);
			self.pug.gotoAndStop(0);
			self.shizu.gotoAndStop(0);
			self.pitbull.gotoAndStop(0);
		
		}
		
		/*פונקציות לחיצה על מאפיין*/
		
		var house = "clear";
		var kind = "clear";
		
		function clickDogB() {
		
			if (house!="b" && kind == "clear") {
				zero();
				zeroA();
				onDC();
		
				self.rot.gotoAndStop(2);
				self.pikinez.gotoAndStop(1);
				self.roee.gotoAndStop(2);
				self.york.gotoAndStop(1);
				self.pumernian.gotoAndStop(1);
				self.husky.gotoAndStop(2);
				self.jack.gotoAndStop(1);
				self.golden.gotoAndStop(1);
				self.lavrador.gotoAndStop(1);
				self.pug.gotoAndStop(1);
				self.shizu.gotoAndStop(1);
				self.pitbull.gotoAndStop(2);
		
				self.building.gotoAndStop(1);
		
				self.garden.mouseEnabled = false;
				self.single.mouseEnabled = true;
				self.family.mouseEnabled = true;
				self.old.mouseEnabled = true;
				
				self.single.addEventListener("mouseover", fs);
				self.family.addEventListener("mouseover", ff);
				self.old.addEventListener("mouseover", fo);
				
				house="b";
			}
			else if(kind=="s"){
				self.rot.gotoAndStop(2);
				self.pikinez.gotoAndStop(1);
				self.roee.gotoAndStop(2);
				self.york.gotoAndStop(1);
				self.pumernian.gotoAndStop(1);
				self.husky.gotoAndStop(2);
				self.jack.gotoAndStop(1);
				self.golden.gotoAndStop(1);
				self.lavrador.gotoAndStop(1);
				self.pug.gotoAndStop(1);
				self.shizu.gotoAndStop(1);
				self.pitbull.gotoAndStop(2);
				kind = "clear";
				self.single.addEventListener("mouseout", outKind);
				}
			else if(kind=="f"){
				self.rot.gotoAndStop(2);
				self.pikinez.gotoAndStop(1);
				self.roee.gotoAndStop(2);
				self.york.gotoAndStop(1);
				self.pumernian.gotoAndStop(1);
				self.husky.gotoAndStop(2);
				self.jack.gotoAndStop(1);
				self.golden.gotoAndStop(1);
				self.lavrador.gotoAndStop(1);
				self.pug.gotoAndStop(1);
				self.shizu.gotoAndStop(1);
				self.pitbull.gotoAndStop(2);
				kind = "clear";
				self.family.addEventListener("mouseout", outKind);
			}
			else if(kind=="o"){
				self.rot.gotoAndStop(2);
				self.pikinez.gotoAndStop(1);
				self.roee.gotoAndStop(2);
				self.york.gotoAndStop(1);
				self.pumernian.gotoAndStop(1);
				self.husky.gotoAndStop(2);
				self.jack.gotoAndStop(2);
				self.golden.gotoAndStop(1);
				self.lavrador.gotoAndStop(1);
				self.pug.gotoAndStop(1);
				self.shizu.gotoAndStop(1);
				self.pitbull.gotoAndStop(2);
				kind = "clear";
				self.old.addEventListener("mouseout", outKind);
			}
		
			else {
				zero();
				onA();
				house="clear";
		
				self.garden.mouseEnabled = true;
			}
		}
		/*שליחה לפונקציית בניין*/
		/*מה קורה בזמן מעבר עכבר מעל רווק או רווקה*/
			function fs(){
				self.single.gotoAndStop(1);
				self.single.cursor = "pointer";
				kind="s";
				clickDogB();
		}
		/*משפחה*/
			function ff(){
				self.family.gotoAndStop(1);
				self.family.cursor = "pointer";
				kind="f";
				clickDogB();
		}
		/*מבוגרים*/
			function fo(){
				self.old.gotoAndStop(1);
				self.old.cursor = "pointer";
				kind="o";
				clickDogB();
		}
		/*מה קורה בזמן יציאת עכבר - גלובלי*/
		function outKind(){
			self.single.gotoAndStop(0);
			self.old.gotoAndStop(0);
			self.family.gotoAndStop(0);
			self.building.gotoAndStop(1);
			house = "clear";
			clickDogB();
		}
		
		/*שליחה לפונקציית גינה*/
		
		function clickDogG() {
			
			if (house!="g" && kind == "clear") {
				zero();
				zeroA();
				onDC();
		
				self.rot.gotoAndStop(1);
				self.pikinez.gotoAndStop(1);
				self.roee.gotoAndStop(1);
				self.york.gotoAndStop(1);
				self.pumernian.gotoAndStop(1);
				self.husky.gotoAndStop(1);
				self.jack.gotoAndStop(1);
				self.golden.gotoAndStop(1);
				self.lavrador.gotoAndStop(1);
				self.pug.gotoAndStop(1);
				self.shizu.gotoAndStop(1);
				self.pitbull.gotoAndStop(1);
		
				self.garden.gotoAndStop(1);
		
				self.building.mouseEnabled = false;
				self.single.mouseEnabled = true;
				self.family.mouseEnabled = true;
				self.old.mouseEnabled = true;
				
				self.single.addEventListener("mouseover", gs);
				self.family.addEventListener("mouseover", gf);
				self.old.addEventListener("mouseover", go);
				house="g";
			}
			else if(kind=="s"){
				self.rot.gotoAndStop(1);
				self.pikinez.gotoAndStop(1);
				self.roee.gotoAndStop(1);
				self.york.gotoAndStop(1);
				self.pumernian.gotoAndStop(1);
				self.husky.gotoAndStop(1);
				self.jack.gotoAndStop(1);
				self.golden.gotoAndStop(1);
				self.lavrador.gotoAndStop(1);
				self.pug.gotoAndStop(1);
				self.shizu.gotoAndStop(1);
				self.pitbull.gotoAndStop(1);
				kind = "clear";
				self.single.addEventListener("mouseout", outKindG);
				}
			else if(kind=="f"){
				self.rot.gotoAndStop(2);
				self.pikinez.gotoAndStop(1);
				self.roee.gotoAndStop(1);
				self.york.gotoAndStop(1);
				self.pumernian.gotoAndStop(1);
				self.husky.gotoAndStop(1);
				self.jack.gotoAndStop(1);
				self.golden.gotoAndStop(1);
				self.lavrador.gotoAndStop(1);
				self.pug.gotoAndStop(1);
				self.shizu.gotoAndStop(1);
				self.pitbull.gotoAndStop(2);
				kind = "clear";
				self.family.addEventListener("mouseout", outKindG);
			}
			else if(kind=="o"){
				self.rot.gotoAndStop(2);
				self.pikinez.gotoAndStop(1);
				self.roee.gotoAndStop(2);
				self.york.gotoAndStop(1);
				self.pumernian.gotoAndStop(1);
				self.husky.gotoAndStop(2);
				self.jack.gotoAndStop(2);
				self.golden.gotoAndStop(1);
				self.lavrador.gotoAndStop(1);
				self.pug.gotoAndStop(1);
				self.shizu.gotoAndStop(1);
				self.pitbull.gotoAndStop(2);
				kind = "clear";
				self.old.addEventListener("mouseout", outKindG);
			}
		
			else {
				zero();
				onA();
				house="clear";
		
				self.building.mouseEnabled = true;
			}
		}
		/*שליחה לפונקציית גינה*/
		/*מה קורה בזמן מעבר עכבר מעל רווק או רווקה*/
			function gs(){
				self.single.gotoAndStop(1);
				self.single.cursor = "pointer";
				kind="s";
				clickDogG();
		}
		/*משפחה*/
			function gf(){
				self.family.gotoAndStop(1);
				self.family.cursor = "pointer";
				kind="f";
				clickDogG();
		}
		/*מבוגרים*/
			function go(){
				self.old.gotoAndStop(1);
				self.old.cursor = "pointer";
				kind="o";
				clickDogG();
		}
		/*מה קורה בזמן יציאת עכבר - גלובלי*/
		function outKindG(){
			self.single.gotoAndStop(0);
			self.old.gotoAndStop(0);
			self.family.gotoAndStop(0);
			self.garden.gotoAndStop(1);
			house = "clear";
			clickDogG();
		}
		
		function clickDogS() {
		
			if (kind!="s") {
				zero();
				zeroA();
				onDC();
		
				self.rot.gotoAndStop(1);
				self.pikinez.gotoAndStop(1);
				self.roee.gotoAndStop(1);
				self.york.gotoAndStop(1);
				self.pumernian.gotoAndStop(1);
				self.husky.gotoAndStop(1);
				self.jack.gotoAndStop(1);
				self.golden.gotoAndStop(1);
				self.lavrador.gotoAndStop(1);
				self.pug.gotoAndStop(1);
				self.shizu.gotoAndStop(1);
				self.pitbull.gotoAndStop(1);
		
				self.single.gotoAndStop(1);
		
				self.family.mouseEnabled = false;
				self.old.mouseEnabled = false;
				kind="s";
		
			}
		
			else {
				zero();
				onA();
				kind="clear";
		
				self.family.mouseEnabled = true;
				self.old.mouseEnabled = true;
		
			}
		}
		
		function clickDogF() {
			if (kind != "f") {
				zero();
				zeroA();
				onDC();
		
				self.rot.gotoAndStop(2);
				self.pikinez.gotoAndStop(1);
				self.roee.gotoAndStop(1);
				self.york.gotoAndStop(1);
				self.pumernian.gotoAndStop(1);
				self.husky.gotoAndStop(1);
				self.jack.gotoAndStop(1);
				self.golden.gotoAndStop(1);
				self.lavrador.gotoAndStop(1);
				self.pug.gotoAndStop(1);
				self.shizu.gotoAndStop(1);
				self.pitbull.gotoAndStop(2);
		
				self.family.gotoAndStop(1);
		
				self.single.mouseEnabled = false;
				self.old.mouseEnabled = false;
				kind="f";
			}
		
			else {
				zero();
				onA();
				kind="clear";
			
		
				self.single.mouseEnabled = true;
				self.old.mouseEnabled = true;
		
			}
		}
		
		function clickDogO() {
		
			if (kind!="o") {
				zero();
				zeroA();
				onDC();
		
				self.rot.gotoAndStop(2);
				self.pikinez.gotoAndStop(1);
				self.roee.gotoAndStop(2);
				self.york.gotoAndStop(1);
				self.pumernian.gotoAndStop(1);
				self.husky.gotoAndStop(2);
				self.jack.gotoAndStop(2);
				self.golden.gotoAndStop(1);
				self.lavrador.gotoAndStop(1);
				self.pug.gotoAndStop(1);
				self.shizu.gotoAndStop(1);
				self.pitbull.gotoAndStop(2);
		
				self.old.gotoAndStop(1);
		
				self.single.mouseEnabled = false;
				self.family.mouseEnabled = false;
				kind="o";
		
			}
		
			else {
				zero();
				onA();
				kind="clear";
		
				self.single.mouseEnabled = true;
				self.family.mouseEnabled = true;
		
			}
		}
		
		/*פונקציות מעבר עכבר על כלבים*/
		
		
		function mouseRot() {
		
			zero();
			self.building.gotoAndStop(2);
			self.family.gotoAndStop(2);
			self.old.gotoAndStop(2);
			self.rot.gotoAndStop(1);
			self.rot.cursor = "pointer";
		}
		function mousePik() {
		
			zero();
			self.pikinez.gotoAndStop(1);
			self.pikinez.cursor = "pointer";
		}
		function mouseRoee() {
		
			zero();
			self.building.gotoAndStop(2);
			self.old.gotoAndStop(2);
			self.roee.gotoAndStop(1);
			self.roee.cursor = "pointer";
		}
		function mouseYork() {
		
			zero();
			self.york.gotoAndStop(1);
			self.york.cursor = "pointer";
		}
		function mousePum() {
		
			zero();
			self.pumernian.gotoAndStop(1);
			self.pumernian.cursor = "pointer";
		}
		function mouseHusky() {
		
			zero();
			self.building.gotoAndStop(2);
			self.old.gotoAndStop(2);
			self.husky.gotoAndStop(1);
			self.husky.cursor = "pointer";
		}
		function mouseJack() {
		
			zero();
			self.old.gotoAndStop(2);
			self.jack.gotoAndStop(1);
			self.jack.cursor = "pointer";
		}
		function mouseGolden() {
		
			zero();
			self.golden.gotoAndStop(1);
			self.golden.cursor = "pointer";
		}
		function mouseLavrador() {
		
			zero();
			self.lavrador.gotoAndStop(1);
			self.lavrador.cursor = "pointer";
		}
		function mousePug() {
		
			zero();
			self.pug.gotoAndStop(1);
			self.pug.cursor = "pointer";
		}
		function mouseShizu() {
		
			zero();
			self.shizu.gotoAndStop(1);
			self.shizu.cursor = "pointer";
		}
		function mousePit() {
		
			zero();
			self.building.gotoAndStop(2);
			self.family.gotoAndStop(2);
			self.old.gotoAndStop(2);
			self.pitbull.gotoAndStop(1);
			self.pitbull.cursor = "pointer";
		}
		
		
		/*פונקציות**יציאה  מעבר עכבר על כלבים*/
		
		
		function outRot() {
		
			zero();
		}
		function outPik() {
		
			zero();
		}
		function outRoee() {
		
			zero();
		}
		function outYork() {
		
			zero();
		}
		function outPum() {
		
			zero();
		}
		function outHusky() {
		
			zero();
		}
		function outJack() {
		
			zero();
		}
		function outGolden() {
		
			zero();
		}
		function outLavrador() {
		
			zero();
		}
		function outPug() {
		
			zero();
		}
		function outShizu() {
		
			zero();
		}
		function outPit() {
		
			zero();
		}
		
		/*  פונקציות מעבר עכבר על מאפיין*/
		
		function mouseDogB() {
		
			zero();
			self.rot.gotoAndStop(2);
			self.pikinez.gotoAndStop(1);
			self.roee.gotoAndStop(2);
			self.york.gotoAndStop(1);
			self.pumernian.gotoAndStop(1);
			self.husky.gotoAndStop(2);
			self.jack.gotoAndStop(1);
			self.golden.gotoAndStop(1);
			self.lavrador.gotoAndStop(1);
			self.pug.gotoAndStop(1);
			self.shizu.gotoAndStop(1);
			self.pitbull.gotoAndStop(2);
			self.building.gotoAndStop(1);
			self.building.cursor = "pointer";
		}
		function mouseDogG() {
		
			zero();
			self.rot.gotoAndStop(1);
			self.pikinez.gotoAndStop(1);
			self.roee.gotoAndStop(1);
			self.york.gotoAndStop(1);
			self.pumernian.gotoAndStop(1);
			self.husky.gotoAndStop(1);
			self.jack.gotoAndStop(1);
			self.golden.gotoAndStop(1);
			self.lavrador.gotoAndStop(1);
			self.pug.gotoAndStop(1);
			self.shizu.gotoAndStop(1);
			self.pitbull.gotoAndStop(1);
			self.garden.gotoAndStop(1);
			self.garden.cursor = "pointer";
		}
		function mouseDogS() {
		
			zero();
			self.rot.gotoAndStop(1);
			self.pikinez.gotoAndStop(1);
			self.roee.gotoAndStop(1);
			self.york.gotoAndStop(1);
			self.pumernian.gotoAndStop(1);
			self.husky.gotoAndStop(1);
			self.jack.gotoAndStop(1);
			self.golden.gotoAndStop(1);
			self.lavrador.gotoAndStop(1);
			self.pug.gotoAndStop(1);
			self.shizu.gotoAndStop(1);
			self.pitbull.gotoAndStop(1);
			self.single.gotoAndStop(1);
			self.single.cursor = "pointer";
		}
		function mouseDogF() {
		
			zero();
			self.rot.gotoAndStop(2);
			self.pikinez.gotoAndStop(1);
			self.roee.gotoAndStop(1);
			self.york.gotoAndStop(1);
			self.pumernian.gotoAndStop(1);
			self.husky.gotoAndStop(1);
			self.jack.gotoAndStop(1);
			self.golden.gotoAndStop(1);
			self.lavrador.gotoAndStop(1);
			self.pug.gotoAndStop(1);
			self.shizu.gotoAndStop(1);
			self.pitbull.gotoAndStop(2);
			self.family.gotoAndStop(1);
			self.family.cursor = "pointer";
		}
		function mouseDogO() {
		
			zero();
			self.rot.gotoAndStop(2);
			self.pikinez.gotoAndStop(1);
			self.roee.gotoAndStop(2);
			self.york.gotoAndStop(1);
			self.pumernian.gotoAndStop(1);
			self.husky.gotoAndStop(2);
			self.jack.gotoAndStop(2);
			self.golden.gotoAndStop(1);
			self.lavrador.gotoAndStop(1);
			self.pug.gotoAndStop(1);
			self.shizu.gotoAndStop(1);
			self.pitbull.gotoAndStop(2);
			self.old.gotoAndStop(1);
			self.old.cursor = "pointer";
		}
		
		function outDogB() {
		
			zero();
		}
		
		function outDogG() {
		
			zero();
		}
		
		function outDogS() {
		
			zero();
		}
		
		function outDogF() {
		
			zero();
		}
		
		function outDogO() {
		
			zero();
		}
		
		/*הגדרת כפתור יציאה X*/
		
		function exitInfo() {
		
			self.info.visible = false;
			zero();	
			onA();
		}
		
		
		/*פתיחת תיבת טקסט בלחיצה*/
		
		
		function clickGolden() {
			zeroA();
			self.info.gotoAndStop(0);
			self.info.visible = true;
		
		}
		
		function clickHusky() {
			zeroA();
			self.info.gotoAndStop(1);
			self.info.visible = true;
		}
		
		function clickJack() {
			zeroA();
			self.info.gotoAndStop(2);
			self.info.visible = true;
		}
		
		function clickLavrador() {
			zeroA();
			self.info.gotoAndStop(3);
			self.info.visible = true;
		}
		
		function clickPik() {
			zeroA();
			self.info.gotoAndStop(4);
			self.info.visible = true;
		}
		
		function clickPit() {
			zeroA();
			self.info.gotoAndStop(5);
			self.info.visible = true;
		}
		
		function clickPug() {
			zeroA();
			self.info.gotoAndStop(6);
			self.info.visible = true;
		}
		
		function clickPum() {
			zeroA();
			self.info.gotoAndStop(7);
			self.info.visible = true;
		}
		
		function clickRoee() {
			zeroA();
			self.info.gotoAndStop(8);
			self.info.visible = true;
		}
		
		function clickRot() {
			zeroA();
			self.info.gotoAndStop(9);
			self.info.visible = true;
		}
		
		function clickShizu() {
			zeroA();
			self.info.gotoAndStop(10);
			self.info.visible = true;
		}
		
		function clickYork() {
			zeroA();
			self.info.gotoAndStop(11);
			self.info.visible = true;
		}
		
		/*
		פונקציה לפתיחת אודות*/
		
		function clickAbout() {
			self.info.gotoAndStop(12);
			self.info.visible = true;
			zeroA();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// moreINFO
	this.info = new lib.INFOMC();
	this.info.name = "info";
	this.info.setTransform(641.1,366.25,1,1,0,0,0,641.1,514.8);

	this.timeline.addTween(cjs.Tween.get(this.info).wait(1));

	// about
	this.about = new lib.odot();
	this.about.name = "about";
	this.about.setTransform(1032.55,618.4,0.3869,0.3869);
	new cjs.ButtonHelper(this.about, 0, 1, 2, false, new lib.odot(), 3);

	this.timeline.addTween(cjs.Tween.get(this.about).wait(1));

	// directions
	this.H2 = new cjs.Text("עברו עם העכבר על הרכב המשפחה וסוג הבית או סוג הכלב להצגת ההתאמה\n\nלבחירת מאפיין או ביטול הבחירה לחצו עליו\n\nלחצו על סוג הכלב לקבלת מידע נוסף\n\nלהתאמה מירבית יש ללחוץ על סוג הבית ולעבור עם העכבר על הרכב המשפחה", "18px 'Rubik Medium'");
	this.H2.name = "H2";
	this.H2.textAlign = "right";
	this.H2.lineHeight = 25;
	this.H2.lineWidth = 350;
	this.H2.parent = this;
	this.H2.setTransform(1260.55,44.35);

	this.H1 = new cjs.Text("?איזה כלב מתאים לך", "normal 700 30px 'Rubik'");
	this.H1.name = "H1";
	this.H1.textAlign = "right";
	this.H1.lineHeight = 39;
	this.H1.lineWidth = 292;
	this.H1.parent = this;
	this.H1.setTransform(1260.55,6.7);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.H1);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.H1},{t:this.H2}]}).wait(1));

	// meafyenim
	this.old = new lib.old_1();
	this.old.name = "old";
	this.old.setTransform(935.5,510.4,1,1,0,0,0,51,77);

	this.family = new lib.family_1();
	this.family.name = "family";
	this.family.setTransform(1094.7,545.25,1,1,0,0,0,50.1,73.1);

	this.garden = new lib.garden();
	this.garden.name = "garden";
	this.garden.setTransform(1022.75,389.85,1,1,0,0,0,220.1,302);

	this.building = new lib.building_1();
	this.building.name = "building";
	this.building.setTransform(1165.4,368.85,1,1,0,0,0,158.1,324);

	this.single = new lib.single_1();
	this.single.name = "single";
	this.single.setTransform(1211.55,540.65,1,1,0,0,0,304.1,259.9);

	this.H2_1 = new cjs.Text("סוג הבית", "bold 20px 'Rubik'", "#A66832");
	this.H2_1.name = "H2_1";
	this.H2_1.textAlign = "center";
	this.H2_1.lineHeight = 27;
	this.H2_1.lineWidth = 135;
	this.H2_1.parent = this;
	this.H2_1.setTransform(1091.9,273.7);

	this.H2_2 = new cjs.Text("הרכב המשפחה", "bold 20px 'Rubik'", "#A66832");
	this.H2_2.name = "H2_2";
	this.H2_2.textAlign = "center";
	this.H2_2.lineHeight = 27;
	this.H2_2.lineWidth = 135;
	this.H2_2.parent = this;
	this.H2_2.setTransform(1091.9,446);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AAAg6IAAB1");
	this.shape.setTransform(1279.8,599.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.H2_2},{t:this.H2_1},{t:this.single},{t:this.building},{t:this.garden},{t:this.family},{t:this.old}]}).wait(1));

	// rotvailer
	this.rot = new lib.rotvailer_1();
	this.rot.name = "rot";
	this.rot.setTransform(126.45,123.65,0.3035,0.3035,0,0,0,120.6,-8.4);

	this.timeline.addTween(cjs.Tween.get(this.rot).wait(1));

	// pikinez
	this.pikinez = new lib.pekinez_1();
	this.pikinez.name = "pikinez";
	this.pikinez.setTransform(332.8,123.7,0.3035,0.3035,0,0,0,120.8,-8.2);

	this.timeline.addTween(cjs.Tween.get(this.pikinez).wait(1));

	// roee
	this.roee = new lib.roee_1();
	this.roee.name = "roee";
	this.roee.setTransform(539.15,123.7,0.3035,0.3035,0,0,0,121.1,-8.2);

	this.timeline.addTween(cjs.Tween.get(this.roee).wait(1));

	// york
	this.york = new lib.york_1();
	this.york.name = "york";
	this.york.setTransform(745.45,123.7,0.3035,0.3035,0,0,0,120.8,-8.2);

	this.timeline.addTween(cjs.Tween.get(this.york).wait(1));

	// pumernian
	this.pumernian = new lib.pumernian_1();
	this.pumernian.name = "pumernian";
	this.pumernian.setTransform(126.55,354.95,0.3035,0.3035,0,0,0,120.9,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.pumernian).wait(1));

	// husky
	this.husky = new lib.husky_1();
	this.husky.name = "husky";
	this.husky.setTransform(332.85,354.9,0.3035,0.3035,0,0,0,120.9,-8.2);

	this.timeline.addTween(cjs.Tween.get(this.husky).wait(1));

	// jack
	this.jack = new lib.jack_1();
	this.jack.name = "jack";
	this.jack.setTransform(539.15,354.9,0.3035,0.3035,0,0,0,120.6,-8.2);

	this.timeline.addTween(cjs.Tween.get(this.jack).wait(1));

	// golden
	this.golden = new lib.golden_1();
	this.golden.name = "golden";
	this.golden.setTransform(745.45,354.85,0.3035,0.3035,0,0,0,120.8,-8.4);

	this.timeline.addTween(cjs.Tween.get(this.golden).wait(1));

	// lavrador
	this.lavrador = new lib.lavrador_1();
	this.lavrador.name = "lavrador";
	this.lavrador.setTransform(126.45,586.05,0.3035,0.3035,0,0,0,120.6,-8.2);

	this.timeline.addTween(cjs.Tween.get(this.lavrador).wait(1));

	// pug
	this.pug = new lib.pug_1();
	this.pug.name = "pug";
	this.pug.setTransform(332.75,585.95,0.3035,0.3035,0,0,0,120.6,-8.6);

	this.timeline.addTween(cjs.Tween.get(this.pug).wait(1));

	// shitzu
	this.shizu = new lib.shitzu_1();
	this.shizu.name = "shizu";
	this.shizu.setTransform(539.2,586.05,0.3035,0.3035,0,0,0,120.8,-8.2);

	this.timeline.addTween(cjs.Tween.get(this.shizu).wait(1));

	// pitbul
	this.pitbull = new lib.pitbull_1();
	this.pitbull.name = "pitbull";
	this.pitbull.setTransform(745.4,586,0.3035,0.3035,0,0,0,120.6,-8.4);

	this.timeline.addTween(cjs.Tween.get(this.pitbull).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,211.5,642.2,669.5);
// library properties:
lib.properties = {
	id: 'B7DD6F2E0187E7428997FB268BD04FB0',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Dogs_YYS_atlas_1.png?1633363481291", id:"Dogs_YYS_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B7DD6F2E0187E7428997FB268BD04FB0'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;