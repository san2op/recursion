//fibonacci number iteratively

function fibs(n){
    let fibArray = [0, 1];

    for (let i = 2; i < n ; i++){
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
    return fibArray;
}

console.log(fibs(8));


//fibonacci number recursively

function fins(n){
    if (n <= 1){
        return n;
    }
    return fibs(n - 1) + fibs(n - 2);
}

console.log(fibs(8));