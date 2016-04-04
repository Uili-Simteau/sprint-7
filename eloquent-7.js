// Minimum argument  __________

var myMin = function(a,b) {
	if (a>b) {
		return b;
	} else if (a < b) {
		return a
	} else {
		return "equal";
	}

}

console.log(myMin(42,42));


////////   Recursion ______

function isEven(num) {
	if (num == 1) {
		return false;
	} else if (num == 0) {
		return true;
	}
	else {
		return isEven(num-2);
	};
};
console.log(isEven(52));

////////   Bean counters
function countB(string) {
	countChar(string,"B");
}

countB("Babaganoush")

function countChar(string,x) {
	var tally =0;
	for (i=0; i<string.length; i++) {
		if (string.charAt(i) == x) {
			tally++
		}		
	}
	console.log(tally)
}