import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { GalleryPageComponent } from './gallery/gallery.component';
import { DataTablesComponent } from './data-tables/data-tables.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
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
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercisesRoutingModule { }


