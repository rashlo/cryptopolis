import './App.css';
import Header from './components/Header/index.js';
import Background from './components/Background/index.js';
import CoinModule2 from './components/CoinModule2/index.js';
import DarkMode from './components/DarkMode/index.js';
import Footer from './components/Footer/index.js';

function App() {
  return (
		<>
			<div className="App">
				<Background />
				<Header />
				<DarkMode />
				<CoinModule2 />
				<Footer />
			</div>
		</>
  );
}

export default App;
