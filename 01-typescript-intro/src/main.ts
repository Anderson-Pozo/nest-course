import './style.css'
// import { setupCounter } from './counter'
// import { charmander } from './bases/03-injection';
// import { charmander } from './bases/04-decorators';
import { charmander } from './bases/05-decorators2';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <div>
    <h1>Hello ${ charmander.name } ${ charmander.id }</h1>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  </div>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
