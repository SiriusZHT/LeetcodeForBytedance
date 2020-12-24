/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let x, y = 0, i = 0, l = height.length - 1;
    while (i < l) if ((x = (l - i) * (height[i] > height[l] ? height[l--] : height[i++])) > y) y = x;
    return y;
};

// 作者：xin-ru-zhi-shui-7t
// 链接：https://leetcode-cn.com/problems/container-with-most-water/solution/sheng-zui-duo-shui-de-rong-qi-js3xing-by-xin-ru-zh/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
