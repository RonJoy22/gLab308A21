//Pt 1: Stack Overflow
let counter = 0;
function increment(){
    counter++;
    return increment()
}
try{
    increment()
}catch(e) {  
    console.log(`Error: ${e}`)
    console.log(`The value of the counter is ${counter}`)
}


// //Pt 2: Trampolines
 let nestedArray = [[1,5],[4,[5],6],[7,8,[9]]];

const flatArray = (arr) => {
    let newArr = [];
    
    for(let i = 0; i < arr.length; i++ ){
        if(Array.isArray(arr[i])){
            newArr.push(...flatArray(arr[i]))
        }
        else{
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(flatArray(nestedArray))

const flatArrTwo = (arr, result = []) =>{
    if( typeof arr === 'number' || typeof arr === 'string'){ 
        return result.push(arr)

    }else{ 
        for(let i = 0; i< arr.length; i++){
            if(Array.isArray(arr[i])){
            
                flatArrTwo(arr[i], result)
            
            }else{
                result.push(arr[i])
            }
        }
    }

    
    return result;
}

const trampoline = (f, ...args) => {
    let result = f(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  }

console.log(trampoline(flatArrTwo, nestedArray))


//PART THREE: Deferred Execution
let holdNum = document.querySelector(".primeNumDiv");

const isPrime = (num) =>{

    if(num <= 1) return false;
    
    if(num >= 2){
        
        for(let i = 2; i < num; i++){
            
            if(num%i === 0){
                
                return false;
                
            }
        }l
    }
    return true;
}

const addPrimeNumbers = (n, count = 1, sum = 0) =>{
    if( count > n){
        window.alert(`Calculation is finished. The sum of all prime number is ${sum}`)
        return;
    }
    if(isPrime(count)){
        sum = sum + count;
        holdNum.innerHTML += `<h1>${count} </h1> <br/>`
    }
    setTimeout(()=> addPrimeNumbers(n, count + 1, sum),0)


}
let n = 1000;
addPrimeNumbers(n);