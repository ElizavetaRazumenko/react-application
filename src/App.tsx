import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/error-boundary/error-boundary';

import Layout from './pages/layout/layout';
import DetailedPage from './pages/detailed/detailed';
import AppContext from './App-context';
import NotFoundPage from './pages/404/not-found';

const App = () => {
  return (
    <ErrorBoundary>
      <AppContext>
        <div className="app">
          <Routes>
            <Route path="/" element={<Navigate to="/pages/1" />} />
            <Route path="/pages/:page" element={<Layout />}>
              <Route
                path="/pages/:page/details/:id"
                element={<DetailedPage />}
              />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </AppContext>
    </ErrorBoundary>
  );
};

export default App;
