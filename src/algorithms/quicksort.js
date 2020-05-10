export default function quickSort(arr) {
    let states = [];
    states.push([...arr]);
    _quickSort(arr, 0, arr.length -1);
    function _quickSort(arr, low, high) {
        if (low < high) {
            var pivot = partition(arr, low, high);

            _quickSort(arr, low, pivot - 1);
            _quickSort(arr, pivot + 1, high);

            states.push([...arr]);

        }
    }
    return states;

    function partition(arr, low, high) {
        var pivot = arr[high];
        var i = (low - 1); 
        for (var j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;

                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

                states.push([...arr]);
            }
        }

        temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1;
    }
}

