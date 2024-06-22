function fibonacci(n){
    const array = [];
    for (let i = 0 ; i < n ; i++){
        if (i === 0){
            array.push(i)
        }
        else if (i === 1){
            array.push(i)
        }
        else{
            array.push(array[i-1] + array[i-2])
        }
    }

    return array;
}


console.log(fibonacci(8))