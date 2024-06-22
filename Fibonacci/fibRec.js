function fibonacci(n){
    const array = [];
    if (n < 1) return []
    else if (n === 1 ) return [0]
    else if (n===2) {
        array.push(0,1)
        return array
    }
    else{
        const newArray = array.concat(fibonacci(n-1))
        let len = newArray.length
        newArray.push(newArray[len-1] + newArray[len -2])
        return newArray
    }
}

console.log(fibonacci(8))