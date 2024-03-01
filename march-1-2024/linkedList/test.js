describe('linked list',  function() {
    it('should return proper total', function() {

        let sum = 0

        let previous = null;
        let head = null;
        for(let i = 0; i < 100; i++) {
            const newNode = new Node(i)
            if (i === 0) {
                head = newNode
            } else {
                previous.next = newNode;
            }

            previous = newNode
            sum += i
        }

        expect(sum).toBe(getTotalsFromLinkedList(head))
    })

    it('should show proper string', function() {
        let previous = null;
        let head = null;
        let list = []
        for(let i = 0; i < 100; i++) {
            const newNode = new Node(i)
            if (i === 0) {
                head = newNode
            } else {
                previous.next = newNode;
            }

            list.push(newNode.val)
            previous = newNode
        }

        let expected = list.join(' -> ')
        let actual = logOutLinkedList(head)

        console.log(actual)

        expect(actual).toBe(expected)
        
    })

    it('should reverse the linked list', function() {
        let previous = null;
        let head = null;
        let list = []
        for(let i = 0; i < 100; i++) {
            const newNode = new Node(i)
            if (i === 0) {
                head = newNode
            } else {
                previous.next = newNode;
            }

            list.push(newNode.val)
            previous = newNode
        }

        let expected = list.reverse().join(' -> ')
        let previousTailNowTheHead = getReversedLinkedList(head)
        let actual = logOutLinkedList(previousTailNowTheHead)

        console.log(expected)
        console.log(actual)

        expect(actual).toBe(expected)
    })


})