const key = "414ce79c95d7b8affc711ad00de3fe1e"

function colocarDadosNaTela(dados){
    console.log(dados)
document.querySelector(".cidade").innerHTML = "tempo em " + dados.name
document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
document.querySelector(".temp-previsao").innerHTML = dados.weather[0].description
document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
document.querySelector(".img-previsão").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}



 async function buscarCity(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${ key}&lang=pt_br&units=metric`).then(response =>response.json())

colocarDadosNaTela(dados)
}






function clickButton() {
    const cidade = document.querySelector(".input-city").value
   
    buscarCity(cidade)
}




