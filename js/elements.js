/* VARIÁVEIS */

/* TIMER BUTTONS */

const buttonPlay = document.querySelector('.play')

const buttonStop = document.querySelector('.stop')

const buttonIncrease = document.querySelector('.increase')

const buttonDecrease = document.querySelector('.decrease')

/*  AUDIO BUTTONS */

const audioButtonForest = document.querySelector('button.forest')

const audioButtonRain = document.querySelector(`button.rain`)

const audioButtonCoffeeShop = document.querySelector('button.coffee-shop')

const audioButtonFire = document.querySelector('button.fire')

const audioButtonBGAudio = document.querySelector('button.bg-music')

/* VOLUME CONTROL */

const audioControlSettings = document.querySelector('.slider-wrapper')

const audioVolumeControl = document.querySelector('#audio-volume')

/* SETTTING TIMER CONTROLLERS */

const minutesDisplay = document.querySelector('#timer .minutes')

let minutes = Number(minutesDisplay.textContent)

const secondsDisplay = document.querySelector('#timer .seconds')

let seconds = Number(secondsDisplay.textContent)

export {
  buttonPlay,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  audioButtonForest,
  audioButtonRain,
  audioButtonCoffeeShop,
  audioButtonFire,
  audioButtonBGAudio,
  audioControlSettings,
  audioVolumeControl,
  minutesDisplay,
  secondsDisplay,
  minutes,
  seconds
}
