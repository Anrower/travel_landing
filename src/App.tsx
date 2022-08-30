import './App.scss';
import Destinations from './components/destinations/Destinations';
import Preview from './components/preview/Preview';
import Steps from './components/steps/Steps';

function App() {
  return (
    <div className="App">
      <Preview />
      <main>
        <Steps />
        <Destinations />
      </main>
    </div>
  );
}

export default App;
