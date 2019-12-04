let array = '6、1、2、7、9、3、4、5、10、8'.split('、');

function quicSort(array, box = []) {
    let compare = Math.min.apply(Math, array);
    let index = array.indexOf(compare.toString());
    array.splice(index, 1);
    box.push(compare)
    if (!array.length) return box;
    return quicSort(array, box)
};


function quickSort(array) {
    if (array.length == 2) {
        return array;
    }
    const target = array[0];
    const left = [];
    const right = [];
    const result = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < target) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    while (left.length > 0) {

    }

    return quickSort(left).concat(quickSort(right));

}
// console.log(quickSort(array))