// function parallelogramCalculation() {
//     const baseArea1 = document.getElementById('base-area1')
//     const baseValue1 = baseArea1.value;
//     const base1 = parseFloat(baseValue1)
//     console.log(base1)
//     const heightArea1 = document.getElementById("height-area1");
//     const heightAreaNum1 = heightArea1.value;
//     const height1 = parseFloat(heightAreaNum1);
//     console.log(height1);

//     const area = height1 * base1;
//     console.log(area)
//     const parallelogramArea = document.getElementById('parallelogram-area')
//     parallelogramArea.innerText =area;
// }



function parallelogramCalculation(){
    const base1 = inputValueTask('base-area1')
    console.log(base1);
    const height1 = inputValueTask('height-area1')
    console.log(height1);

    const area = base1 * height1;
    areaFieldTask('parallelogram-area',area)
}



function inputValueTask(inputValue){
    const inputField = document.getElementById(inputValue);
    const inputArea = inputField.value;
    const input = parseFloat(inputArea);
    return input;
}

function areaFieldTask(id, area){
    const element = document.getElementById(id)
    element.innerText = area;
} 