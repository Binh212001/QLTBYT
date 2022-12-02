import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './components/globalStyles/GlobalStyle';
import PrivateLayout from './components/layouts/PrivateLayout';
import routes from './routers';

function App() {
  return (
    <div>
      <GlobalStyle>
        <BrowserRouter>
          <Routes>
            {routes.map((r, index) => {
              let Layout = Fragment;
              if (r.layout) {
                Layout = PrivateLayout;
              }
              return (
                <Route
                  path={r.path}
                  element={<Layout>{r.element}</Layout>}
                  key={index}
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </GlobalStyle>
    </div>
  );
}

export default App;
