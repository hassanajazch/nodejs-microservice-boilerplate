
export default class User {
    constructor(id, name, email) {
        this.id = id;
        this.nanme = name;
        this.email = email;
    }

    static createUserFromDb(userObj) {
        return new User(userObj.id, userObj.name, userObj.email);
    }
}
