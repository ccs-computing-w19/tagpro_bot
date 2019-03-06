function pairwise(list) {
	let pairs = []
	list.slice(0, list.length - 1)
		.forEach(function (first, n){
			let tail = list.slice(n + 1, list.length)
			tail.forEach(function (item){
				pairs.push([first, item])
			})
		})
	return pairs
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function jsonCopy(src) {
	  return JSON.parse(JSON.stringify(src));
}

export { pairwise, getRndInteger, jsonCopy };
