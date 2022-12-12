import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './components/globalStyles/GlobalStyle';
import PrivateLayout from './components/layouts/PrivateLayout';
import Auth from './pages/auth/Auth';
import routes from './routers';
import PrivateRoute from './routers/PrivateRoute';

function App() {
  return (
    <div>
      <GlobalStyle>
        <BrowserRouter>
          <Routes>
            <Route path='/auth' element={<Auth />} />
            <Route path='/' element={<PrivateRoute />}>
              {routes.map((r, index) => {
                let Layout = Fragment;
                if (r.layout) {
                  Layout = PrivateLayout;
                }
                return <Route path={r.path} key={index} element={<Layout>{r.element}</Layout>} />;
              })}
            </Route>
            {/* <Route path='/' element={<PrivateRoute auth={auth} />}>
              {routes.map((data, index) => {
                return (
                  <Route
                    key={index}
                    path={data.path}
                    element={<DefaultLayout>{data.element}</DefaultLayout>}
                  />
                );
              })}
            </Route> */}
          </Routes>
        </BrowserRouter>
      </GlobalStyle>
    </div>
  );
}

export default App;
