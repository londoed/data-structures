// BUBBLE SORT //
function bubble_sort(arr) {
    let sort_idx = arr.length - 1;
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < sort_idx; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                sorted = false;
            }
        }

        sort_idx--;
    }

    return arr;
}

function bubble_sort2(arr) {
    let len = arr.length;
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < len; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}
