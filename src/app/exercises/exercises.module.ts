import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExercisesRoutingModule } from './exercises-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { QuillModule } from 'ngx-quill';

import { EditorComponent } from './editor/editor.component';
import { GalleryPageComponent } from './gallery/gallery.component'; 
import { DataTablesComponent } from './data-tables/data-tables.component';
import { CalculatorComponent } from './calculator/calculator.component';


@NgModule({
  declarations: [
    CalculatorComponent,
    GalleryPageComponent,
    DataTablesComponent,
    EditorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExercisesRoutingModule,
    PipeModule,
    NgxDatatableModule,
    QuillModule.forRoot(),
    ReactiveFormsModule,
    NgbModule
  ]
})
export class ExercisesModule { }