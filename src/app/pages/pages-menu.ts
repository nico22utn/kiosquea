import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-keypad',
    link: '/pages/home',
    children: [
      {
        title: 'Consultar producto',
        link: '/pages/home/products',
      },
      {
        title: 'Actualizar producto',
        link: '/pages/products/add',
      },
      {
        title: 'Ver todos los productos',
        link: '/pages/products/list',
      },
      {
        title: 'Ver próximos vencimientos',
        link: '/pages/products/expirations',
      },
    ],
  },
  {
    title: 'Agregar producto',
    icon: 'nb-layout-default',
    link: '/pages/products/add',
  },
  {
    title: 'Consultar deuda de vecinos',
    icon: 'nb-gear',
    link: '/pages/debts',
  },
  {
    title: 'Consultar stock productos',
    icon: 'nb-location',
    link: '/pages/products/stock',
  },
];
