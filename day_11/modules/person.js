class Person{
    constructor(hname){
        this.name=hname;
    }
    canWalk(){
        return "i can walk";
    }
    sayname(){
        return this.name;
    }
};

export default Person;