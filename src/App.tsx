import './App.scss';
import Destinations from './components/destinations/Destinations';
import Preview from './components/preview/Preview';
import Steps from './components/steps/Steps';
import Travel from './components/travel/Travel';

function App() {
  return (
    <div className="App">
      <Preview />
      <main>
        <Steps />
        <Destinations />
        <Travel />
      </main>
    </div>
  );
}

export default App;
