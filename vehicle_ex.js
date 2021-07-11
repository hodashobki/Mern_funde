class Vehicle{
    constructor(manufactore,color,model){
        this.mile=0;
        this.manufactore=manufactore;
        this.color=color;
        this.model=model;
    }
    drive(){
        this.mile+=10;
        console.log(`you drove your ${this.constructor.name} about ${this.mile}`);
        console.log("you drove your "+ this.constructor.name +" about "+this.mile);
    }
parentfunction(){
    return "What do you think?"
}

}
const car =new Vehicle("mm","red","BMW");
car.drive();
console.log(car.mile);

// child class
class M5 extends Vehicle{
    constructor(color){
        super("mm",color,"BMW");
    }
    childfunction(){
        const message=super.parentfunction();
        console.log(message);
    }
}
const child=new M5("blue");
child.childfunction();