module.exports = function transform(arr) {
    let arrNew = new Array();
    let a;
    if (!(arr instanceof Array)) {throw new Error;}
    if (arr.length === 0) {return arr;}
    for (let i=0; i< arr.length; i++) {

        if (arr[i] === '--discard-next' ) { 
            if (arr.length - 1 > i) {
                i = i + 1;;
            }
        } else {
            if (arr[i] === '--discard-prev') {
                if (i !== 0) {
                    arrNew.pop();
                }
            } else {
                if (arr[i] === '--double-next') {
                    if (arr.length - 1 > i) {
                        arrNew.push(arr[i + 1]);
                    }
                } else {
                    if (arr[i] === '--double-prev') {
                        if (i !== 0) {
                            arrNew.push(arr[i - 1]);
                        }
                    } else {
                        arrNew.push(arr[i]);
                        }
                    }
                
                }
            
        }    
    }
    return arrNew;
} 
    
    

