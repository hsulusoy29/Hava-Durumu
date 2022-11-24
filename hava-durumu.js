const url = "https://api.openweathermap.org/data/2.5/"
const key = "da1157a0bfc4f1f5930acfc336a4e8c5"

const getResult=(cityName)=>{
    let query=`${url}weather?q=${cityName}&appid=${key}&units=metric`
    fetch(query)    // fetch getirme işlemi yapıyor
    .then(weather=>{
        return weather.json()
    })
    .then(displayResult)  // cevap olduğunda response alıyor 
}

const displayResult=(result)=>{  //sonuç alarak parametreden atama yapıyoruz
    let city =document.getElementsByClassName('city')
    city.innerText=`${result.name}, ${result.sys.country}`

    let temp  =document.querySelector('.temp')
    temp.innerText=`${Math.round(result.main.temp)}°C`

    let nem =document.querySelector('.nem')
    nem.innerText=` ${Math.round(result.main.humidity)}`

    let hissedilen =document.querySelector('.hissedilen')
    hissedilen.innerText=` ${Math.round(result.main.feels_like)}°C`  

    let desc=document.querySelector('.desc')
    desc.innerText=`${result.weather[0].description}`
    
    let rüzgarhizi =document.querySelector('.rüzgarhizi')
    rüzgarhizi.innerText=` ${result.wind.speed}`

    let image=document.querySelector('.image')
    image.src=`https://countryflagsapi.com/png/${result?.sys.country}`
    
    let simage=document.querySelector('.simage')

    switch(result.weather[0].main ){

        case 'Clouds':
            simage.src="https://openweathermap.org/img/wn/04d@2x.png"
            document.body.style.backgroundImage = "url('buluuuu.jpg')"
            break;
        case 'Clear':
            simage.src="https://openweathermap.org/img/wn/01d@2x.png"
            document.body.style.backgroundImage = "url('clean.jpg')"
            break;
        case'Mist':
            simage.src="https://openweathermap.org/img/wn/50d@2x.png"
            document.body.style.backgroundImage = "url('sis.jpg')"
            break;    
    }
}

document.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){               // tuşa basıldığında searchbar çalışsın
        getResult(searchBar.value)
    }
  })