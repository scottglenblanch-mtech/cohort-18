describe('bubble sort', function() {
    const list = [3, 0, -1, 2, 5, 7, 9, 10, 0, 100]
    it('should return sorted list', function() {
        const expected = list.slice(0).sort((a, b) => a - b)
        const actual = getSortedListFromBubbleSort(list)

        expect(actual).toEqual(expected)
    });
});
