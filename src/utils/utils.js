import {
    MERGESORT,
    BUBBLESORT,
    HEAPSORT
} from './../constants/constants'
import mergeSort from './../algorithms/mergesort'
import bubbleSort from './../algorithms/bubblesort'
import heapSort from './../algorithms/heapsort'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export function generateArray(length) {
    let array = new Array(length);
    let set = new Set();
    for (var i = 0; i < array.length; i++) {
        array[i] = getRandomInt(3, 98);
    }
    return array;
}
export function getSortFn(algo) {
    switch (algo) {
        case MERGESORT:
            return mergeSort;
        case BUBBLESORT:
            return bubbleSort;
        case HEAPSORT:
            return heapSort;
        default:
            return mergeSort;
    }
}