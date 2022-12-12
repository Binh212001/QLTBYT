import Customer from '../pages/customer/Customer';
import EqmInfomation from '../pages/equitment/EqmInfomation';
import Equitment from '../pages/equitment/Equitment';
import HDNInformation from '../pages/HDNInvoice/HDNInformation';
import HDNInvoice from '../pages/HDNInvoice/HDNInvoice';
import HDXInfomation from '../pages/HDXInvoice/HDXInfomation';
import HDXInvoice from '../pages/HDXInvoice/HDXInvoice';
import Home from '../pages/home/Home';
import Supplier from '../pages/supplier/Supplier';
import page from './routeConfig';

const routes = [
  // {
  //   path: page.auth,
  //   element: <Auth />,
  //   layout: false,
  // },
  {
    path: page.eqmInfo,
    element: <EqmInfomation />,
    layout: true,
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
  {
    path: page.exportInformation,
    element: <HDXInfomation />,
    layout: true,
  },
  {
    path: page.importInformation,
    element: <HDNInformation />,
    layout: true,
  },
];

export default routes;
