const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let clasificacion = ''

    if (imc < 18.5) {
      clasificacion = 'abajo de peso'
    } else if (imc < 25) {
      clasificacion = 'Peso normal'
    } else if (imc < 30) {
      classificaion = 'encima del peso'
    } else if (imc < 35) {
      clasificacion = 'obesidad de grado 1'
    } else if (imc < 41) {
      clasificacion = 'obesidad de grado 2'
    } else {
      clasificacion = 'obesidad de grado 3'
    }
    
    resultado.innerHTML = `IMC: ${imc} (${clasificacion})`
  } 
}