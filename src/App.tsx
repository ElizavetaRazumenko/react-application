import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/error-boundary/error-boundary';
import MainPage from './pages/main/main';

const App = () => {
  return (
    <ErrorBoundary>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:id" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ErrorBoundary>
  );
};

export default App;
