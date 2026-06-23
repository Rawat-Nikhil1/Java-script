function setUserName(username){
    this.username = username
    console.log("called");
    
}

function createUserName(username,email,password){
    setUserName.call(this,username)


    this.email = email
    this.password = password

}

const a = new createUserName("Nik","nik@google.com","123")
console.log(a);
