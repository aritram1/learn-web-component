class progressbar extends HTMLElement{
    percentage = 50;
    constructor(){
        super();
        
        //Create shadow root and add style element
        const shadow = this.attachShadow({mode : 'open'});
        let style = document.createElement('style');
        style.setAttribute('src', './progressbar.css');
        shadow.appendChild(style);

        //Create the progress bar div
        let bar = document.createElement('div');
        bar.style.width = `${this.percentage}px`;
        bar.style.height = '20px';
        bar.style.backgroundColor = 'blue';
        bar.setAttribute('id','bar');
        bar.classList.add('bar');
        shadow.appendChild(bar);
        
        // Create and add control
        let inp = document.createElement('input');
        inp.setAttribute('type', 'number');
        let that = this;
        inp.addEventListener('change', (ev)=>{
            let p = ev.target.value;
            console.log('I am clicked! Value being sent in event : ' + p);
            //this.dispatchEvent(new CustomEvent('progressBarChange'), {v : p});
            //that.percentage = p;
            const bar = this.shadowRoot.getElementById('bar');
            bar.style.width = `${p <= 100 ? p : 100}px`;
        });
        shadow.appendChild(inp);
    }

    connectedCallback(){
        console.log('Inside connetedCallback');
    }

    static get observedAttributes() {
        return ['percentage'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`${name}'s value has been changed from ${oldValue} to ${newValue}`);
        if(name == 'percentage'){
            const bar = this.shadowRoot.getElementById('bar');
            let width = newValue <= 100 ? newValue : 100;
            bar.style.width = `${width}px`;
        }
    }
}
customElements.define('progress-bar', progressbar);

function createAndAddButton(element){
    //Add the input element to control the progress bar 
    // let inp = document.createElement('input');
    // inp.setAttribute('type', 'number');
    // inp.addEventListener('change', (e)=>{
    //     console.log('I am clicked! Value being sent in event : ' + e.target.value);
    //     this.dispatchEvent(new CustomEvent('progressBarChange'), {v : e.target.value});
    //     element.percentage = e.target.value;
    // });
    // element.shadowRoot.appendChild(inp);

    //TBD
    // element.addEventListener('progressBarChange', (ev)=>{
    //     console.log('progressbar change event handled. value received : ' + ev.detail.v);
    // });
}