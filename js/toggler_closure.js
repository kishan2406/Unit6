

function toggler(){
    var args = arguments
    var index = -1;

    return function (){
     
     index = index-1;
     if(index>=args.length)
     index=0;
    }
    return args(index)
}

const toggle = toggler(1,2,3)

toggle(1)
toggle(2)
toggle(3)
