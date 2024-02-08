function switchExample(number) {

    switch(number) {
        case -1:
        case -2:
        case -3:
            return 'Number is either -1, -2, or -3'
        case 1:
            return 'Number is singular';
        case 2:
            return 'Number is binary';
        case 3:
            return 'Number is tertiary';
        default:
            return 'Input is not 1, 2, 3, -1, -2, -3'
    }

    /*
        Same as
        if (number === -1 || number === -2 || number === -3) {
            return 'Number is either -1, -2, or -3';
        } else if (number === 1) {
            return 'Number is singular';
        } else if (number === 2) {
            return 'Number is binary';
        } else if (number === 3) {
            return 'Number is tertiary';
        } else {
            return 'Input is not 1, 2, 3, -1, -2, -3'
        }
    */

}

function initializePage() {
    const input = prompt('Input a number');
    const message = switchExample(Number(input))

    alert(message)
}

initializePage()