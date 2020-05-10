export default function bubbleSort(inputArr) {
    let result = [];
    result.push([...inputArr]);
    _bubbleSort(inputArr);
    
    function _bubbleSort(inputArr) {
        let len = inputArr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (inputArr[j] > inputArr[j + 1]) {
                    let tmp = inputArr[j];
                    inputArr[j] = inputArr[j + 1];
                    inputArr[j + 1] = tmp;
                    result.push([...inputArr]);
                }

            }
        }
        return inputArr;
    }
    return result;
}

// console.log(bubbleSort([5,3,1,4,6]));
