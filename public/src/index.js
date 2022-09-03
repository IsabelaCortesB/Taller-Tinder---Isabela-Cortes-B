import * as components from './components/index.js';
import data from './components/data.js';

console.log(data);

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); 
  }

  connectedCallback() {
    this.render();
  }

  render() {
    data.forEach((element) => {
      this.shadowRoot.innerHTML += `
      <my-profile name="${element.name}" lastname="${element.lastname}" age="${element.age}" description="${element.description}"  imagenperfil="${element.imagenperfil}" profesion="${element.profesion}" ubicacion="${element.ubicacion}"  ></my-profile>
      <my-counter></my-counter>
      `;
    });
    
  }
}

customElements.define('app-container', AppContainer);


