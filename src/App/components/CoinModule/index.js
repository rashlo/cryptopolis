import React from 'react';
import './index.css'

export default function CoinModule() {
  return (
		<>
			<table>
			<tbody>
				<tr>
					<th>Coin</th>
					<th>Price</th>
					<th>Mkt Cap</th>
				</tr>
				<tr>
					<td>BTC</td>
					<td>44,101</td>
					<td>956 B</td>
				</tr>
				<tr>
					<td>ETH</td>
					<td>1,390</td>
					<td>154 B</td>
				</tr>
				<tr>
					<td>ADA</td>
					<td>1.21</td>
					<td>38 B</td>
				</tr>
			</tbody>
			</table>
		</>
  );
}
