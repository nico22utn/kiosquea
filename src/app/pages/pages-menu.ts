import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-keypad',
    link: '/pages/home',
    children: [
      {
        title: 'Consulta rápida',
        link: '/pages/products/fast-query',
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
