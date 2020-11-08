var prevData = "";

AFRAME.registerComponent('animation-control', {
    schema: {default: ''},
    init() {
        const bot = document.querySelector('#lecturer');  
          
        this.el.addEventListener('click', () => {
            bot.setAttribute("animation-mixer", this.data); 
            const obj = bot.sceneEl.object3D;
            console.log('-----------------', obj)
      }); 
    }
});