

function add(numbers){
    const newNumbersArray = numbers.split(/[,\n]/);

    return newNumbersArray.reduce((acc, value)=>{
        if(!isNaN(Number(value))){
            acc += Number(value);
        }
        return acc
    }, 0)
}



const result = add("1,2,3,4\n5")
console.log(result)

