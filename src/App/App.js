import './App.css';
import Header from './components/Header/index.js';
import Background from './components/Background/index.js';
import CoinModule from './components/CoinModule/index.js';
import DarkMode from './components/DarkMode/index.js';

function App() {
  return (
		<>
			<div className="App">
				<Background />
				<Header />
				<DarkMode />
				<CoinModule />
			</div>
		</>
  );
}

export default App;
