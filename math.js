const Answer=document.getElementById('Answer')

Answer.addEventListener('click', mathproblem)

function mathproblem() {
    const a = parseFloat(document.getElementById('A').value);
    let x;

    if(a>100) {x=0;}
    else if (a<61) {x=a;}
    else {x=Math.pow(a,4);}

    document.getElementById('X').value = x
}