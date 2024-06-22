function merge(array , otherArray){
    const mergedArray = [];

    let i=0;
    let j=0;

    while (i < array.length && j < otherArray.length){
        if (array[i] < otherArray[j]){
            mergedArray.push(array[i]);
            i++;
        } else{
            mergedArray.push(otherArray[j]);
            j++;
        }

    }

    while (i < array.length){
        mergedArray.push(array[i]);
        i++;
    }

    while (j < otherArray.length){
        mergedArray.push(otherArray[j]);
        j++;
    }

    return mergedArray;
}


function mergeSort(array){
    if (array.length === 0)
        return array;
    if (array.length === 1)
        return array;

    const mid = Math.floor(array.length / 2);

    const leftArray = array.slice(0,mid);
    const rightArray = array.slice(mid,array.length);

    return merge(mergeSort(rightArray) , mergeSort(leftArray));
}


console.log(mergeSort([10, 7, 8, 9, 1, 5]));
console.log(mergeSort([30, 20, 10, 50, 22, 33, 55]));