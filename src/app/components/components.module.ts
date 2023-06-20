import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DevicesComponent } from './devices/devices.component';
import { AlarmasComponent } from './alarmas/alarmas.component';
import { TemplatesComponent } from './templates/templates.component';
import { TestComponent } from './test/test.component';
import { IotindicatorComponent } from './iotindicator/iotindicator.component';
import { IotbuttonComponent } from './iotbutton/iotbutton.component';
import { IotswitchComponent } from './iotswitch/iotswitch.component';
import { NumberchartComponent } from './numberchart/numberchart.component';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { FormasModule } from '../formas/formas.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    NgChartsModule,
    FormsModule,
    FormasModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DevicesComponent,
    AlarmasComponent,
    TemplatesComponent,
    TestComponent,
    IotindicatorComponent,
    IotbuttonComponent,
    IotswitchComponent,
    NumberchartComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
