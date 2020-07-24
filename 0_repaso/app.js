function decimalToBinary(decimal){
    let  result= decimal;
    let  binary="";
    while(result>=1){
        binary+=result%2
        result = Math.trunc(result/2);    
        
    }
    console.log(binary.split("").reverse().join(""))
    return binary.split("").reverse().join("")
}

decimalToBinary(50)