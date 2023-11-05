import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/error-boundary/error-boundary';

import Layout from './pages/layout/layout';
import DetailedPage from './pages/detailed/detailed';
import { useEffect, useState } from 'react';

const App = () => {
  const location = useLocation();
  const [isDetailsLoading, setIsDetailsLoading] = useState(false);
  const [isDetailedPageOpen, setIsDetailedPageOpen] = useState(false);
  const [detailsContent, setIsDetailsContent] = useState<string[]>(['', '']);
  useEffect(() => {
    setIsDetailedPageOpen(
      location.pathname.split('/').length === 3 ? false : true
    );
  }, [location]);
  return (
    <ErrorBoundary>
      <div className="app">
        <Routes>
          <Route path="/" element={<Navigate to="/pages/1" />} />
          <Route
            path="/pages/:page"
            element={
              <Layout
                isDetailedPageOpen={isDetailedPageOpen}
                setIsDetailsLoading={setIsDetailsLoading}
                setIsDetailsContent={setIsDetailsContent}
              />
            }
          >
            <Route
              path="/pages/:page/details/:id"
              element={
                <DetailedPage
                  isDetailsLoading={isDetailsLoading}
                  detailsContent={detailsContent}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </ErrorBoundary>
  );
};

export default App;
