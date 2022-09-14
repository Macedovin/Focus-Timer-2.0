import Timer from './timer.js'

import Controls from './controls.js'

import Sounds from './sounds.js'

import Events from './events.js'

import {
  buttonPlay,
  buttonIncrease,
  buttonDecrease,
  audioButtonForest,
  audioButtonRain,
  audioButtonCoffeeShop,
  audioButtonFire,
  audioButtonBGAudio,
  audioControlSettings,
  minutesDisplay,
  secondsDisplay
} from './elements.js'

/* VARIÁVEIS DE IMPORTAÇÃO -> RECEBENDO O OBJETO DA FACTORY -> MÓDULOS */

const controls = Controls({
  buttonIncrease,
  buttonDecrease,
  buttonPlay,
  audioButtonForest,
  audioButtonRain,
  audioButtonCoffeeShop,
  audioButtonFire,
  audioButtonBGAudio,
  audioControlSettings
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetSet: controls.resetSet,
  disableButtonPlay: controls.disableButtonPlay,
  enableButtonPlay: controls.enableButtonPlay,
  hideTimeButtons: controls.hideTimeButtons,
  hideVolumeControls: controls.hideVolumeControls,
  showVolumeControls: controls.showVolumeControls
})

const sounds = Sounds()

Events({
  timer,
  controls,
  sounds,
  Sounds
})

/* EVENTS */
