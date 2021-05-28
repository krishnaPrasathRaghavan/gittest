import { Dashboard } from '../Pages/Dashboard';
import {ManageOrg} from '../Pages/ManageOrg'

const dashboard=new Dashboard()
const manageorg=new ManageOrg()


it('test_DashBoard',function(){
        dashboard.navigate();
        dashboard.sidebar();
        dashboard.DashboardGrid();

        
  })

it('test_manageorg',function(){
        dashboard.navigate();
        manageorg.tabs();
        manageorg.sponsor()
    
 })
