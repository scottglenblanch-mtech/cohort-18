function getSortedListFromBubbleSort(list) {
    let tmpList = list.slice(0);
    let countSteps = 0
    // don't include the first item
    for(let i = 1; i < tmpList.length; i ++) {
        for(let j = tmpList.length - 1; j >= i; j--) {
            const rightValue = tmpList[j];
            const leftValue = tmpList[j - 1]
            const isSwap = leftValue > rightValue;

            tmpList[j] = isSwap ? leftValue : rightValue;
            tmpList[j - 1] = isSwap ?  rightValue :  leftValue;

            countSteps++
        }
    }

    console.log('list length', list.length, 'count steps', countSteps)
    console.log('big O', 'O(n^2)')
    return tmpList;
}