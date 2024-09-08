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


