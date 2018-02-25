var fullname = function(){
}

fullname.prototype.setName = function(first_name,last_name){
     this.first_name = first_name;
     this.last_name = last_name
}


fullname.prototype.getName = function(){
    return this.first_name + this.last_name
}

var name1 = new fullname();
var name2 = new fullname();

name1.setName('ravi',' jaisawal')
name2.setName('vikas',' jaisawal')

console.log(name1.getName());
console.log(name2.getName());