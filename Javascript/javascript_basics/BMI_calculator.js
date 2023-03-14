function bmiCalculator (weight, height) {
    let yourBMI = Math.floor(weight / height**2); 
    let interpretation = ""; 
    if(yourBMI < 18.5){
        interpretation = `Your BMI is ${yourBMI} so you are underweight.`;
    }
    else if(yourBMI > 18.5 && yourBMI < 24.9){
        interpretation = `Your BMI is ${yourBMI} so you are normal weight.`;
    }
    else{
        interpretation = `Your BMI is ${yourBMI} so you are overweight.`;
    }
    
    console.log(yourBMI);
    return interpretation;
}

bmiCalculator(54, 1.54);