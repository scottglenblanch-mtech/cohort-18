describe('on initial load', () => {

    it('on the page should have a table element', () => {
        const tableElement = document.querySelector('table');
        console.log(tableElement)
        expect(tableElement).toBeTruthy();

    })

    it('on the page should have a table element with 3 rows', () => {
        const tableElement = document.querySelector('table');
        const rows = Array.from(tableElement.querySelectorAll('tr'));
        const expected = 3;
        const actual = rows.length
        expect(actual).toBe(expected)
    })

    it('on the page should have a table element with 3 rows', () => {
        const tableElement = document.querySelector('table');
        const rows = Array.from(tableElement.querySelectorAll('tr'));
        
        rows.forEach(function(rowElementItem) {
            const cellElements = Array.from(rowElementItem.querySelectorAll('td'));
            const expected = 3;
            const actual = cellElements.length;

            expect(actual).toBe(expected)
        })
    })
});

describe('it should handle players turns', () => {

    beforeEach(() => {
        resetBoard()
    })

    it('should show show a red circle when you click a square', () => {
        
        const firstCell = document.querySelector('tr td:first-child')

        firstCell.click();

        const circleElement = firstCell.querySelector(".circle.red")
        
        expect(circleElement).toBeTruthy()
    });

    it('should show show a red circle when you click a square, then a blue circle when you click a square', () => {
        
        const firstCell = document.querySelector('tr td:first-child')
        const secondCell = document.querySelector('tr td:nth-child(2)')
        firstCell.click();
        secondCell.click();

        const redCircleElement = document.querySelector('.red')
        const blueCircleElement = document.querySelector('.blue');
        
        expect(redCircleElement).toBeTruthy();
        expect(blueCircleElement).toBeTruthy();

    });

    it('should not add circle if cell is clicked again', () => {
        const firstCell = document.querySelector('tr td:first-child')
        const secondCell = document.querySelector('tr td:nth-child(2)')
        firstCell.click();
        firstCell.click();
        secondCell.click();
        secondCell.click();
        

        const redCircleElement = document.querySelector('.red')
        const blueCircleElement = document.querySelector('.blue');
        
        expect(redCircleElement).toBeTruthy();
        expect(blueCircleElement).toBeTruthy();
    });

    it('should have finished game when all nine cells are clicked', () => {
        const tdCells = Array.from(document.querySelectorAll('td'));

        tdCells.forEach((tdCellItem) => {
            tdCellItem.click();
        })

        const displayGameOverElement = document.querySelector('#display-game-over');
        const expected = 'Game Over';
        const actual = displayGameOverElement.textContent;

        expect(actual).toBe(expected)
    })
});
