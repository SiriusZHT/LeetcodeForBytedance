/**
 * 输入一个数组,求出这个数组中的逆序对的总数。
例如在数组{7，5，6，4}中，一共存在 5 个逆序对，分别是(7,6), (7, 5), (7,4), (6,4), (5,4)。
 */
function findArrayReversedPairs(arr, compareFn){
    const result = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length ; j++){
            compareFn(arr[i],arr[j]) && result.push([arr[i],arr[j]]);
        }
    }
    return result;
}
const reversedPairs = (a, b) => {
    if(a > b) return true
}

/**
 * 以下是测试样例 
*/
console.log(findArrayReversedPairs([7,5,6,4], reversedPairs))