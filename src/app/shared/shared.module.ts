import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header/header.component";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [IonicModule, RouterModule, CommonModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent, RouterModule]
})
export class SharedModule {}
