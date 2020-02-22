module.exports = class DepthCalculator {
    calculateDepth(arr,myValue) {
        if  ( myValue == undefined ) { 
            myValue = 1; 
        }
        let intermediateValue = myValue;
        for( let i = 0; i < arr.length; i++){
            if ( Array.isArray( arr[i] ) ){
                let depth = this.calculateDepth(arr[i], myValue + 1);
                if(depth > intermediateValue){
                    intermediateValue = depth;
                }
            }
        }
        return intermediateValue;
    }
};