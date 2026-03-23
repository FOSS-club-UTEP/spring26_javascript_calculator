let currExpr = '';

function updateDisplay(value) {
	const display = document.getElementById('result');
	display.innerText = value || '0';
}

window.appendNum = function(number) {
	if (number == '.' && currExpr.split(/[\+\-\*\/]/).pop().includes('.')) {
		/* we won't do anything, this way the decimal won't be added */
		return;
	}
	currExpr += number;
	updateDisplay(currExpr);
}

window.appendOp = function(operator) {
	currExpr += `${operator}`;
	updateDisplay(currExpr);
}

/* more "correct" way */
window.calcRes = function() {
	try {
		const tokens = currExpr.match(/\d+\.?\d*|[\+\-\*\/]/g);

		if (!tokens) return;

		let values = [];

		for (let i = 0; i < tokens.length; i++) {
			let token = tokens[i];

			if (token === '*' || token === '/') {
				let prevNum = parseFloat(values.pop());
				let nextNum = parseFloat(tokens[++i]);
				let res = (token === '*') ? prevNum * nextNum : prevNum / nextNum;
				values.push(res);
			} else {
				values.push(token);
			}
		}

		let finalResult = parseFloat(values[0]);
		for (let i = 1; i < values.length; i += 2) {
			let operator = values[i];
			let nextNum = parseFloat(values[i + 1]);

			if (operator === '+') finalResult += nextNum;
			if (operator === '-') finalResult -= nextNum;

		}
		currExpr = finalResult.toString();
		updateDisplay(currExpr);
	} catch (e) {
		updateDisplay("Error");
		currExpr = '';
	}
}

/* easy way */
/*
window.calcRes = function() {
	try {
		currExpr = eval(currExpr.replace('÷', '/').replace('×', '*'));
		updateDisplay(currExpr);
	} catch {
		updateDisplay("Error");
	}
}
*/

window.clearRes = function() {
	currExpr = '';
	updateDisplay(currExpr);
}

window.del = function() {
	currExpr = currExpr.substring(0, currExpr.length - 1);
	updateDisplay(currExpr);
}
