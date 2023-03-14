

function fibonacciGenerator(n){
    let fibonacci = [0, 1]; 
    let newNumber = 0;
    for(let i = 0; i <= n; i++){
        console.log(fibonacci[i]); 
        newNumber = fibonacci[i] + fibonacci[i + 1];
        fibonacci.push(newNumber);
    }
}

fibonacciGenerator(4);