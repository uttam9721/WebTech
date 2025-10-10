
// class Car{
//     brand;
//     model;

//     display(){
//         console.log(`Car brand =${this.brand} and model = ${this.model}`);
        
//     }
// }
// // creating obj 
// const c=new Car();
// c.brand='Mahindra';
// c.model='Scorpio';
// c.display();

// const c2=new Car();
// c2.brand="bmw";
// c2.model='m'
// c2.display();



// Constructor    ========================

class Car{
    brand;
    model;
    constructor(brand,model){
        this.brand=brand;
        this.model=model;
    }
    display(){
        console.log(`car brand = ${this.brand} and model ${this.model}`);  
    }
}

const c = new Car('Toyota ,"Fortuner');
c.display();