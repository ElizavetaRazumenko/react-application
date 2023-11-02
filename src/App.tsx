import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/error-boundary/error-boundary';
import MainPage from './pages/main/main';

const App = () => {
  return (
    <ErrorBoundary>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/pages/1" />} />
            <Route path="/pages/:page" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ErrorBoundary>
  );
};

export default App;
