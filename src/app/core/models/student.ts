export class Student {
  id: number;
  name: string;
  lastName: string;
  age: number;
  email: string;
  birthdate: Date;
  constructor(/*id: number, name: string, lastName: string, age: number*/){
    this.id = 0;
    this.name = '';
    this.lastName = '';
    this.age = 0;
    this.email = '';
    this.birthdate = new Date();
  }
}
