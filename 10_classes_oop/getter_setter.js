class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}madini`
    }

    set password(value){
        this._password = value
    }
}

const madini = new User("m@dini.ai", "abc")
console.log(madini.email);