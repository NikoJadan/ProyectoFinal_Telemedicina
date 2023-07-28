import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FnumberchartComponent } from './fnumberchart/fnumberchart.component';
import { FindicatorComponent } from './findicator/findicator.component';
import { FmapComponent } from './fmap/fmap.component';
import { FswitchComponent } from './fswitch/fswitch.component';
import { FbuttonComponent } from './fbutton/fbutton.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
export let FormasModule = class FormasModule {
};
FormasModule = __decorate([
    NgModule({
        declarations: [
            FnumberchartComponent,
            FindicatorComponent,
            FmapComponent,
            FswitchComponent,
            FbuttonComponent,
            LoginComponent,
            RegisterComponent
        ],
        imports: [
            FormsModule,
            CommonModule,
            RouterModule
        ],
        exports: [
            FnumberchartComponent,
            FindicatorComponent,
            FmapComponent,
            FswitchComponent,
            FbuttonComponent,
            LoginComponent,
            RegisterComponent
        ]
    })
], FormasModule);
//# sourceMappingURL=formas.module.js.map