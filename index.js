class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }


    //INSERT FIRST NODE
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    //INSERT LAST NODE
    insertLast(data) {
        let node = new Node(data);
        let current;

        //If empty, make head
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }

            current.next = node;

        }
        this.size++
    }

    //INSERT AT INDEX
    insertAt(data, index) {
        if(index > 0 && index > this.size){
            return;
        }
        if(index === 0) {
            this.insertFirst(data);
            return;
        }
        const node = new Node(data);
        let current, previous;
        current = this.head;
        let count = 0;

        while(count < index) {
            previous = current;
            count++;
            current = current.next;
        }

        node.next = current;
        previous.next = node;
        
        this.size++
    }

    //GET AT INDEX
    getAt(index) {
        let current = this.head;
        let count = 0;

        while(current) {
            if(count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
        return null;
    }

    //GET FIRST
    getFirst() {
        let current = this.head;
        if(current) {
            console.log(current.data);
        }
    }
    //GET LAST
    getLast() {
        let current = this.head;
        if(!current.next){
            console.log(current.data);
        }
        let count = 0;
        while (count < this.size) {
            if(count === this.size - 1){
                console.log(current.data);
            }
            current = current.next;
            count++;
        }
    }

    //REMOVE AT INDEX
    removeAt(index) {
        if(index > 0 && index > this.size){
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        if(index === 0){
            this.head = current.next;
        } else {
            while(count < index){
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }

        this.size--;
    }

    //REMOVE LAST
    removeLast(){
        let current = this.head;
        if(!current.next){
            this.head = null;
            return;
        }
        let count = 0;
        let previous;
        while(count < this.size){
            if(count === this.size - 1) {
                previous.next = null;
            }
            previous = current;
            current = current.next;
            count++;
        }
    }

    //REMOVE FIRST
    removeFirst(){
        let current = this.head;
        if(!current.next){
            this.head = null;
            return;
        }
        this.head = current.next;
        this.size--;
    }
    //CLEAR LIST
    clearList() {
        this.head = null;
        this.size = 0;
    }
    //PRIST LIST DATA 
    printListData() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertLast(200);
ll.insertLast(300);
ll.insertLast(700);
ll.insertAt(500, 1);

ll.removeLast();
ll.printListData();