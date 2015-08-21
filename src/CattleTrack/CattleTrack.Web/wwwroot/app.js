export class Welcome{
  heading = 'Welcome to the Aurelia Navigation App!';
  firstName = 'Nate';
  lastName = 'Palmer';

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  submit(){
    alert(`Welcome, ${this.fullName}!`);
  }
}
