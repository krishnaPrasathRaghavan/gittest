///<reference types="cypress" />
export class Dashboard{

    navigate(){
     
        // Testing Authentication Login Page
        // goes to shadow DOM       
        cy.visit('http://localhost:3000/')
         cy.get('amplify-authenticator')
           .shadow()
           .get('amplify-sign-in')
           .shadow()
           .find('amplify-form-section')
           .find('amplify-auth-fields')
           .shadow()
           .as('amplifyAuthFields');
     
           cy.get('amplify-authenticator')
           .shadow()
           .get('amplify-sign-in')
           .shadow()
           .find('amplify-form-section')
           .find('amplify-button')
           .shadow()
           .as('amplifyButton');
     
     
         //entering username

         cy.get('@amplifyAuthFields')
           .find('amplify-username-field')
           .shadow()
           .find('amplify-form-field')
           .shadow()
           .find('input#username')
           .type('admin@pointsville.com');
         
           //Testing Password
         cy.get('@amplifyAuthFields')
           .find('amplify-password-field')
           .shadow()
           .find('amplify-form-field')
           .shadow()
           .find('input#password')
           .type('Password@123');
   
           //Login Button        
         cy.get('@amplifyButton')
           .find('button')
           .click({force: true})
           .wait(10000);
   
   
}


    sidebar(){

        //chech the side bar navigation with the correct page
        cy.get('.logo')     //logo
        
        //First Icon contians DASHBOARD page
        cy.get('.active > div')
          .click()
          .wait(2000)
        cy.get('.ptv-main')
        cy.get('.details-page')
          .contains('DashBoard',{ timeout: 5000 })
          .wait(2000)
       
         //Second Icon contains the MANAGE ORGANIZATIONS page
        cy.get('.manage-club-menu-item > a > div')
          .click()
        cy.get('.detail-page')
          .contains('MANAGE ORGANIZATIONS')
          .wait(2000)
 
        //Third Icon contains the MANAGE MEMBERS page  
        cy.get('.manage-member-menu-item > a > div')
          .click()
        cy.get('.ptv-main')
         .contains('MANAGE MEMBERS')
         .wait(2000)
        
        ////Fourth Icon contains the TTRANSACTIONS page
        cy.get('.refresh-menu-item > a > div')
        .click()
        cy.get('.list-page').contains("TRANSACTIONS")
        .wait(2000)
         
        
    }

    DashboardGrid(){
        //Back to Dashboard page
        cy.get('.active > div')
          .click()
          .wait(2000)

        //check MANAGE ORG grid
        cy.get('.overview-wrapper > :nth-child(1) > .MuiPaper-root')
          .contains('ORG OVERVIEW')
        //   .find('.MuiButton-label')
        //   .contains('MANAGE')
        
        //check points grid
        cy.get(':nth-child(1) > :nth-child(2) > .padd-10')
          .contains("ORG POINTS OVERVIEW")

        //checkpromotion grid
        cy.get(':nth-child(3) > .padd-10')
          .contains('PROMOTIONS OVERVIEW')
        
        //check transaction grid
        cy.get('.MuiGrid-grid-sm-7 > .padd-10')
          .contains('TRANSACTIONS OVERVIEW')

        
    }
}






















// describe('My Authenticator Test', () => {
//     it('should let me type in the username field', () => {
//       cy.visit('http://pv-7springs-ui-alb-beta-1603574798.us-east-1.elb.amazonaws.com/');
  
//       cy.get('amplify-authenticator')
//         .shadow()
//         .get('amplify-sign-in')
//         .shadow()
//         .find('amplify-form-section')
//         .find('amplify-auth-fields')
//         .shadow()
//         .as('amplifyAuthFields');
  
//         cy.get('amplify-authenticator')
//         .shadow()
//         .get('amplify-sign-in')
//         .shadow()
//         .find('amplify-form-section')
//         .find('amplify-button')
//         .shadow()
//         .as('amplifyButton');
  
  
//       cy.get('@amplifyAuthFields')
//         .find('amplify-username-field')
//         .shadow()
//         .find('amplify-form-field')
//         .shadow()
//         .find('input#username')
//         .type('admin@pointsville.com');
  
//       cy.get('@amplifyAuthFields')
//         .find('amplify-password-field')
//         .shadow()
//         .find('amplify-form-field')
//         .shadow()
//         .find('input#password')
//         .type('Admin123$');
  
//       cy.get('@amplifyButton')
//         .find('button')
//         .click({force: true});

        //cy.get('.padd-left8')
        //cy.visit("https://pv-7springs-ui-alb-beta-1603574798.us-east-1.elb.amazonaws.com/manageclubs")
        // cy.get(':nth-child(1) > .MuiPaper-root > .MuiGrid-spacing-xs-2 > .overview-chart-panel > .overview-title').should('eq','org overview ')

       // cy.get('.padd-left8')
         //  cy.get('.overview-title')
    
    
//     });
//   });



//   describe('MainPage',function(){
//     it('verify the newtourdemo',function(){
//         cy.get('.padd-left8', { timeout: 20000 })
//         cy.get(':nth-child(1) > .MuiPaper-root > :nth-child(2) > .MuiGrid-root > .MuiButtonBase-root').click()


            //cy.visit("https://pv-7springs-ui-alb-beta-1603574798.us-east-1.elb.amazonaws.com/manageclubs")
        //cy.get(':nth-child(1) > .MuiPaper-root > .MuiGrid-spacing-xs-2 > .overview-chart-panel > .overview-title').should('eq','org overview ')
        // cy.visit("http://demo.guru99.com/test/newtours/") //visit url
        // cy.url().should('include','newtours')  //verify if newtour is present
        // cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("testing")
        // cy.get('input[name=password]').should('be.visible').should('be.enabled').type("testing")
        // cy.get('input[name=submit]').should('be.visible').click()  //sign-in

//         cy.get(':nth-child(2) > [width="80"] > a').click()

        //radio
        // cy.get('input[value=roundtrip]').should('be.visible').should('be.checked')
        // cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click()

        // cy.get('[name=findFlights]').should('be.visible').click()

//     })
// })
