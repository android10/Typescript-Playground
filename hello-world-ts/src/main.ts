import { sayHello } from "./lib/utils";
import './style.css'


const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = `
<h1>Hello Vite!</h1>
<h2></h2>
<a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
var helloFernando = sayHello("Fernando Cejas!!!") 
console.log(helloFernando)
const greeting = document.querySelector<HTMLDivElement>('#greeting')!
greeting.innerText = helloFernando

