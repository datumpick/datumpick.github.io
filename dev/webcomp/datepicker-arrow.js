/* Define the Date-Picker Arrow component */
(function(){
    const template = document.createElement('template');
    
    // Component HTML
    template.innerHTML = `
    <!-- Style Definition -->
    <style>
    .arrowbox {
        display: inline-block;
        min-width: 50px;
        text-align: center;
        padding: 8px;
        border: none;
        vertical-align: middle;
        font-size: 40px;
    }
    </style>
    
    <!-- Layout Definition -->
    <div class="arrowbox"></div>`
    
    // Define custom element
    customElements.define('picker-arrow',
    class extends HTMLElement {
        constructor() {
            super().append(template.content.cloneNode(true));
        }
        
        connectedCallback() {
            // Set arrow text           
            //this.querySelector('.arrowbox').innerHTML = `&nbsp;${this.id === 'al'?'&lt;':'&gt;'}&nbsp;`;
            // Set initial colour
            this.week=0
            this.render();

            // Listen for events on the Event Bus (parent node)
            this.parentNode.addEventListener('changeWeek', (e) => {
                this.week += e.detail.change;
                if (this.week < 0) this.week = 0;
                this.render();
            });
        }
        
        render() {
            this.style.color = (this.id === 'al' && this.week === 0) ? '#CCCCCC' : '#000000';
        }
        
        
    });
}) ();