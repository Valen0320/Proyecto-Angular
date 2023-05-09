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


