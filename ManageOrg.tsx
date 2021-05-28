///<reference types="cypress" />
export class ManageOrg{
   
    //function
    
    tabs(){
    //  cy.get('.ptv-main').contains('DASHBOARD')
      cy.get('.padd-left8').should("have.class","page-title padd-left8")
      cy.contains('DashBoard')
        //org-overview Manage button
        cy.get(':nth-child(1) > .MuiPaper-root > :nth-child(2) > .MuiGrid-root > .MuiButtonBase-root')
        .wait(3000)
        .click()
        
        //Click the Pirates title
        cy.get('.org-title')
        .contains("Pirates")
        .click()
        .wait(3000)

        //Tabs in Manage Organisation

        cy.get('#simple-tab-0').click().wait(4000)
          .contains('Sponsor')
        cy.get('#simple-tab-1').click().wait(2000)
          .contains('Promotions')
        cy.get('#simple-tab-2').click().wait(4000)
          .contains('Merchandise')
        cy.get('#simple-tab-3').click().wait(4000)
          .contains('Events')
        cy.get('#simple-tab-4').click().wait(4000)
          .contains('Point Holders')
          cy.get('#simple-tab-5').click().wait(3000)
          .contains('Org Info')
    }
    sponsor()
    {
        //org-overview Manage button
        cy.get(':nth-child(1) > .MuiPaper-root > :nth-child(2) > .MuiGrid-root > .MuiButtonBase-root',{ timeout: 20000 })
          .wait(5000)
          .click() //org-overview
        cy.contains("MANAGE ORGANIZATIONS")
          .should('have.class',"page-title")
        
        //Click the Pirates title
        cy.get('.org-title')
          .click()
          .wait(2000)

        //Go to Sponsor Tab
        cy.get('#simple-tab-0')
          .click()
          .wait(2000)
        
        //Add Sponsor
        cy.get('.select-with-label > .btn').click()

        //Form in add Sponsor
        cy.get('.MuiGrid-grid-sm-4 > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
          .should('be.visible')
          .type('merchandide')
        cy.get('.MuiGrid-grid-sm-4 > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
          .should('be.visible')
          .type('88')
        cy.get('.borderL > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
          .should('be.visible')
          .type('prince')
        cy.get('.borderL > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
          .type('sdkfn@gmail.com')
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
          .should('be.visible')
          .type('995946258')
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
          .type('London')
        cy.get('.MuiDialogActions-root > .btn-primary').click()
        cy.get('.confim-model-container > .MuiPaper-root')
          .contains('Are you sure with the Point Requested value?')

        //Confirm Button
        
        // cy.get('.confirmation-sec > .MuiDialogActions-root > .btn-primary')
        //    .conta ins('CONFIRM')
        //    .should('have.class',"MuiButton-label")
        //    .click()

       
    }

 

    
}
