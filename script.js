let numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    cubeWrapper = document.getElementById('cube-container'), appendCubeElement;

numbersArray.forEach((item, index) => {
    cubeWrapper.innerHTML += '<li data-item=' + item + '>' + item + '</li>'
})

shuffleNumbers = () => {
    let index = 0
    numbersArray = numbersArray.sort(() => { return 0.5 - Math.random() });
    cubeWrapper.innerHTML = ''
    while (index < numbersArray.length) {
        let cubeItem = document.createElement("li");
        cubeItem.innerHTML = numbersArray[index]
        cubeItem.setAttribute('data-item', numbersArray[index])
        cubeWrapper.appendChild(cubeItem)
        ++index;
    }
}