class MyCounter extends HTMLElement {
    // this is how you declare which props are you interested in
    static get observedAttributes() {
      return ["count","dislikes"];
      //variables 
    }
  
    attributeChangedCallback(propName, oldValue, newValue) {
      console.log("changed");
      this[propName] = newValue;
      this.mount();
    }
  
    // this is the method is triggered when the component is added to the document
    connectedCallback() {
      console.log("mounted");
      this.mount();
    }
  
    dissconnectedCallback() {
      console.log("unmounted");
      this.removeEventListeners();
      
    }
  //aca pongo las funciones con las variables 
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.onButtonClicked = this.onButtonClicked.bind(this);
      this.onButtonClickedDislikes = this.onButtonClickedDislikes.bind(this);
    }
  
    mount() {
      this.render();
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.shadowRoot
        .querySelector(".like")
        .addEventListener("click", this.onButtonClicked);

        this.shadowRoot
        .querySelector(".dislike")
        .addEventListener("click", this.onButtonClickedDislikes);
        
    }
  
    render() {
      console.log("render");
      // adding external styles to the component
      this.shadowRoot.innerHTML = `
          <link rel="stylesheet" href="./src/components/counter/style.css">
          <section>
            
            ${this.count || 0}
            <button class="like">Like</button>
            
            ${this.dislikes || 0}
            <button class="dislike"> Dislike</button>
          </section>
      `;
    }
  
    removeEventListeners() {
      this.shadowRoot
        .querySelector("button")
        .removeEventListener("click", this.onButtonClicked);
    }
  
    //aca coloco que va a hacer el boton 
    onButtonClicked() {
      console.log("clicked");
      const currentValue = Number(this.getAttribute("count")) || 0;
      this.setAttribute("count", currentValue + 1);
    }
    //funcion
    onButtonClickedDislikes() {
      console.log("clicked");
      const currentValue = Number(this.getAttribute("dislikes")) || 0;
      this.setAttribute("dislikes", currentValue + 1);
    }
  }
  
  customElements.define("my-counter", MyCounter);
  export default MyCounter;
  