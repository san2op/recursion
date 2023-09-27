//merge sort


function mergeSort(arr){
    if (arr.length <= 1){
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);
    return mergeSort(leftSorted, rightSorted);
}

function merge(left, right){
    const result = [];
    let i = 0;
    let j = 0;
    
    while(i < left.length && j < right.length){
        if (left[i] <= right[j]){
            result.push(left[i]);
            i++;
        }
        else{
            result.push(right[i]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

//example

const arr = [5,9,5,7,8,3];
const sortedArray = mergeSort(arr);
console.log(sortedArray);