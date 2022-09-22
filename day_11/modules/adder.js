function adder(num1,num2){
    return num1+multiplier(num1,num2);
}
function multiplier(num1,num2){
    return num1*num2;
}

//named export
//export {adder};

//export {adder as add};

// export default adder;
// export {multiplier};

export {multiplier,adder}