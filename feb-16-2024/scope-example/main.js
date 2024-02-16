iAmGlobalScope = 'this variable is in global scope';

function runThis() {
    const iAmInLocalScope = 'this variable is in function scope'



    console.log(iAmInLocalScope)

    {
        const iamInABlockScope = 'this variable is in a blockScope'

        console.log(iamInABlockScope)
    }

    return function otherFunctionToReturn() {
        console.log(iAmInLocalScope, 'this variable is now also in lexical scope, aka a closure')
    
        return function otherFunctionToReturnToReallyConfuseYouAll() {
            console.log(iAmInLocalScope, 'this variable is once again in lexical scope, aka a closure')

        }
    }
}

runThis()()()