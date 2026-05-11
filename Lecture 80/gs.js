class name{
    constructor(name){
        this.name = name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if(value.length < 4){
            console.log("Name is too short ....")
            return;
        }
        return this._name = value;
    }
}
 let user = new name("zain");

 console.log(user.name);
 user = new name("");
