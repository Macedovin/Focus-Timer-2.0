import {
  buttonPlay,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  audioButtonForest,
  audioButtonRain,
  audioButtonCoffeeShop,
  audioButtonFire,
  audioButtonBGAudio,
  audioVolumeControl
} from './elements.js'

export default function Events({ timer, controls, sounds, Sounds }) {
  buttonPlay.addEventListener('click', function () {
    timer.countDown()

    controls.play()

    sounds.pressButton()
  })

  buttonStop.addEventListener('click', () => {
    controls.stopPause()

    timer.hold()

    sounds.pressButton()
  })

  buttonIncrease.addEventListener('click', function () {
    timer.increase()

    sounds.pressButton()
  })

  buttonDecrease.addEventListener('click', function () {
    timer.decrease()

    sounds.pressButton()
  })

  audioButtonForest.addEventListener('click', function () {
    controls.toggleButtonForest()

    Sounds().toggleAudioPlay(sounds.forestAudio)

    sounds.rainAudio.pause()

    sounds.coffeeAudio.pause()

    sounds.fireAudio.pause()

    sounds.bgAudio.pause()
  })

  /* AUDIO EVENTS */

  audioButtonRain.addEventListener('click', function () {
    controls.toggleButtonRain()

    Sounds().toggleAudioPlay(sounds.rainAudio)

    sounds.forestAudio.pause()

    sounds.coffeeAudio.pause()

    sounds.fireAudio.pause()

    sounds.bgAudio.pause()
  })

  audioButtonCoffeeShop.addEventListener('click', function () {
    controls.toggleButtonCoffeeShop()

    Sounds().toggleAudioPlay(sounds.coffeeAudio)

    sounds.rainAudio.pause()

    sounds.forestAudio.pause()

    sounds.fireAudio.pause()

    sounds.bgAudio.pause()
  })

  audioButtonFire.addEventListener('click', function () {
    controls.toggleButtonFire()

    Sounds().toggleAudioPlay(sounds.fireAudio)

    sounds.rainAudio.pause()

    sounds.coffeeAudio.pause()

    sounds.forestAudio.pause()

    sounds.bgAudio.pause()
  })

  audioButtonBGAudio.addEventListener('click', function () {
    controls.toggleBuottonBGAudio()

    Sounds().toggleAudioPlay(sounds.bgAudio)

    sounds.rainAudio.pause()

    sounds.coffeeAudio.pause()

    sounds.fireAudio.pause()

    sounds.forestAudio.pause()
  })

  /* AUDIO VOLUME CONTROL */

  audioVolumeControl.addEventListener('input', function () {
    sounds.setVolume(sounds.forestAudio)

    sounds.setVolume(sounds.rainAudio)

    sounds.setVolume(sounds.coffeeAudio)

    sounds.setVolume(sounds.fireAudio)

    sounds.setVolume(sounds.bgAudio)
  })
}
