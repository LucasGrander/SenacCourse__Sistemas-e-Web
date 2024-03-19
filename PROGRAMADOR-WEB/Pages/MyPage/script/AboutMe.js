window.sr = ScrollReveal({reset : true });

//nav bar
sr.reveal('nav span',{
    rotate: {x: 1000, y: 800, z: 300},
    duration: 1000,
})

sr.reveal('nav li a',{
    rotate: {x: 1000, y: 800, z: 300},
    duration: 4000,
})


//minha foto da pág:
sr.reveal('header .mid-content .left img',{
    rotate: {x: 1000, y: 100, z: 1000},
    duration: 1000
})


//nome e sobrenome
sr.reveal('.mid-content .apelid',{
    rotate: {x: 1000, y: 100, z: 3000},
    duration: 5500
})

sr.reveal('.mid-content .name',{
    rotate: {x: 1000, y: 800, z: 300},
    duration: 4000
})


const style = document.createElement('style');
document.head.appendChild(style);

const keyframes = `
  @keyframes cortinaPagina {
    from {
      width: 0%;
    }
    to {
        width: 100%;
    }
  }
`;
style.sheet.insertRule(keyframes, 0)

const arrowMainPage = document.getElementById('cima');
const arrowMainIndex = document.getElementById('baixo');

    arrowMainPage.onmouseenter = function(){
        arrowMainPage.style.rotate = "90deg";
        arrowMainPage.style.transition = ".5s";
        arrowMainPage.style.opacity = "0";
    }

    arrowMainPage.onmouseleave = function(){
        arrowMainPage.style.rotate = "0deg";
        arrowMainPage.style.transition = ".5s";
        arrowMainPage.style.opacity = "1";
    }

    arrowMainPage.onclick = function(){
        const overlay = document.getElementById("overlay");

        overlay.style.animation = "cortinaPagina 1s ease-in-out forwards"
        setTimeout(() =>{
            window.location.href = "../html/index.html"
        }, 1000)
    }