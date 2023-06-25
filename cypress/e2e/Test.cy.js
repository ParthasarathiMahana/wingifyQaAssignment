import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";

const loginPage = new LoginPage();
const homePage = new HomePage();

describe('AllTestCases',()=>{

    beforeEach(()=>{
        cy.visit("https://sakshingp.github.io/assignment/login.html");
    })

    it('loginTestWithEmptyUserAndPassword',()=>{
        // testing for login without any credentials
        loginPage.loginWithEmptyUserAndPassword();
    })

    it('loginTestWithoutUser',()=>{
        // testing for login without user name
        loginPage.loginWithoutUser('123');
    })
    
    it('loginTestWithoutPassword',()=>{
        // testing for login without password
        loginPage.loginWithoutPassword('partha');
    })
    
    it('ValidLoginTest',()=>{
        // testing for login with valid credentials 
        loginPage.enterUsername('PSM');
        loginPage.enterPassword('123');
        loginPage.clickLogin();
    })
    it('testingHomePageSortFunction',()=>{
        // testing for login with valid credentials 
        loginPage.enterUsername('PSM');
        loginPage.enterPassword('123');
        loginPage.clickLogin();
    
        // clicking on amount button to check shorting function worked or not
        homePage.clickAmountAndCheckSorting();
    })
})