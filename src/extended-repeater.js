module.exports = function repeater(str, options) {
    let myWord = '';
    let repeatTimes = options.repeatTimes;
    let separator = options.separator;
    let addition = options.addition;
    let additionRepeatTimes = options.additionRepeatTimes;
    let additionSeparator = options.additionSeparator;

    repeatTimes = repeatTimes || 1;
    separator = separator || '+';
    addition = addition || '';
    additionRepeatTimes =  additionRepeatTimes || 1;
    additionSeparator = additionSeparator || '';
    
    for ( let i = 0; i < repeatTimes; i++) {
        myWord += str;
        for(let k = 0; k < additionRepeatTimes; k++) {
            myWord += addition;
            if(k < additionRepeatTimes - 1) {
                myWord += additionSeparator;
            }
        }
        if(i < repeatTimes - 1) {
            myWord += separator;
        }
    }
    return myWord;
};