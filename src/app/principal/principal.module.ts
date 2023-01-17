import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PeruComponent } from './peru/peru.component';
import { ChileComponent } from './chile/chile.component';
import { UruguayComponent } from './uruguay/uruguay.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    MenuComponent,
    PeruComponent,
    ChileComponent,
    UruguayComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    MenuComponent,
    PeruComponent,
    ChileComponent,
    UruguayComponent,
    NavBarComponent
  ]
})
export class PrincipalModule { }
