///<reference types="cypress" />
export class Dashboard{
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
       
         //Second Icon contains the MANAGE ORGANIZATIONS page
        cy.get('.manage-club-menu-item > a > div')
          .click()
        cy.get('.detail-page')
          .contains('MANAGE ORGANIZATIONS')
 
        //Third Icon contains the MANAGE MEMBERS page  
        cy.get('.manage-member-menu-item > a > div')
          .click()
        cy.get('.ptv-main')
         .contains('MANAGE MEMBERS')
        
        ////Fourth Icon contains the TTRANSACTIONS page
        cy.get('.refresh-menu-item > a > div')
        .click()
        cy.get('.list-page').contains("TRANSACTIONS")
         
        //Back to Dashboard page
        cy.get('.active > div')
          .click()
          .wait(2000)
    }

    MainPageButtons(){

    }
}
