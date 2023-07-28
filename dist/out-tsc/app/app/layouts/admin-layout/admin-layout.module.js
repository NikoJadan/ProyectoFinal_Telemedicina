import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
//import {ChartsModule} from 'ng-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
export let AdminLayoutModule = class AdminLayoutModule {
};
AdminLayoutModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild(AdminLayoutRoutes),
            FormsModule,
            NgChartsModule,
            NgbModule,
            ToastrModule.forRoot()
        ],
        declarations: [
            DashboardComponent,
            UpgradeComponent,
        ]
    })
], AdminLayoutModule);
//# sourceMappingURL=admin-layout.module.js.map