const container = document.querySelector('.container');
const col2 = document.querySelector('.col-2')
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide')

console.log(window.innerHeight, window.outerHeight, (container.clientHeight / 100) * (container.clientWidth / 100) )

if(container.clientWidth <= 768) {
const nodeList = [...document.querySelectorAll('.class')]
const slideList = [...slides]
nodeList.map((element, i) => {
    element.style.background = 'transparent'
} )

slideList.map((ele, i) => {
 
  let index = 2
  console.log(index)
  setInterval(() => {
    Number(ele.id) === index ? ele.style.display = 'block' : ele.style.display = 'none'

   index <= 3? index++ : index = 2
   
   console.log(index)
  }, 2000)

})


} else {


  const square = Math.floor((container.clientHeight / 170) * (container.clientWidth / 120))
  console.log(square)
  for(let i = 0; i< square; i++) {
    const elem = document.createElement('div')
    elem.style.height = `auto`
    elem.style.width = `auto`
    elem.style.borderBlockStart = '1px'
      elem.style.background = 'black'
      
  
    elem.id = i
    elem.className = 'class'
   col2.appendChild(elem)
  
    elem.addEventListener('mouseover', (e) => {
  
   const nodeList = [...document.querySelectorAll('.class')]
   console.log(nodeList.length / 3 , nodeList.length / 2)

    elem.style.transition = '.5s'
  
      elem.style.background = 'radial-gradient(circle, rgba(0,0,0,0.44342) 50%, rgba(0,0,0,0.32) 96%)'
   const interval = setInterval(() => {
      elem.style.transition = '2s'
      elem.style.backgroundColor = 'radial-gradient(circle, rgba(0,0,0,0.64342) 20%, rgba(0,0,0,0.82) 96%)'
   }, 2000)
  
    })
  }
}



const nodeList = [...document.querySelectorAll('.class')]

nodeList.map((element, i) => {
  if( i > 11 && i < 18) {
    element.style.background = 'radial-gradient(circle, rgba(0,0,0,0.44342) 50%, rgba(0,0,0,0.32) 96%)'
  }

 
} )




particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 1800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


