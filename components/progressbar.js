class progressbar extends HTMLElement{
    percentage = 50;
    constructor(){
        super();
        
        //Create shadow root and copy template content to shadowRoot
        const shadow = this.attachShadow({mode : 'open'});
            
        let container = document.querySelector('#container');
        console.log('container' + container);
        shadow.appendChild(container.cloneNode(true));

        //Create the progress bar div
        let bar = document.createElement('div');
        bar.classList.add('bar');
        shadow.appendChild(bar);

        // Create style and add in component
        // now being done declaratively. Hence commented out.
        // See the template import for details.
        // let style = document.createElement('style');
        // style.setAttribute('src', './progressbar.css');
        // shadow.appendChild(style);    
    }

    connectedCallback(){
        const bar = document.querySelector('.bar');
        let width = this.percentage <= 100 ? this.percentage : 100;
        bar.style.width = `${width} px`;
        console.log('Inside connetedCallback');
        this.attachEventHandlers(this);
    }

    attachEventHandlers(element){
        console.log('Inside attachHandlers->');
        console.log(element.shadowRoot);
    }

    //b = document.querySelector();
}
customElements.define('progress-bar', progressbar);


//////////////////////////////////////////////////////////////////////OUTSIDE SHADOW ////////////////////////////
/*
The progress bar element can be created from javascript from three places. 
    1. From the components <script> tag.
    2. From the components js file (like here)
    3. From the place where  it is being used.
*/
// //create the progress bar
// const progressbar = document.createElement('progress-bar');
// document.body.append(progressbar);