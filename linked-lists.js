function linkedList() {
	let headData = null;
	let listSize = 0;
	const append = (value) => {
		if (headData === null) {
			headData = node(value);
		} else {
			let next = headData;
			while (next.nextNode) {
				next = next.nextNode;
			}
			next.nextNode = node(value);
		}
		listSize++;
		return "Data Appended.";
	};
	const prepend = (value) => {
		if (headData === null) {
			headData = node(value);
		} else {
			let next = headData;
			headData = node(value, next);
		}
		listSize++;
		return "Data Prepended.";
	};
	const size = () => {
		return listSize;
	};
	const head = () => {
		let next = headData;
		if (next) {
			return headData;
		} else {
			return "Empty";
		}
	};
	const tail = () => {
		let next = headData;
		if (next) {
			while (next.nextNode) {
				next = next.nextNode;
			}
			return next;
		} else {
			return "Empty";
		}
	};
	const at = (index) => {
		let count = 0;
		let next = headData;
		while (count < index && next) {
			next = next.nextNode;
			count++;
		}
		if (next) {
			return next;
		} else {
			return "Not Found";
		}
	};
	const pop = () => {
		let next = headData;
		let prev = headData;
		if (headData === null) {
			return "Empty";
		} else if (listSize === 1) {
			headData = null;
			listSize--;
			return "Data Popped";
		} else {
			while (next.nextNode) {
				prev = next;
				next = next.nextNode;
			}
			prev.nextNode = null;
			listSize--;
			return "Data Popped";
		}
	};
	const contains = (value) => {
		let next = headData;
		if (next.value === value) {
			return true;
		} else if (next.nextNode.value === value) {
			return true;
		} else {
			while (next.nextNode) {
				if (next.nextNode.value == value) {
					return true;
					break;
				}
				next = next.nextNode;
			}
		}
		return false;
	};
	const find = (value) => {
	    let count = 0;
    	let next = headData;
		if (headData.value === value) {
			return count
		} else if (headData.nextNode.value === value) {
		    return ++count
		} else {
			while (next.nextNode) {
				if (next.nextNode.value === value) {
					return ++count;
				}
				count++
				next = next.nextNode;
			}
		}
		return null;
	};
	const toString = () => {
		let next = headData;
		let string = ""
		if(next){
		string += `(${headData.value}) -> `;
		while (next.nextNode) {
			string += `(${next.nextNode.value}) -> `;
			next = next.nextNode;
		}
		    string += "null"
		}
		return string;
	};
	const insertAt = (value, index) => {
		let count = 1;
		let newNode = node(value)
		let past = headData;
		let next = headData.nextNode;

		if (index === 0) {
			headData = node(value, past);
		} else {
			while (count < index) {
				past = past.nextNode;
				next = next.nextNode;
				count++;
			}
			past.nextNode = newNode
			newNode.nextNode = next
		}
		listSize++;
		return "Data added";
	};
	const removeAt = (index) => {
		let count = 1;
		let past = headData;
		let next = headData.nextNode;
		let future = headData.nextNode.nextNode;

		if (index === 0) {
			headData = next;
		} else {
			while (count < index) {
				past = past.nextNode;
				next = next.nextNode;
				future = next.nextNode;
				count++;
			}
			past.nextNode = future;
		}
		listSize--;
		return "Data deleted";
	};
	return {
		append,
		prepend,
		size,
		head,
		tail,
		at,
		pop,
		contains,
		find,
		toString,
		insertAt,
		removeAt,
	};
}

function node(value = null, nextNode = null) {
	return { value, nextNode };
}