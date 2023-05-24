import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { GalleryPageComponent } from './gallery/gallery.component';
import { DataTablesComponent } from './data-tables/data-tables.component';
import { EditorComponent } from './editor/editor.component';
import { OrganigramaComponent } from './organigrama/organigrama.component';
import { ChartComponent } from './chart/chart.component';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { TablesComponent } from './tables/tables.component';
import { CitiesComponent } from './cities/cities.component';
import { AristasComponent } from './aristas/aristas.component';
import { DijkstraComponent } from './dijkstra/dijkstra.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'Users'
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'create-user',
        component: CreateUserComponent,
        data: {
          title: 'Create User'
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'cities',
        component: CitiesComponent,
        data: {
          title: 'Cities'
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'aristas',
        component: AristasComponent,
        data: {
          title: 'Aristas'
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'dijkstra',
        component: DijkstraComponent,
        data: {
          title: 'Dijkstra'
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'calculator',
        component: CalculatorComponent,
        data: {
          title: 'Calculator'
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'gallery',
        component: GalleryPageComponent,
        data: {
          title: 'Gallery'
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables'
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'data-tables',
        component: DataTablesComponent,
        data: {
          title: 'Data Tables'
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'editor',
        component: EditorComponent,
        data: {
          title: 'Editor'
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'organigrama',
        component: OrganigramaComponent,
        data: {
          title: 'Organigrama'
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'chart',
        component: ChartComponent,
        data: {
          title: 'Chart'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesRoutingModule { }


