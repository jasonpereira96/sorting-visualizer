/* l is for left index and r is right index of the  
   sub-array of arr to be sorted */
export default function mergeSort(arr) {
    var states = [];
    states.push([...arr]);
    _mergeSort(arr, 0, arr.length - 1);
    function _mergeSort(arr, l, r) {
        if (l < r) {

            // Same as (l + r) / 2, but avoids overflow 
            // for large l and r 
            let m = Math.floor(l + (r - l) / 2);

            // Sort first and second halves 
            _mergeSort(arr, l, m);
            _mergeSort(arr, m + 1, r);
            merge(arr, l, m, r);
            states.push([...arr]);
        }
    }
    return states;

    function merge(arr, start, mid, end) {
        var start2 = mid + 1;
    
        // If the direct merge is already sorted 
        if (arr[mid] <= arr[start2]) {
            return;
        }
    
        // Two pointers to maintain start 
        // of both arrays to merge 
        while (start <= mid && start2 <= end) {
    
            // If element 1 is in right place 
            if (arr[start] <= arr[start2]) {
                start++;
            }
            else {
                var value = arr[start2];
                var index = start2;
    
                // Shift all the elements between element 1 
                // element 2, right by 1. 
                while (index !== start) {
                    arr[index] = arr[index - 1];
                    index--;
                }
                arr[start] = value;
    
                states.push([...arr]);
                // Update all the pointers 
                start++;
                mid++;
                start2++;
            }
        }
    }
}
let arr = [2, 51, 48, 97, 12, 19, 0, 2, 44, 55];
let states = mergeSort(arr);
console.log(states);