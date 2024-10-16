

function add(data){
    const numbers = data.trim();
    let delimiter = '';

    if (numbers.startsWith('//') && numbers.includes('\n')) {
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

document.getElementById('numberInput').addEventListener('input', function(e){
    outputContent.innerHTML = '';
})

document.getElementById('numberForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let inputString = document.getElementById('numberInput').value;
    const output = document.getElementById('output');
    const outputContent = document.getElementById('outputContent');
    
    try {
        // const result = add("//;\n1,2,3,4\n-5,,30")
        // const result = add("//;\n1,2,3,4\n-5,,30")
        // const result = add("//;\n1,2,3,4\n-5,,30")
        // inputString = "//;\n1,2,3,4\n-5,,30"
        const result = add(inputString)
        outputContent.innerHTML = `<p><strong>${result}</strong></p>`;
        console.log(result)
    } catch (error) {
        outputContent.innerHTML = `<p class="text-danger"><strong>${error}</strong></p>`;
        console.log(error)
    }
    
    output.classList.remove('d-none');
});

