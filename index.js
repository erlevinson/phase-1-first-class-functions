function receivesAFunction (spy){
    return spy()
}
receivesAFunction(function () { return "i am a spy" })


function returnsANamedFunction () {
    return function randoFunction() {
    }
}

function returnsAnAnonymousFunction () {
    return () => {    }
}