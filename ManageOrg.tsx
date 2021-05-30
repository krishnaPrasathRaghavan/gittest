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

                   //ADD ORGANISATION


    addorg(){
     //org-overview Manage button
     cy.get(':nth-child(1) > .MuiPaper-root > :nth-child(2) > .MuiGrid-root > .MuiButtonBase-root')
     .wait(1000)
     .click()

     //ADD Org button
      cy.get('.btn.btn-primary.add-btn')
      .find('.btn-caption')
        .contains('Add Org')
      .click()

      //check the Heading if the form
      cy.get('.MuiPaper-root.MuiDialog-paper.MuiDialog-paperScrollPaper.MuiDialog-paperWidthSm.MuiPaper-elevation24.MuiPaper-rounded')
         .find('.MuiTypography-root.MuiTypography-h6')
         .contains('Add')
         .contains('organization')

        //Form goes here
       cy.get('.input-group.case-sensitive')  
        .find('.input-label')
        .contains('Organization Name*')
       //
         cy.get('.MuiInputBase-input.MuiInput-input')
         .should('be.visible')
         cy.get('.MuiGrid-grid-sm-4 > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
         //cy.get('.MuiInputBase-input.MuiInput-input')
         .type('Pirates')
         //.contains('Pirates')
        //.should('eq','Pirates')

        //Organisation code
         cy.get('.input-group.case-sensitive')  
         .find('.input-label')
         .contains('Organization Code*')
         cy.get('.MuiGrid-grid-sm-4 > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
         .should('be.visible')
         .type('testCode')
         cy.get('.MuiGrid-grid-sm-4 > :nth-child(4) > .input-label')
          .should('be.visible')

          //Points field
          cy.get('.MuiGrid-grid-sm-4 > :nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
          .type('1')

          //Organisation info
          cy.get('.section-heading')
             .contains('Organization Info')

            //Player Roster field
             cy.get('.borderL > :nth-child(2) > .input-label')
             .contains('Player Roster')
          cy.get('.borderL > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
          .should('be.visible')
          .should('have.value', 'https://www.mlb.com/testcode/roster')
          

          //Game Schedule field
          cy.get('.borderL > :nth-child(3) > .input-label')
             .contains('Game Schedule')
          cy.get('.borderL > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
          .should('be.visible')
          .should('have.value', 'https://www.mlb.com/testcode/schedule')
         
          //Video Streaming field
          cy.get('.borderL > :nth-child(4) > .input-label')
             .contains('Video Streaming')
          cy.get('.borderL > :nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
          .should('be.visible')
          .should('have.value', 'https://www.mlb.com/testcode/video')
        
          //Events field
          cy.get('.borderL > :nth-child(5) > .input-label')
             .contains('Events')
          cy.get('.borderL > :nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
          .should('be.visible')
          .should('have.value', 'https://www.mlb.com/testcode')

          //News field
          cy.get('.borderL > :nth-child(6) > .input-label')
             .contains('News')
          cy.get('.borderL > :nth-child(6) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
          .should('be.visible')
          .should('have.value', 'https://www.mlb.com/testcode/news')
        

          //Social network field
          cy.get('.input-group.social-url-container')
          .find('.input-label')
         
          cy.get('.fb > .MuiInputBase-root > .MuiInputBase-input')
          .should('be.visible')
          cy.get('.twitter > .MuiInputBase-root > .MuiInputBase-input')
          .should('be.visible')

          //Cancel button
          cy.get('.MuiDialogActions-root.MuiDialogActions-spacing')
          .find('.MuiButtonBase-root.MuiButton-root.MuiButton-text.btn.btn-secondary.MuiButton-textPrimary')
          .find('.MuiButton-label')
          .contains('CANCEL')
          //.click()
          
          
            //ADD ORG button
          cy.get('.MuiDialogActions-root > .btn-primary')
          .contains('ADD ORG')
          //.click()
          
    }

                                    //SPONSOR

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

                  //PROMOTIONS
    
    promotions(){
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

    //Check Promotions Tab
    cy.get('#simple-tab-1')
      .click()
      .wait(2000)
    cy.get('.MuiTabs-flexContainer')
    cy.get('.MuiButtonBase-root.MuiTab-root.MuiTab-textColorInherit.Mui-selected')
    .find('.MuiTab-wrapper')
    .contains('PROMOTION LIST')
    cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(1)')
    .contains('Promocodes')

    //check Hunt List tab
    cy.get('.MuiButtonBase-root.MuiTab-root.MuiTab-textColorInherit')
    .find('.MuiTab-wrapper')
    .contains('HUNT LIST')
    .click()
    cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(1)')
    .contains('Hunt Codes')

    //Check ADD promotion/Hunt
    cy.get('.table-head-section > .MuiGrid-root > .btn')
      .contains('Add Promotion / Hunt')
      .click()
    cy.get('.MuiDialogContent-root.pad0')
    cy.get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-sm-12")
    .find('#form-dialog-title')
    .contains('CREATE')
    .contains('Promotions')

    //Form in create promotion
    cy.get(':nth-child(1) > .input-group > .input-label')
    .contains('Promotion Type')
   // cy.get('#mui-component-select-promoType')
   cy.get('.MuiInputBase-root.MuiInput-root.MuiInput-underline.custom-select.form-select.undefined')
   .find('.MuiSelect-root.MuiSelect-select.MuiSelect-selectMenu.MuiInputBase-input.MuiInput-input')
   cy.get('#mui-component-select-promoType')
   .contains('Email').click()  
    cy.get(".MuiSvgIcon-root.MuiSelect-icon")
    

    }
    merchandise(){
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

       //Go to Promotions Tab
    cy.get('#simple-tab-2')
    .click()
    .wait(2000)
    cy.get('.table-wrapper')
    .contains('FAN SHOP LIST')

       ///ADD Merchandise button
    cy.get('.import-btn-tile')
    .contains('import')
    cy.get('span')
    .should('have.class','btn-icon')
    cy.get('.btn-highlight > .btn-caption')
    .contains('ADD MERCHANDISE')
     .click()    
    }

 

    
}
