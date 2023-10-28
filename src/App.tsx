import './App.css';
import ErrorBoundary from './components/error-boundary/error-boundary';
import MainPage from './pages/main/main';

function App() {
  return (
    <ErrorBoundary>
      <div className="app">
        <MainPage />
      </div>
    </ErrorBoundary>
  );
}

export default App;
