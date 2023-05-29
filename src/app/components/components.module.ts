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

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DevicesComponent,
    AlarmasComponent,
    TemplatesComponent,
    TestComponent,
    IotindicatorComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
