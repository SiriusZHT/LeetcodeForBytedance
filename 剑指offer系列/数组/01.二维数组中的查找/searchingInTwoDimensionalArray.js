/**
 *题目：在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数
 *思路：时间复杂度是 $O(N)$，空间复杂度是$O(1)$
 利用数组的排序性质：如果要查找的元素小于当前元素，那么一定不在当前元素左边的列；如果要查找的元素大于当前元素，那么一定在当前元素下面的行。
 * @param {Array} arr
 * @param {*} elem
 * @return {boolean} search res 
 */
function searchingInTwoDimensionalArray(arr, elem){
    let row = arr.length,//行
        col = arr[0].length;//列
    let i = 0,
        j = col - 1;//索引是从0开始
    while(i < row && j >= 0){
        if(elem === arr[i][j]){
            return true;
        }
        if(elem > arr[i][j]){
            i++;//大于说明不在这一行
        }else{
            j--;//小于说明在这一行，通过列自减找
        }数组顺序调整
    }
    return false;
}

/**
 * 以下是测试代码
 */

const arr = [[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]];

console.log(searchingInTwoDimensionalArray(arr, 8));
console.log(searchingInTwoDimensionalArray(arr, 1));
console.log(searchingInTwoDimensionalArray(arr, 145));