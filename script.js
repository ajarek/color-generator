const container = document.querySelector('.container')

const callElements = () => {
   for (i = 1; i <= 100; i++) {
      r = Math.floor(Math.random() * 255)
      g = Math.floor(Math.random() * 255)
      b = Math.floor(Math.random() * 255)

      let div = document.createElement('div')
      div.classList.add('rectangles')
      div.style.background = `rgb(${r},${g},${b})`
      div.innerText = `rgb(${r},${g},${b})`
      container.appendChild(div)
   }
}
callElements()