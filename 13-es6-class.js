//Creating a class and objects

class Car{

}

const honda = new Car();
console.log(honda instanceof Car);

//constructor

class Student{

  constructor(id,name){
    this.id=id;
    this.name=name;
  }

  study(){
    console.log(`${this.name} is studying`);
  }

static doHomework(){
  console.log(`${this.name} is doing homework`);
  }


}

let s1 = new Student(1, 'Mike');
console.log(`Student25 : ${s1.id} ${s1.name}`);
s1.study();

//static variable
Student.age =20;
console.log(Student);

//static
Student.doHomework();



//Inheritance
class Animal{
  constructor(name){
    this.name=name;
  }


  eat(){
    console.log('Animal is eating');
  }
}


class Dog extends Animal{
  constructor(name,age){
    super(name);
    // this.age=4;
    this.age=age;
  }

  eat(){
    super.eat();
    console.log('Animal is eating');
  }
}


const d = new Dog('Puppy',25);
console.log(d);
console.log(d.eat());//undefined
