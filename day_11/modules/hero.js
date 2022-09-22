import Person from "./person.js";

class Hero extends Person{
    title="default title";
    firstname="default firstname";
    lastname="default lastname";
    #mission="mission completed";
    static version=909;
    constructor(htitle,hfname,hlname,hname){
        super(hname);
        this.title=htitle;
        this.firstname=hfname;
        this.lastname=hlname;
    }
    fullname(){
        return this.firstname+" "+this.lastname;
    }
    static saypower(){
        return 9;
    }
    get mission(){
        return this.#mission;
    }
    set mission(nmission){
        this.#mission=nmission;
    }
};

export default Hero;