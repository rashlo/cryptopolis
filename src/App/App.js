import './App.css';
import Header from './components/Header/index.js';
import CoinModule from './components/CoinModule/index.js';

function App() {
  return (
		<>
			<div className="App">
				<Header />
				<CoinModule />
			</div>
		</>
  );
}

export default App;