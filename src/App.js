import './App.css';
import Header from './components/Header';
import StopWatch from './pages/StopWatch';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <StopWatch />
      </main>
    </div>
  );
}

export default App;
