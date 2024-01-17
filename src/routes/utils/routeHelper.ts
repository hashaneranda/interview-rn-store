import Cart from '@/screens/Cart/Cart';
import Home from '@/screens/Home/Home';

export interface RouteConfigType {
  name: string;
  component: any;
  isProtected: boolean;
  isGlobal: boolean;
}

const routeConfig: RouteConfigType[] = [
  {
    name: 'Home',
    component: Home,
    isProtected: false,
    isGlobal: true,
  },
  {
    name: 'Cart',
    component: Cart,
    isProtected: false,
    isGlobal: true,
  },
];

export const renderGuestRouets = () => {
  return routeConfig.filter(route => !route.isProtected);
};
