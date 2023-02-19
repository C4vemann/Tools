function LinkedList(){
	let root;
	let pointer;
	let length;
	constructor();

	function Node(n){
		let next;
		let id;
		constructor(n);

		function constructor(n){
			next = null;
			id = n;
		}

		function getNext(){ return next; }

		function setNext(node){ next = node; }

		function getId(){ return id; }

		function setId(n){ id = n; }

		return{
			getNext,
			getId,
			setNext,
			setId
		}
	}

	function constructor(){
		root = null;
		pointer = null;
		length = 0;
	}

	//push a node at the end of the list with the value of id
	//returns false if there is no id present
	//returns true if node was successfully inserted
	function push(id){
		if(id === null | id === undefined) return false;

		if(root === null){
			root = Node(id);
			pointer = root;
		} else {
			if(pointer.getNext() !== null) traverse();
			pointer.setNext(Node(id));
			pointer = pointer.getNext();
		}

		length++;

		return true;
	}

	//pops a node based off its id
	//returns false if there is no id
	//returns false if there is nothing in the list 
	//returns true if the node was successfully removed
	function pop(value){
		if(root === null | pointer === null | length === 0) return false;
		
		if(value === undefined | value === null){
			traverse(length - 2);
			pointer.setNext(null);
			length--;
			return true;
		}

		pointer = root;

		if(typeof value === 'string'){
			if(pointer.getId() === value){
				root = pointer.getNext();
				length--;
				return true;
			}

			while(pointer.getNext() !== null){
				if(pointer.getNext().getId() === value){
					pointer.setNext(pointer.getNext().getNext());
					length--;
					return true;
				}
				pointer = pointer.getNext();
			}
			
			if(pointer.getId() !== value) return false;
		}

		if(typeof value === 'number'){
			if(value >= length | value < 0) return false;

			if(value === 0){
				root = pointer.getNext();
				length--;
				return true;
			}

			let count = 0;
			while(pointer.getNext() !== null){
				if(count === value - 1) break;
				pointer = pointer.getNext();
				count++;
			}
			pointer.setNext(pointer.getNext().getNext());
			length--;
			return true;
		}

	}

	//returns false if pointer is null
	//returns false if root is null
	//returns false if length is null
	//returns false if value entered is larger that size of linked list
	//returns false if every value of string parameter has been checked and the final one checked doesn't match
	//returns id of pointer if true
	//returns pointer.getId() only for testing purposes
	//purpose of this function is to set the pointer to an index in the linked list
	//returns pointer
	function traverse(value){
		if(root === null | length === 0 | pointer === null) return false;	

		pointer = root;

		//traverses to the last element
		if(value === undefined | value === null){
			while(pointer.getNext() !== null){
				pointer = pointer.getNext();
			}
			return pointer;
		}

		//traverse to the element specified by idss
		if(typeof value === 'string'){
			while(pointer.getNext() !== null){
				if(pointer.getId() === value) break;
				pointer = pointer.getNext();
			}
			if(pointer.getId() !== value) return false;
			return pointer;
		}

		//traverse to the element specified by value
		if(typeof value === 'number'){
			if(value >= length | value < 0) return false;
			let count = 0;
			while(pointer.getNext() !== null){
				if(count === value) break;
				pointer = pointer.getNext();
				count++;
			}
			return pointer;
		}


	}


	//returns false if root is null
	//returns false if pointer is null
	//returns false if id is undefined
	//returns false if id is null
	//returns true if setting new node is successful
	function set(id,position){
		if(root === null | pointer === null | length === 0 | id === undefined | id === null | position < 0) return false;

		if(position === 0){
			let temp = root;
			root = Node(id);
			root.setNext(temp);
			return true;
		}

		if(position === undefined | position === null | position > length - 1){
			push(id);
			return true;
		}

		pointer = traverse(position-1);

		let temp = pointer.getNext();

		pointer.setNext(Node(id));
		pointer = pointer.getNext();
		pointer.setNext(temp);

		return true;

	}

	function print(){
		if(root === null | pointer === null | length === 0) return "List is empty";
		let string = "[";
		pointer = root;
		while(pointer.getNext() !== null){
			string += "{" + pointer.getId() + "},";
			pointer = pointer.getNext();
		}
		string += "{" + pointer.getId() + "}]";
		return string;
	}

	function getLength(){ return length; }

	function getRoot(){ return root; }

	function getPointer(){ return pointer; }

	return{
		push,
		pop,
		traverse,
		set,	
		print,	
		getRoot,
		getPointer,
		getLength,
	}
}
