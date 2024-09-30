
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

<<<<<<< HEAD



const convertValues = async () => {
=======
function convertValues() {
>>>>>>> 18295cfecc2d81ae4b279c9ed4726d46ff929e42
    const inputCurrencyValue = document.querySelector(".input-value").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras Moedas

<<<<<<< HEAD
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    console.log(data);
    

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = 6.22
    const bitcoinToday = 138153.33  
=======

    const dolarToday = 5.05
    const euroToday = 5.36
    const libraToday = 6.22
    const bitcoinToday = 138153.33
>>>>>>> 18295cfecc2d81ae4b279c9ed4726d46ff929e42



    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-image')

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = 'Dólar'
        currencyImage.src = './assets/dolar.png'
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro.png'
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = 'Libra'
        currencyImage.src = './assets/libra.png'
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = './assets/bitcoin.png'
    }

    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)