class Detail{
    constructor(id,name,phone,email,password){
        this.id=id;
        this.name=name;
        this.phone=phone;
        this.email=email;
        this.password=password;
    }
}
let ans = new Detail(1,"uttam",9721,"uttammaurya377@gmail.com",123)
console.log(ans);
console.log(ans["name"]);









   function Car(id,name,phone,email,engine,color,){
        this.id=id;
        this.name=name;
        this.phone=phone;
        this.email=email;
        this.engine=engine;
        this.color=color;
        // this.password=password;
    }
let val = new Car(1,"Neon8",9721,"uttammaurya377@gmail.com","mahindra","white")
console.log(val);
console.log(val["name"]);





