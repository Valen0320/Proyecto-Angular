import { RouteInfo } from './vertical-menu.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
  {
    path: '/page', title: 'Page', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/exercises/users', title: 'Users', icon: 'ft-home', class: 'has-sub', badge: '1', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, 
    submenu: [
      {
        path: '/exercises/create-user', title: 'Create Users', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      }
    ]
  },
  {
    path: '/exercises/calculator', title: 'Calculator', icon: 'ft-smartphone', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/exercises/gallery', title: 'Gallery', icon: 'ft-camera', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/exercises/data-tables', title: 'Data Tables', icon: 'ft-grid', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/exercises/editor', title: 'Editor', icon: 'ft-upload', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/exercises/organigrama', title: 'Organigrama', icon: 'ft-grid', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/exercises/chart', title: 'Chart', icon: 'ft-grid', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '', title: 'Menu Levels', icon: 'ft-align-left', class: 'has-sub', badge: '3', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
    submenu: [
        { path: '/YOUR-ROUTE-PATH', title: 'Second Level', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        {
            path: '', title: 'Second Level Child', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
            submenu: [
                { path: '/YOUR-ROUTE-PATH', title: 'Third Level 1.1', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                { path: '/YOUR-ROUTE-PATH', title: 'Third Level 1.2', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            ]
        },
    ]
},
];
