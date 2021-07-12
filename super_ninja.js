class Ninja{
    constructor(name,health){
        this.name=name;
        this.health=health;
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log("This "+this.constructor.name +"'s name is "+ this.name);
    }
    showStats(){
        console.log("The "+this.constructor.name +"'s "+this.name+" has strength of "+this.strength+" and has the speed of "+this.speed);
    }
    drinkSake(){
        this.health+=10;
        console.log("the health of "+this.constructor.name+" is "+this.health);
    }
}
const ninja=new Ninja("sami",100);
ninja.sayName();
ninja.showStats();
ninja.drinkSake();
// Sensei Class
class Sensei extends Ninja{
    constructor(name,health,speed,strength){
        super(name)
        this.health=200;
        this.speed=10;
        this.strength=10;
        this.wisdom=10;
    }
    speakWisdom(){
        const message=super.drinkSake();
        console.log(message);
    }
}
const sensei=new Sensei("Ahmad");
sensei.speakWisdom();
sensei.showStats();