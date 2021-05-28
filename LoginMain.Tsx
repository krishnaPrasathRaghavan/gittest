import {ManageOrg} from '../Pages/ManageOrg'

const manageorg=new ManageOrg()

it('login test',function(){
    manageorg.navigate();
    manageorg.tabs();
    manageorg.sponsor()
    
})
it('DashBoard',function(){
        manageorg.navigate();
        dashboard.sidebar();
        dashboard.tabs();
        dashboard.sponsor()
        
    })
    
