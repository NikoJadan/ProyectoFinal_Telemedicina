import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { DevicesComponent } from 'src/app/components/devices/devices.component';
import { AlarmasComponent } from 'src/app/components/alarmas/alarmas.component';
import { TemplatesComponent } from 'src/app/components/templates/templates.component';
import { TestComponent } from 'src/app/components/test/test.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    {path: 'devices', component:DevicesComponent},
    {path: 'alarmas', component:AlarmasComponent},
    {path:'templates', component:TemplatesComponent},
    {path:'test', component:TestComponent},
    
    { path: 'upgrade',        component: UpgradeComponent }
];
