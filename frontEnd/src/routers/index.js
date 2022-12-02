import Auth from '../pages/auth/Auth';
import Customer from '../pages/customer/Customer';
import Equitment from '../pages/equitment/Equitment';
import HDNInvoice from '../pages/HDNInvoice/HDNInvoice';
import HDXInvoice from '../pages/HDXInvoice/HDXInvoice';
import Home from '../pages/home/Home';
import Supplier from '../pages/supplier/Supplier';
import page from './routeConfig';

const routes = [
  {
    path: page.auth,
    element: <Auth />,
    layout: false,
  },
  {
    path: page.home,
    element: <Home />,
    layout: true,
  },
  {
    path: page.equitment,
    element: <Equitment />,
    layout: true,
  },
  {
    path: page.customer,
    element: <Customer />,
    layout: true,
  },
  {
    path: page.supplier,
    element: <Supplier />,
    layout: true,
  },
  {
    path: page.hdx,
    element: <HDXInvoice />,
    layout: true,
  },
  {
    path: page.hdn,
    element: <HDNInvoice />,
    layout: true,
  },
];

export default routes;
