///<reference types="cypress" />

import { within } from "@testing-library/react"

export class ManageOrg{
   
    //function
    
    tabs(){

  //     cy.get('.active > div')
  //     .click()
  //     .wait(2000)
  //   cy.get('.ptv-main')
  //   cy.get('.details-page')
  //   .contains('DashBoard',{ timeout: 5000 })
  //   .wait(2000)


  //   cy.get('.manage-member-menu-item > a > div')
  //   .click()
  // cy.get('.ptv-main')
  //   .contains('MANAGE MEMBERS')
  //   .wait(4000)

  cy.get('.dashboard-menu-item > a > div',{ timeout: 10000 }).click()

    //  cy.get('.ptv-main').contains('DASHBOARD')
      // cy.get('.padd-left8').should("have.class","page-title padd-left8")
      // cy.contains('DashBoard')
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
      cy.get('.table-wrapper').contains('SPONSORS LIST')

      cy.get('#simple-tab-1').click().wait(2000)
        .contains('Promotions')
      cy.get('.table-wrapper').contains('PROMOTION LIST')

      cy.get('#simple-tab-2').click().wait(4000)
        .contains('Merchandise')
      cy.get('.table-wrapper').contains('FAN SHOP LIST')
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
      cy.get(':nth-child(1) > .MuiPaper-root > :nth-child(2) > .MuiGrid-root > .MuiButtonBase-root',{timeout:10000})
        .click()
        .wait(4000)

     //ADD Org button
      cy.get('.btn.btn-primary.add-btn')
        .find('.btn-caption')
        .contains('Add Org')
        .click()
        .wait(3000)

      //check the Heading if the form
      cy.get('.MuiPaper-root.MuiDialog-paper.MuiDialog-paperScrollPaper.MuiDialog-paperWidthSm.MuiPaper-elevation24.MuiPaper-rounded')
         .find('.MuiTypography-root.MuiTypography-h6')
         .contains('Add')
         .contains('organization')

      //  Form goes 
      //   cy.get('.input-group.input-file-group.edit')
      //     .find('.profile-img-editview')
      //     .click()
      //     .trigger('change')
      //     .click()
      cy.get('.form-fields.form-field-file')
       
        
      // cy.get('.input-file-group > .form-fields')
      // .click()
      cy.get('.input-group.case-sensitive')  
        .find('.input-label')
        .contains('Organization Name*')
       
      cy.get('.MuiInputBase-input.MuiInput-input')
        .should('be.visible')
      cy.get('.MuiGrid-grid-sm-4 > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
         .type('Pirates')
        .wait(2000)

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
        .type('1.05')

      //Organisation info
      cy.get('.section-heading')
        .contains('Organization Info')

      //Player Roster field
      cy.get('.borderL > :nth-child(2) > .input-label')
        .contains('Player Roster')
      cy.get('.borderL > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .should('be.visible')
        .should('have.value', 'https://www.mlb.com/testcode/roster')
        .wait(2000)

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
        .wait(2000)
          .click()
          
          
            //ADD ORG button
      cy.get('.MuiDialogActions-root > .btn-primary')
        .contains('ADD ORG')
          //.click()
          
    }

                                    //SPONSOR

    sponsor()
    {
        //org-overview Manage button
        // cy.get(':nth-child(1) > .MuiPaper-root > :nth-child(2) > .MuiGrid-root > .MuiButtonBase-root',{ timeout: 20000 })
        //   .wait(5000)
        //   .click() //org-overview
        // cy.contains("MANAGE ORGANIZATIONS")
        //   .should('have.class',"page-title")
        
        //Click the Pirates title
        // cy.get('.org-title')
        //   .click()
        //   .wait(2000)

        //Go to Sponsor Tab
        cy.get('#simple-tab-0')
          .click()
          .wait(2000)
        

        //check total number of data in the table
        cy.get('table>tbody>tr>td').should('have.length','21').wait(2000)

        //check total number of colums in the table header
        cy.get('table>thead>tr>th').should('have.length','7').wait(2000)

          //cy.get('.MuiTable-root.MUIDataTable-tableRoot-8>tbody>tr>td')
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
        
        cy.get('.confirmation-sec > .MuiDialogActions-root > .btn-primary')
           .contains('CONFIRM').click()
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


      //check total number of data in the table
      cy.get('table>tbody>tr>td').should('have.length','18')

      //check total number of colums in the table header
      cy.get('table>thead>tr>th').should('have.length','9')

      //check total number of colums in a single row 
      cy.get('table>tbody>.MuiTableRow-root.pointer>td').should('have.length','18')

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

        //check total number of data in the table
        cy.get('.MuiTable-root.MUIDataTable-tableRoot-8>tbody>tr>td').should('have.length','100')

        //check total number of colums in the table header
        cy.get('.MuiTable-root.MUIDataTable-tableRoot-8>thead>tr>th').should('have.length','10')

        //check total number of colums in a single row 
        cy.get('.MuiTable-root.MUIDataTable-tableRoot-8>tbody>#MUIDataTableBodyRow-8>td').should('have.length','10')


        //display all elements in the table
        cy.get('.MuiTable-root.MUIDataTable-tableRoot-8>tbody>tr')
          .each(function($row,index,$rows){
            cy.wrap($row).within(function(){
              cy.get('td')
              .each(function($celldata,index,$column){
                cy.log($celldata.text())
            })
          })
        })

        //get a particular value in a single row
        cy.get('.MuiTable-root.MUIDataTable-tableRoot-8>tbody>tr').first()
        .within(function(){
          cy.get('td').eq(3).should('contain.text','1000')
        })

          ///ADD Merchandise button
        cy.get('.import-btn-tile')
        .contains('import')
        cy.get('span')
        .should('have.class','btn-icon')
        cy.get('.btn-highlight > .btn-caption')
        .contains('ADD MERCHANDISE')
        .click()    
        }


    pointholders(){
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
        cy.get('#simple-tab-4').click().wait(4000)
          .contains('Point Holders')
        cy.get('.table-wrapper')
          .contains('POINT HOLDER LIST')

        //check total number of data in the table
        cy.get('table>tbody>tr>td').should('have.length','30')

         //check total number of colums in the table header
        cy.get('table>thead>tr>th').should('have.length','5')

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


        cy.get('table>tbody>tr').first()  //eq(3) row
          .within(function(){
            cy.get('td').eq(1).should('contain.text','Admin_pirates@Pointsville.Com	') //column
          })


      


    }
  }
