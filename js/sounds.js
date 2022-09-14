import { audioVolumeControl } from './elements.js'

export default function Sounds() {
  const buttonPressAudio = new Audio('./sounds/button_press.wav')

  const kitchenTimer = new Audio('./sounds/kitchen_timer.mp3')

  const forestAudio = new Audio('./sounds/floresta.wav')

  const rainAudio = new Audio('./sounds/chuva.wav')

  const coffeeAudio = new Audio('./sounds/cafeteria.wav')

  const fireAudio = new Audio('./sounds/lareira.wav')

  const bgAudio = new Audio('./sounds/bg_audio.mp3')

  forestAudio.loop = true

  rainAudio.loop = true

  coffeeAudio.loop = true

  fireAudio.loop = true

  bgAudio.loop = true

  function toggleAudioPlay(myAudio) {
    let isPaused = myAudio.paused

    if (isPaused) {
      myAudio.play()
    } else {
      myAudio.pause()
    }
  }

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function setVolume(myAudio) {
    myAudio.volume = audioVolumeControl.value
  }

  return {
    pressButton,
    timeEnd,
    forestAudio,
    bgAudio,
    coffeeAudio,
    fireAudio,
    rainAudio,
    toggleAudioPlay,
    setVolume
  }
}
