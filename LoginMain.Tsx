import {ManageOrg} from '../Pages/ManageOrg'

const manageorg=new ManageOrg()

it('login test',function(){
    manageorg.navigate();
    manageorg.tabs();
    manageorg.sponsor()
    
})
