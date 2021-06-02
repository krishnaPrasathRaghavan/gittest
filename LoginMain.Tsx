import { Dashboard } from '../Pages/Dashboard';
import {ManageOrg} from '../Pages/ManageOrg'

const dashboard=new Dashboard()
const manageorg=new ManageOrg()


it('test_DashBoard',function(){
        dashboard.navigate();
        dashboard.routepaths();
        dashboard.sidebar();
        dashboard.DashboardGrid();
        dashboard.transactions();
        
  })

it('test_manageorg',function(){
     dashboard.navigate();    
      manageorg.addorg()
      manageorg.tabs();
      manageorg.sponsor()
      manageorg.promotions()
      manageorg.merchandise()
      manageorg.pointholders()
        

    
 })
