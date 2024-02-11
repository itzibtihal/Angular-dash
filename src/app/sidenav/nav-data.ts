import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
     {
        routeLink: 'admin/dashboard',
        icon: 'fa fa-home',
        label: 'Dashboard',
     },
     {
        routeLink: 'admin/Statistics',
        icon: 'fa-solid fa-chart-simple',
        label: 'Statistics',
     },
     {
        routeLink: 'admin/Users',
        icon: 'fa-solid fa-users',
        label: 'Users',
        items:[
          {
            routeLink: 'admin/Users/students',
            label: 'Students',
            // items:[
            //       {
            //           routeLink: 'admin/Users/students/listStudents',
            //           label: 'List',
            //       },
            // ]
          },
          
          {
            routeLink: 'admin/Users/tutors',
            label: 'Tutors'
          },
          {
            routeLink: 'admin/Users/parents',
            label: 'Parents'
          },
        ]
     },
     {
        routeLink: 'admin/tutorcv',
        icon: 'fa-solid fa-file-contract',
        label: 'Tutors cv',
     },
     {
        routeLink: 'admin/classes',
        icon: 'fa-solid fa-school',
        label: 'Classes',
     },
     {
        routeLink: 'admin/courses',
        icon: 'fa-solid fa-book',
        label: 'Courses',
     },
     {
        routeLink: 'admin/presence',
        icon: 'fa-solid fa-user-check',
        label: 'Presence',
     },
     {
        routeLink: 'admin/media',
        icon: 'fa-solid fa-link',
        label: 'Media',
     },
     {
        routeLink: 'admin/evaluation',
        icon: 'fa-solid fa-file-pen',
        label: 'Evaluation',
     },
     {
        routeLink: 'admin/progressOfTheWeek',
        icon: 'fa-solid fa-chart-line',
        label: 'Progress Of The Week',
     },
     {
        routeLink: 'admin/chat',
        icon: 'fa-regular fa-comments',
        label: 'Chat',
     },
     {
        routeLink: 'admin/settings',
        icon: 'fa-solid fa-gears',
        label: 'Settings',
     },
];