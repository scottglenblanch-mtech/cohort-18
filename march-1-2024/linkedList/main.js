class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

function getTotalsFromLinkedList(head) {
    let currentNode = head
    let sum = 0;
    while(currentNode !== null) {
        const val = currentNode.val;
        const nextNode = currentNode.next
        sum = sum + val

        // moving over the node to the next node
        currentNode = nextNode
    }
    return sum;
}

function logOutLinkedList(head) {
    let currentNode = head
    let list = []

    while(currentNode !== null) {
        const val = currentNode.val
        const nextNode = currentNode.next

        list.push(val)

        currentNode = nextNode
    }

    return list.join(' -> ')
}

function getReversedLinkedList(head) {
    let previousNode = null;
    let currentNode = head

    while(currentNode !== null) {
        const nextNode = currentNode.next

        // flip the pointer backwards
        currentNode.next = previousNode
        // moves everything up to the next node
        previousNode = currentNode;
        currentNode = nextNode
    }

    return previousNode
}

