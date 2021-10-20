const currencyElOne = document.getElementById('currency-one')
const currencyElTwo = document.getElementById('currency-two')
const amountOne = document.getElementById('amount-one')
const amountTwo = document.getElementById('amount-two')
const rateEl = document.getElementById('rate')
const swap = document.getElementById('swap')


// Fetch exchange rate and update the DOM 

function calculate() {
    const currencyValueOne =currencyElOne.value
    const currencyValueTwo =currencyElTwo.value

    fetch(`https://v6.exchangerate-api.com/v6/12861a7745d3ed7fef16aaef/latest/${currencyValueOne}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        const rate = data.conversion_rates[currencyValueTwo]
        rateEl.innerText = `1 ${currencyValueOne} = ${rate} ${currencyValueTwo}`

        amountTwo.value = (amountOne.value * rate).toFixed(2)
    })
}
currencyElOne.addEventListener('change', calculate)
amountOne.addEventListener('input', calculate)
currencyElTwo.addEventListener('change', calculate)
amountTwo.addEventListener('input', calculate)
swap.addEventListener('click',()=>{
    const temp = currencyElOne.value
    currencyElOne.value = currencyElTwo.value
    currencyElTwo.value = temp
    calculate()
})

calculate();
