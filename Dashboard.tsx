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
          // .wait(10000);
   
   
}
    routepaths(){      //TO check the froward and bavk arrow to navigate to pages
   
        // DASHBOARD PAGE
          cy.get('.ptv-main',{ timeout: 10000 })
          cy.get('.details-page')
            .contains('DashBoard',{ timeout: 5000 })
            .wait(2000)
 
        //Manage button go to  MANAGE ORGANISATION PAGE
          cy.get(':nth-child(1) > .MuiPaper-root > :nth-child(2) > .MuiGrid-root > .MuiButtonBase-root')
            .contains('Manage')  
            .click()
            .wait(3000)

        //CLUB DETAILS PAGE
          cy.get('.org-title')
            .contains("Pirates")
            .click()
            .wait(3000)
    
          //  MANAGE ORGANISATION PAGE
          cy.go('back').wait(2000)
          cy.get('.detail-page')
            .contains('MANAGE ORGANIZATIONS')
            .wait(2000)
        
    
            ///DASHBOARD PAGE
          cy.go('back').wait(2000)
          cy.get('.details-page')
            .wait(2000)
            .contains('DashBoard',{ timeout: 5000 })

          // cy.go('forward')
          //   .wait(2000)




}

    sidebar(){

          //chech the side bar navigation with the correct page
          // cy.get('.logo',{ timeout: 10000 })     //logo
          
          // //First Icon contians DASHBOARD page
          // cy.get('.active > div')
          //   .click()
          //   .wait(2000)
          // cy.get('.ptv-main')
          // cy.get('.details-page')
          //   .contains('DashBoard',{ timeout: 5000 })
          //   .wait(2000)
        
          //Second Icon contains the MANAGE ORGANIZATIONS page
          cy.get('.manage-club-menu-item > a > div')
            .click()
          cy.get('.detail-page')
            .contains('MANAGE ORGANIZATIONS')
            .wait(4000)
  
          //Third Icon contains the MANAGE MEMBERS page  
          cy.get('.manage-member-menu-item > a > div')
            .click()
          cy.get('.ptv-main')
            .contains('MANAGE MEMBERS')
            .wait(4000)
          
          ////Fourth Icon contains the TTRANSACTIONS page
          cy.get('.refresh-menu-item > a > div')
            .click()
          cy.get('.list-page').contains("TRANSACTIONS")
            .wait(6000)
    }

    DashboardGrid(){
          //Back to Dashboard page
          cy.get('.active > div')
            .click()
            .wait(2000)

            cy.get('.dashboard-menu-item > a > div',{ timeout: 10000 }).click()


            //check MANAGE ORG grid
          cy.get('.overview-wrapper > :nth-child(1) > .MuiPaper-root')
            .contains('ORG OVERVIEW')
            .wait(2000)
            //.find('.MuiButton-label')
            //.contains('MANAGE')
            
            //check points grid
          cy.get(':nth-child(1) > :nth-child(2) > .padd-10')
            .contains("ORG POINTS OVERVIEW")
            .wait(2000)

            //checkpromotion grid
          cy.get(':nth-child(3) > .padd-10')
            .contains('PROMOTIONS OVERVIEW')
            .wait(2000)
            
            //check transaction grid
          cy.get('.MuiGrid-grid-sm-7 > .padd-10')
            .contains('TRANSACTIONS OVERVIEW')
            .wait(2000)

            
        }

    transactions(){
          ////Fourth Icon contains the TTRANSACTIONS page
          cy.get('.refresh-menu-item > a > div',{timeout:10000})
            .click()
          cy.get('.list-page').contains("TRANSACTIONS")
           // .wait(2000)


          cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-12')
            .find('.MuiPaper-root.table-wrapper.padd-0.MuiPaper-elevation1.MuiPaper-rounded')
         
            cy.get('.table-container.muidata-table.trans-cust-body',{timeout:5000})
            .contains('Transaction List')

          //  cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(1)').contains('Organization')
          // .find('.MuiPaper-root.MUIDataTable-paper-6.undefined.MuiPaper-elevation4.MuiPaper-rounded',{timeout:7000})
          //.find('.MuiToolbar-root.MuiToolbar-regular.MUIDataTableToolbar-root-61.MuiToolbar-gutters')
          cy.get('table')

          //check total number of data in the table
          cy.get('table>tbody>tr>td').should('have.length','800')

          //check total number of colums in the table header
          cy.get('table>thead>tr>th').should('have.length','8')
          
          //check the particular value in a cell
          cy.get('table>tbody>tr').eq(3)  //eq(3) row
          .within(function(){
            cy.get('td').eq(4).should('contain.text','141522') //column
          })


          //display all elements in the table
            cy.get('table>tbody>tr')
              .each(function($row,index,$rows){
                cy.wrap($row).within(function(){
                  cy.get('td')
                  .each(function($celldata,index,$column){
                    cy.log($celldata.text())
                })
             })
            })

          


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
