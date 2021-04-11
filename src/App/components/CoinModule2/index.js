import React, { useState, useEffect } from "react";
import './index.css';

export default function CoinModule2() {
	
	//const [name, setName] = useState(null);
	//const [price, setPrice] = useState(null);
	//const [mktCap, setMktCap] = useState(null);

	function capitalize(string) {
			return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	}

	useEffect(() => {
		async function fetchData() {
			const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1');
			const data = await response.json();

			for(let i = 0; i < data.length; i++) {
				let tBody = document.querySelector("tbody");
				let tr = tBody.insertRow(-1);
				let coinCol = document.createElement("td");
				let coinName = document.createElement("td");
				let coinImg = document.createElement("img");
				let coinPrice = document.createElement("td");
				let coinMktCap = document.createElement("td");	
				coinImg.src = data.[i].image;
				coinName.innerHTML = data.[i].symbol.toUpperCase();
				coinPrice.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data.[i].current_price);
				coinMktCap.innerHTML = data.[i].market_cap_rank;
				//coinCol.appendChild(coinName);
				coinCol.appendChild(coinImg);	
				tr.appendChild(coinName);
				tr.appendChild(coinCol);
				//tr.appendChild(coinImg);
				tr.appendChild(coinPrice);
				tr.appendChild(coinMktCap);
			}	
			console.log(data);
		}
		fetchData();
	}, [])

return (
		<>
			<table>
			<tbody>
				<tr>
					<th>Token</th>
					<th>Symbol</th>
					<th>Price (USD)</th>
					<th>Rank (Mkt Cap)</th>
				</tr>
			</tbody>
			</table>
		</>
  );
}
