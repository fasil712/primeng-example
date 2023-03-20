import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableCrudDemoComponent } from './table-crud-demo/table-crud-demo.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {FileUploadModule} from 'primeng/fileupload';
import {RatingModule} from 'primeng/rating';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';

@NgModule({
  declarations: [
    AppComponent,
    TableCrudDemoComponent
  ],
  imports: [
    BrowserModule,
    InputNumberModule,
    HttpClientModule,
    ConfirmDialogModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    FileUploadModule,
    RatingModule,
    DialogModule,
    DropdownModule,
    RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
