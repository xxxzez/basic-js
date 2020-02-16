module.exports = function createDreamTeam(arr) {
    if (Array.isArray(arr) !== true) return false;
    let letters = [];
    for (let i = 0; i < arr.length; i++){
        if( typeof arr[i] === 'string'){
        let x = arr[i].trim();
        let y = x.slice(0,1);
        let z = y.toUpperCase();
        letters.push(z);
        }    
    }   
    letters.sort();
    let result = letters.join('');
    return result;
}