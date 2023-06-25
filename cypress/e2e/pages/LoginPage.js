export class LoginPage{

    userName_textbox = '#username';
    password_textbox = '#password';
    login_button = '#log-in';
    warning_div = '.alert-warning';

    enterUsername(userName){
        cy.get(this.userName_textbox).type(userName);
    }

    enterPassword(password){
        cy.get(this.password_textbox).type(password);
    }

    clickLogin(){
        cy.get(this.login_button).click();
    }

    loginWithEmptyUserAndPassword(){
        cy.get(this.login_button).click();
        cy.get(this.warning_div).should('have.text','Both Username and Password must be present ');
        cy.log("It is showing the warning, if we try to login without userId and Password");
    }

    loginWithoutUser(password){
        cy.get(this.password_textbox).type(password);
        cy.get(this.login_button).click();
        cy.get(this.warning_div).should('have.text','Username must be present');
        cy.log("It is showing the warning, if we try to login without userId");
    }

    loginWithoutPassword(userName){
        cy.get(this.userName_textbox).type(userName);
        cy.get(this.login_button).click();
        cy.get(this.warning_div).should('have.text','Password must be present');
        cy.log("It is showing the warning, if we try to login without Password");
    }
}