function rectangleCalculation(){
    const widthArea = document.getElementById('width-area')
    const widthValue = widthArea.value;
    const width = parseFloat(widthValue)
    console.log(width)


    const lengthArea = document.getElementById('length-area')
    const lengthValue = lengthArea.value;
    const length = parseFloat(lengthValue);
    console.log(length)

    const area = length *width;
    console.log(area);
    const rectangleArea = document.getElementById('rectangle-area')
    rectangleArea.innerText =area;
}