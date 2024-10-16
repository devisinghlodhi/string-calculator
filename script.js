

function add(numbers){

    let delimiter = null;
    if (numbers.startsWith('//')) {
        delimiter = numbers.split('\n')[0].split("//")[1];
    }

    const regex = new RegExp(`[,\n${delimiter}]`);
    const newNumbersArray = numbers.split(regex);

    const negative_numbers = [];

    const total = newNumbersArray.reduce((acc, value)=>{
        if(!isNaN(Number(value))){
            acc += Number(value);
            if(Number(value) < 0){
                negative_numbers.push(Number(value))
            }
        }
        return acc
    }, 0)

    if(negative_numbers.length > 0){
        throw `negative numbers not allowed ${negative_numbers.join(", ")}`;
    }

    return total;
}


try {
    const result = add("//;\n1,2,3,4\n5,6;7,30")
    console.log(result)
} catch (error) {
    console.log(error)
}



