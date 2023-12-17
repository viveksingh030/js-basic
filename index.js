//Factory Function

//oops 
function createCircle(radius){
    return {
        radius,
        draw:function draw(){
            console.log('draw');
        }
    }
}

const circle=createCircle(1);
//circle.draw();

function Circle(radius){
    this.radius=radius;
    this.draw=function draw(){
        console.log('draw '+radius+' circle');
    }
}

const anotherCircle=new Circle(1);
anotherCircle.draw();

const Circle1=new Function('radius','name',` this.radius=radius;
this.draw=function draw(){
    console.log(name+' radius is '+radius);
}`);

const thirdCircle=new Circle1(2,"vivek's circle");
thirdCircle.draw();


let x={
    x:2,
    draw:function draw(){
        console.log('x is '+this.x);
    }
}
x.draw();
console.log("experimenting call method");

//apply, call and bind
let y={
    firstName:"vivek",
    lastName:"singh"
}

let z={
    firstName:"vinay",
    lastName:"singh"
}

let d={
    firstName:"santosh",
    lastName:"singh"
}
let printName=function printFullName(hometown ,state){
    console.log(this.firstName+" "+this.lastName+" from "+hometown+","+state);
}
printName.call(y,"siwan","bihar");
printName.apply(z,["hazaribagh","jharkhand"]);
let fullName=printName.bind(d,"varanasi","up");
fullName();

//
let c=new Circle(6);
//c raidus will be changed to 7 now
Circle.call(c,7);
c.draw();




//oops

function NewCircle(radius){
    this.radius=radius;

    let defaultLocation={x:0,y:0};

    let computeOptimumLocation=function(factor){

    }

    this.draw=function(){
        computeOptimumLocation(0.1);
        console.log('draw '+defaultLocation.x+" ,"+defaultLocation.y);
    };
    Object.defineProperty(this,"defaultLoc",
    {get: function(){
        return defaultLocation;
    },
    set:function(value){
    if(!value.x||!value.y){
        throw new Error('Invalid value'+JSON.stringify(value));
    }
    this.defaultLocation=value;
}});
}

const circleNew=new NewCircle(60);
circleNew.draw();
circleNew.defaultLoc={x:1,y:6};
let loc=circleNew.defaultLoc;
console.log('loc='+loc.x+" ,"+loc.y);


let arr=[]
arr.push(1);
arr.push(2)
for( let key in arr){
    console.log(arr[key])
}


function Stopwatch(){
    let state='OFF';
    let startedTime;
    let endTime;
    this.start=function(){
        if(state=='ON'){
            throw new Error("already started");
        }
        state='ON';
        startedTime=new Date().getTime();
    }

    this.stop=function(){
        if(state=='OFF'){
            throw new Error("already stopped");
        }
        state='OFF';
        endTime=new Date().getTime();
        this.duration=(endTime-startedTime);
    }

    this.reset=function(){
        state='OFF';
        startedTime=undefined;
        endTime=undefined;
        this.duration=0;
    }

    let stopWatchDuration=function(){
        if(state==undefined){
           return 0;
        }
        if(state=='ON'){
            endTime=new Date().getTime();
        }
        return (endTime-startedTime)/1000;
    }
    Object.defineProperty(this,"duration",{
        get:function(){
            return stopWatchDuration();
        }
    });
}







