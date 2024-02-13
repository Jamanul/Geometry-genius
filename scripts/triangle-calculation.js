function triangleAreaCalculation() {
    const baseArea = document.getElementById('base-area');
    const baseAreaText = baseArea.value;
    const base = parseFloat(baseAreaText);
    console.log(base);

    const heightArea = document.getElementById('height-area');
    const heightAreaText = heightArea.value;
    const height = parseFloat(heightAreaText);
    console.log(height);

    const area = .50 * height * base;
    console.log('the area of this triangle is',area)
    const triangleArea = document.getElementById('triangle-area')
    triangleArea.innerText = area;
}