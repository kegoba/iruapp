class Auth {
    constructor() {
        this.isLogin = false;
    }
    login(cb) {
        cb()
        this.isLogin = true;
        //console.log("login active")

    }
    logOut(cb) {
        this.isLogin = false;
        //console.log("login inactive")
        cb()
    }
    getAuth() {
        return this.isLogin

    }
}
export default new Auth();


