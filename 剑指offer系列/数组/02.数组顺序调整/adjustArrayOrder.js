/**
 *输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
 *这题进一步抽象就是满足一定条件的元素都移动到数组的前面，不满足的移动到后面。所以，需要有一个参数用来传递判断函数。
最优解法就是数组两头分别有一个指针，然后向中间靠拢。符合条件，就一直向中间移动；不符合条件，就停下来指针，交换两个元素；然后继续移动，直到两个指针相遇。
 * @class adjustArrayOrder
 */
class adjustArrayOrder{
    constructor(...args){
        for (let arg of args){
            if(Object.prototype.toString.call(arg).slice(8, -1) === "Array"){
                this.arr = [...arg],
                this.length = arg.length;
            }else if(Object.prototype.toString.call(arg).slice(8, -1) === "Function"){
                this.compareFn = arg;
            }
        }
    }
    change(arg){
        if(arg){
            this.arr = [...brr],
            this.length = brr.length;
        }
        let i = 0,
            j = this.length - 1;
        while (i < j) {
            while (i < this.length && this.compareFn(this.arr[i])) ++i;
            while (j >= 0 && !this.compareFn(this.arr[j])) --j;
            if (i < j) {
                this.swap(this.arr, i, j);
                ++i;
                --j;
            }
        }
        return this.arr;
    } 
    swap(arr, i, j){
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

/**
 * 以下是测试代码
 */

let arr = new adjustArrayOrder([1, 2, 3, 4], num => (num & 1) === 1)
console.log(arr.change());//[ 1, 3, 2, 4 ]
arr = null;