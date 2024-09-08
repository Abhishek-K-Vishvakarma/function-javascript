function FunName(){
     
     this.item = (name, title, age, city)=>{
          this.name = name;
          this.title = title;
          this.age  = age;
          this.city = city;   
     }
     
     this.data = function(){
          console.log(this.name);
          console.log(this.title);
          console.log(this.age);
          console.log(this.city);
     };
};

let list = new FunName();
list.item('Abhishek', 'Vishvakarma', 23, 'Varanasi');
list.data();

// With arrow function >>>>>>>>>>>>>>>>>>>>

function FunName_name() {

     this.item_data = (name, title, age, city) => {
          this.name = name;
          this.title = title;
          this.age = age;
          this.city = city;
     }

     this.data_item = () =>  {
          console.log(this.name);
          console.log(this.title);
          console.log(this.age);
          console.log(this.city);
     };
};

let list_data = new FunName_name();
list_data.item_data('Abhi', 'Vishvakarma', 21, 'Varanasi');
list_data.data_item();


//  Second method of Prototype >>>>>>>>>>>>

function Funname(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;

        Funname.prototype.getFullData = function(){
          return this.firstName + " " + this.lastName;
        }
}

let all_list_of_data = new Funname('Peter', 'Parker');

console.log(all_list_of_data.getFullData());
