

function toggler(){
    var args = arguments
    var index = -1;

    return function (){
     index = index+1;
    
    return args[index]
}
}

const toggle = toggler(1,2,3)
// const toggle = toggler('on','off')

console.log(toggle()) //1

console.log(toggle()) //2

console.log(toggle()) //3

