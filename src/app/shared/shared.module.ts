import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SharedRoutingModule } from './shared-routing.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavContainerComponent } from './nav-container/nav-container.component';
import { NavContentComponent } from './nav-content/nav-content.component';


@NgModule({
  declarations: [
    TopBarComponent,
    LayoutComponent,
    SideNavComponent,
    NavContainerComponent,
    NavContentComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    TopBarComponent,
    LayoutComponent,
    SideNavComponent,
    NavContainerComponent,
    NavContentComponent
  ]
})
export class SharedModule { }
