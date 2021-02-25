import React from 'react';

const tableStyles = {
	color: "white",
  backgroundColor: "DodgerBlue",
	padding: "10px",
	fontFamily: "Arial",
	marginLeft: "auto",
	marginRight: "auto",
	borderRadius: "14px",
	width: "80%",
	boxShadow: "-5px -5px 5px #888888"
}

export default function CoinModule() {
  return (
		<>
			<table style={tableStyles}>
				<tr>
					<th>Firstname</th>
					<th>Lastname</th>
					<th>Age</th>
				</tr>
				<tr>
					<td>Jill</td>
					<td>Smith</td>
					<td>50</td>
				</tr>
				<tr>
					<td>Eve</td>
					<td>Jackson</td>
					<td>94</td>
				</tr>
			</table>
		</>
  );
}
