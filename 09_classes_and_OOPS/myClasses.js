class User {
    constructor(username , email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc` 
    }
    changeUserName(){
        return  `${this.username}.toUpperCase()}`
    }
}

const a = new User("Nikhil","nik@gmail.com", "123456")
console.log(a.encryptPassword());
console.log(a.changeUserName());
console.log(a.email);
