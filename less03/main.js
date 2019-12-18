function Person (name,registered,data) {
  this.name = name,
  this.registered = registered,
  this.data = data
    
  this.getInfo = function userInfo(){
    if(this.registered === true){
      console.log('Дата регистрации ' + this.data); 
    }
    else{
      console.log('Незарегистрированный пользователь ' + this.name)
    }
  }
}

var person1 = new Person('Vanya',true,'11.12.19');
var person2 = new Person('Denis',false,'11.10.15');