import './style.scss'
import catIcon from './assets/icon_cat.png'
import dogIcon from './assets/icon_dog.png'

const initSample1 = () => {
  const addButton = document.querySelector<HTMLSelectElement>('.sample1 .addIconButton')
  const iconsArea = document.querySelector<HTMLElement>('.sample1 .icons')
  addButton?.addEventListener('click', () => {
    const icon = Math.random() > 0.5 ? catIcon : dogIcon
    const img = new Image()
    img.src = icon
    img.width = 128
    img.height = 128
    iconsArea?.appendChild(img)
  })
}

const initSample2 = () => {
  const rankSelect = document.querySelector<HTMLSelectElement>('.sample2 .rankSelect')
  const previewArea = document.querySelector<HTMLElement>('.sample2 .preview')
  rankSelect?.addEventListener('change', () => {
    if (!previewArea) {
      return
    }
    const rank = rankSelect.value
    if (rank) {
      previewArea.style.backgroundImage = `url(${rank}.png)`
    }
  })
}

initSample1()
initSample2()
