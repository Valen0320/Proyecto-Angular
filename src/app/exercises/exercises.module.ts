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
import { OrganigramaComponent } from './organigrama/organigrama.component';
import { ChartComponent } from './chart/chart.component';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { TablesComponent } from './tables/tables.component';
import { CitiesComponent } from './cities/cities.component';
import { AristasComponent } from './aristas/aristas.component';
import { DijkstraComponent } from './dijkstra/dijkstra.component';


@NgModule({
  declarations: [
    CalculatorComponent,
    GalleryPageComponent,
    DataTablesComponent,
    EditorComponent,
    OrganigramaComponent,
    ChartComponent,
    UsersComponent,
    CreateUserComponent,
    TablesComponent,
    CitiesComponent,
    AristasComponent,
    DijkstraComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExercisesRoutingModule,
    PipeModule,
    NgxDatatableModule,
    QuillModule.forRoot(),
    ReactiveFormsModule,
    NgbModule,
    OrganizationChartModule,
    ToastModule,
    PanelModule,
  ]
})
export class ExercisesModule { }