class Card{
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }
}
// effect
class Effect extends Card{
    constructor(name,cost,magnitude,text,stat){
        super(name,cost)
        this.magnitude=magnitude;
        this.text=text;
        this.stat=stat;

    }
    play( target ) {
            if( target instanceof Unit ) {
                // implement card text here
        if(this.stat=="resilience"){
            if(this.name=="Hard Algorithem"){
                target.res+=this.magnitude;
            }
            else if(this.name=="Unhandled Promise Rejection"){
                target.res-=this.magnitude;
            }
            else if(this.stat=="power"){
                target.power+=this.magnitude;
            }
        }
            } else {
                throw new Error( "Target must be a unit!" );
            }
        }
}
class Unit extends Card{
    constructor(name,cost,power,res)
    {
        super(name,cost)
        this.res=res;
        this.power=power;
    }
    attack(target){
    target.res-=this.power;
    console.log(`this attack has resileance of  ${this.res}`);
    }
    
}
const RedBeltNinja=new Unit("Red Belt Ninja",3,3,4);
const hardAlgorithem=new Effect("Hard Algorithm",2,"increase target's resilience by 3","resilience",3);
hardAlgorithem.play(RedBeltNinja);

const blackBeltNinja=new Unit("Black Belt Ninja",4,5,4);
const UnhandledPromiseRejection=new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resilience",-2);
UnhandledPromiseRejection.play(RedBeltNinja);

const PairProgramming=new Effect("Pair Programming",3,"increase target's resilience by 2","power",2);
UnhandledPromiseRejection.play(RedBeltNinja);
 

    RedBeltNinja.attack(blackBeltNinja);
    blackBeltNinja.attack(RedBeltNinja);