// LINEAR SEARCH //
function linear_search(arr, val) {

    for (let i of arr) {
        if (arr[i] == val) {
            return i;
        } elseif (arr[i] > val) {
            break;
        }
    }

    return null;
}
