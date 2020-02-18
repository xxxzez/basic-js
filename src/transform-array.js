module.exports = function transform(arr) {
    if(!Array.isArray(arr)) throw Error;
    if(arr.length == 0) return arr;

    if (arr.includes('--discard-next')){
        let temp = arr.indexOf('--discard-next');
        if(arr[temp + 1] !== Number){
            arr.slice(temp, 1);
        } else {
            arr.splice(temp, 2);
        }
    }

    if (arr.includes('--discard-prev')){
        let temp = arr.indexOf('--discard-prev');
        if(arr[temp - 1] !== Number){
            arr.slice([temp - 1], 1);
        } else {
            arr.splice([temp - 1], 2);
        }
    }

    if (arr.includes('--double-next')){
        let temp = arr.indexOf('--double-next');
        if(arr[temp + 1] !== Number){
            arr.slice(temp, 1);
        } else {
            arr[temp] = arr[temp + 1];
        }
    }

    if (arr.includes('--double-prev')){
        let temp = arr.indexOf('--double-prev');
        if(arr[temp - 1] !== Number){
            arr.slice([temp - 1], 1);
        } else {
        arr[temp] = arr[temp - 1];
        }
    }
    return arr;
};
