class Queue {
    constructor () {
        this.items = {};
        this.front = 0;
        this.end = 0;
    };

    enqueue(data){
        this.items[this.end] = data;
        this.end++;
    }
    
    dequeue() {
        if (this.front == this.end){ // no hay nada
            return null;
        };

        const data = this.items[this.front];//primer valor que entró, como una fila
        delete this.items[this.front];
        this.front++;
        return data;
    }

    getSize(){
        return this.end - this.front;
    }

    isEmpty(){
      if (this.getSize() == 0){
        return true;
      } else {
        return false;
      }  
    }

    peek(){
        if (this.getSize() == 0){
            return null;
        } 
        return this.items[this.front];
    }

    print(){
        if (this.getSize == 0){
            return null;
        }

        let result = '';
        let lenght = this.getSize();
        console.log(lenght);
        console.log(this.end)
        console.log(this.front);
        for (let i = this.front; i < this.end; i++) {
            result += this.items[i] + " ";
        };
        return result;
    }
};

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.enqueue("hola gente");
console.log(queue); 
console.log(queue.getSize());
console.log(queue.isEmpty());
console.log(queue.peek())
console.log(queue.print());