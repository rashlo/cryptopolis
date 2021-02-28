import React from 'react';

const tableStyles = {
	color: "black",
	marginTop: "100px",
	paddingTop: "20px",
	paddingBottom: "20px",
	fontFamily: "Arial",
	marginLeft: "auto",
	marginRight: "auto",
	borderRadius: "14px",
	width: "80%",
	boxShadow: "-5px -5px 5px #888888"
}

const centerText = {
    textAlign: "center", 
    verticalAlign: "middle"
}

export default function CoinModule() {
  return (
		<>
			<table style={tableStyles}>
				<tr>
					<th style={centerText}>Firstname</th>
					<th style={centerText}>Lastname</th>
					<th style={centerText}>Age</th>
				</tr>
				<tr>
					<td style={centerText}>Jill</td>
					<td style={centerText}>Smith</td>
					<td style={centerText}>50</td>
				</tr>
				<tr>
					<td style={centerText}>Eve</td>
					<td style={centerText}>Jackson</td>
					<td style={centerText}>94</td>
				</tr>
			</table>

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
