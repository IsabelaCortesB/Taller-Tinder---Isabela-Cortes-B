class MyProfile extends HTMLElement {
   
    static get observedAttributes() {
      return ['name', 'lastname', 'age', 'description', 'imagenperfil',"profesion", "ubicacion"];
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    attributeChangedCallback(propName, oldValue, newValue) {
      this[propName] = newValue;
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
          <link rel="stylesheet" href="./src/components/profile/style.css">
          <section>
            
          <div class= "card"> 

            
            
            <img  class="imagenChat" src="./img/chat.png">
            <img  class="imagenLogo" src="./img/logo.png">
            <img  class="imagenAjustes" src="./img/ajustes.png">

            
          
            
            <img  class="imagenProfesion" src="./img/profesion.png">
            <img  class="imagenUbicacion" src="./img/ubicacion.png">
            
            
            <div class="textoSuperior" >
              <h1 id="nombreUsuario">${this.name} ${this.lastname}, ${this.age}</h1>

              <h2>${this.profesion}</h2>
              <h2>${this.ubicacion}</h2>
            </div> 

            

            <img id="ImagenPerfil" src="${this.imagenperfil}">

            <img class="ImagenesOtras" src="./img/return.jpg">
            <img class="ImagenesOtras"src="./img/cancel.jpg">
            <img class="ImagenesOtras" src="./img/star.jpg">
            <img class="ImagenesOtras"src="./img/heart.jpg">
            <img class="ImagenesOtras" src="./img/turbo.jpg">
            
            <p>${this.description}</p>
          
          
          </div>
          </section>


          `;
    }
  }
  
  customElements.define('my-profile', MyProfile);
  export default MyProfile;
  
  