function factorial(n){
    let result=1;
    let i=1;
    while (i<n) {
        if(i>n){
            console.log("se sale");
            break;
            
        }
        i++;
        result *=i;
    }
    return result;
}
console.log(factorial(10));