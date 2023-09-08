const { Selector } = require("testcafe");
import LoginPage from "../pageObjects/LoginPage";

fixture`Login`.page("./");

test('Test successful login with valid credentials', async (t) => {
     LoginPage.login("alphashubham007@gmail.com", "shubhu@10267");
     await t.expect(Selector(".sr-only").innerText).eql('Home')
});

test('Test unsuccessful login attempts with invalid credentials', async (t) => {
     LoginPage.login('shubham007@gmail.com', 'shubh@10267');
    await t 
          .expect(Selector('#login-error-notify strong').innerText)
          .eql('Login Unsuccessful')
          .expect(Selector('#login-error-notify p').innerText)
          .eql('Invalid login credentials')
          
});

test('Validate that appropriate error messages are displayed for invalid login attempts', async (t) => {
     LoginPage.login('shubham007@gmail.com', 'shubh@10267');
     await t     
          .expect(Selector('#login-error-notify strong').innerText)
          .eql('Login Unsuccessful')
          .expect(Selector('#login-error-notify p').innerText)
          .eql('Invalid login credentials')
          
});

test('On successful login, validate that the user is redirected to the dashboard screen', async (t) => {
     LoginPage.login('alphashubham007@gmail.com', 'shubhu@10267');
     await t        
         .expect(Selector(".sr-only").innerText)
         .eql('Home')
});
