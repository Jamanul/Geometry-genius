function pentagonCalculate() {
    const pentagonBase = getInputById('pentagone-base');
    const pentagonHeight = getInputById('pentagone-height');
    const area2 = pentagonBase * pentagonHeight * 0.5;
    areaCalculation('pentagon-area', area2);
}

function getInputById(inputId2) {
    const inputField2 = document.getElementById(inputId2)
    const inputFieldText2 = inputField2.value;
    const input2 = parseFloat(inputFieldText2);
    return input2;
}
function areaCalculation(id2,area2){
    const element = document.getElementById(id2);
    element.innerText = area2;
}