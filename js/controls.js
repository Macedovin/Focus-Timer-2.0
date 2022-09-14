export default function Controls({
  buttonIncrease,
  buttonDecrease,
  buttonPlay,
  audioButtonForest,
  audioButtonRain,
  audioButtonCoffeeShop,
  audioButtonFire,
  audioButtonBGAudio,
  audioControlSettings
}) {
  function play() {
    enableButtonPlay()
  }

  function stopPause() {
    enableButtonPlay()

    showVolumeControls()

    addTimeButtons()
  }

  function resetSet() {
    buttonIncrease.classList.remove('hide')
    buttonDecrease.classList.remove('hide')

    showVolumeControls()
  }

  function hideTimeButtons() {
    buttonIncrease.classList.add('hide')
    buttonDecrease.classList.add('hide')
  }

  function addTimeButtons() {
    buttonDecrease.classList.remove('hide')
    buttonIncrease.classList.remove('hide')
  }

  function enableButtonPlay() {
    buttonPlay.disabled = false
  }

  function disableButtonPlay() {
    buttonPlay.disabled = true
  }

  function showVolumeControls() {
    audioControlSettings.classList.remove('hide')
  }

  function hideVolumeControls() {
    audioControlSettings.classList.add('hide')
  }

  function toggleButtonForest() {
    audioButtonRain.classList.remove('chosen')

    audioButtonCoffeeShop.classList.remove('chosen')

    audioButtonFire.classList.remove('chosen')

    audioButtonBGAudio.classList.remove('chosen')

    audioButtonForest.classList.toggle('chosen')
  }

  function toggleButtonRain() {
    audioButtonForest.classList.remove('chosen')

    audioButtonCoffeeShop.classList.remove('chosen')

    audioButtonFire.classList.remove('chosen')

    audioButtonBGAudio.classList.remove('chosen')

    audioButtonRain.classList.toggle('chosen')
  }

  function toggleButtonCoffeeShop() {
    audioButtonForest.classList.remove('chosen')

    audioButtonRain.classList.remove('chosen')

    audioButtonFire.classList.remove('chosen')

    audioButtonBGAudio.classList.remove('chosen')

    audioButtonCoffeeShop.classList.toggle('chosen')
  }

  function toggleButtonFire() {
    audioButtonForest.classList.remove('chosen')

    audioButtonRain.classList.remove('chosen')

    audioButtonCoffeeShop.classList.remove('chosen')

    audioButtonBGAudio.classList.remove('chosen')

    audioButtonFire.classList.toggle('chosen')
  }

  function toggleBuottonBGAudio() {
    audioButtonForest.classList.remove('chosen')

    audioButtonRain.classList.remove('chosen')

    audioButtonCoffeeShop.classList.remove('chosen')

    audioButtonFire.classList.remove('chosen')

    audioButtonBGAudio.classList.toggle('chosen')
  }

  return {
    play,
    stopPause,
    resetSet,
    hideTimeButtons,
    disableButtonPlay,
    enableButtonPlay,
    addTimeButtons,
    toggleButtonForest,
    toggleButtonRain,
    toggleButtonCoffeeShop,
    toggleButtonFire,
    toggleBuottonBGAudio,
    showVolumeControls,
    hideVolumeControls
  }
}
