import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="app">
    <a href="./src/if-else-with-dom/dom.html" target="_blank">
      If else with dom
    </a>

        <a href="./src/switch/switch.html" target="_blank">
      Switch
    </a>

        <a href="./src/switch-bonus/switch-bonus.html" target="_blank">
      switch bonus
    </a>

      <a href="./src/array/array.html" class="array">array</a>

      <a href="./src/array_2/array-two.html" class="">Array two</a>
      <a href="./src/loops/loops.html" class="">Loops</a>
  </div>
`

