

function add(numbers){

    let delimiter = null;
    if (numbers.startsWith('//')) {
        delimiter = numbers.split('\n')[0].split("//")[1];
    }

    const regex = new RegExp(`[,\n${delimiter}]`);
    const newNumbersArray = numbers.split(regex);

    return newNumbersArray.reduce((acc, value)=>{
        if(!isNaN(Number(value))){
            acc += Number(value);
        }
        return acc
    }, 0)
}



const result = add("//;\n1,2,3,4\n5,-6;7")
console.log(result)

