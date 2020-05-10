export default function mergeSort(arr) {
    var states = [];
    states.push([...arr]);
    _mergeSort(arr, 0, arr.length - 1);
    function _mergeSort(arr, l, r) {
        if (l < r) {

            let m = Math.floor(l + (r - l) / 2);

            _mergeSort(arr, l, m);
            _mergeSort(arr, m + 1, r);
            merge(arr, l, m, r);
            states.push([...arr]);
        }
    }
    return states;

    function merge(arr, start, mid, end) {
        var start2 = mid + 1;
    
        if (arr[mid] <= arr[start2]) {
            return;
        }
    
        while (start <= mid && start2 <= end) {
    
            if (arr[start] <= arr[start2]) {
                start++;
            }
            else {
                var value = arr[start2];
                var index = start2;
    
                while (index !== start) {
                    arr[index] = arr[index - 1];
                    index--;
                }
                arr[start] = value;
    
                states.push([...arr]);
                start++;
                mid++;
                start2++;
            }
        }
    }
}
