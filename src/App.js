import './App.css';
import LocationTab from './LocationTab';
import Card from './Card';
import LeaderBoard from './LeaderBoard';
function App() {
  return (
    <main className="main-bg">
      <LeaderBoard />
      <Card />
      <LocationTab />
    </main>
  );
}

export default App;
