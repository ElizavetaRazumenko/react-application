import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/error-boundary/error-boundary';

import Layout from './pages/layout/layout';
import DetailedPage from './pages/detailed/detailed';

const App = () => {
  return (
    <ErrorBoundary>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/pages/1" />} />
            <Route path="/pages/:page" element={<Layout />}>
              <Route
                path="/pages/:page/details/:id"
                element={<DetailedPage />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ErrorBoundary>
  );
};

export default App;
