import { Selector, t } from "testcafe";

class LoginPage {
    constructor() {
        this.usernameInput = Selector("#username");
        this.passwordInput = Selector("#password");
        this.loginButton = Selector("#login");
    }

    async login(username, password){
    await t 
        .typeText(this.usernameInput, username)
        .typeText(this.passwordInput, password)
        .click(this.loginButton)
    }
}
export default new LoginPage();