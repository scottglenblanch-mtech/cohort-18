function getSortedListFromInsertionSort(list) {
    let tmpList = list.slice(0);

    for(let i = 0; i < tmpList.length; i++) {
        let rightValue = tmpList[i]
        
        for(let j = i; j >= 0; j--) {
            const leftValue = tmpList[ j - 1]
            const isSwap = leftValue > rightValue;
            const isTerminateEarly = !isSwap;

            tmpList[j] = isSwap ? leftValue : rightValue

            if (isTerminateEarly) {
                break;
            }
        }
    }

    return tmpList
}