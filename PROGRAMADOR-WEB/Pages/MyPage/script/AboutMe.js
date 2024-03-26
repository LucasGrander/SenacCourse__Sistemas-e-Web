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

        overlay.style.animation = "cortinaPagina .7s ease-in forwards"
        setTimeout(() =>{
            window.location.href = "../html/index.html"
        }, 800)
    }

    // --------------------------- BOTÃO DE CIMA -------------------------------------------
    const sideBarProfile = document.getElementById("profile-pic");
        sideBarProfile.onclick = function(){
            var section = document.getElementById("container");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
            sideBarProfile.style.borderRight = "solid 7px white";
            sideBarProfile.style.backgroundColor = "#0000009d";
            sideBarProfile.style.transition = ".3s";

            sideBarDiploma.style.borderRight = "none";
            sideBarDiploma.style.backgroundColor = "transparent";

            sideBarLamp.style.borderRight = "none";
            sideBarLamp.style.backgroundColor = "transparent";

            //-------------------- CIMA ---- hover
        sideBarProfile.onmouseenter = function(){
            sideBarProfile.style.backgroundColor = "#0000009d"
        }
        sideBarProfile.onmouseleave = function(){
            sideBarProfile.style.backgroundColor = "#0000009d"
        }
//-------------------- MEIO ---- hover
        sideBarDiploma.onmouseenter = function(){
            sideBarDiploma.style.backgroundColor = "#0000009d"
        }
        sideBarDiploma.onmouseleave = function(){
            sideBarDiploma.style.backgroundColor = "transparent"
        }
//-------------------- BAIXO ---- hover
        sideBarLamp.onmouseenter = function(){
            sideBarLamp.style.backgroundColor = "#0000009d"
        }
        sideBarLamp.onmouseleave = function(){
        sideBarLamp.style.backgroundColor = "transparent"
    }
}

// --------------------------- BOTÃO DO MEIO -------------------------------------------
    const sideBarDiploma = document.getElementById("diploma-pic");
        sideBarDiploma.onclick = function(){

            var section2 = document.getElementById("container2");
            if (section2) {
                section2.scrollIntoView({ behavior: "smooth" });
            }

            sideBarDiploma.style.borderRight = "solid 7px white";
            sideBarDiploma.style.backgroundColor = "#0000009d";
            sideBarDiploma.style.transition = ".3s";

            sideBarProfile.style.borderRight = "none";
            sideBarProfile.style.backgroundColor = "transparent";

            sideBarLamp.style.borderRight = "none";
            sideBarLamp.style.backgroundColor = "transparent";

            //-------------------- CIMA ---- hover
        sideBarProfile.onmouseenter = function(){
            sideBarProfile.style.backgroundColor = "#0000009d"
        }
        sideBarProfile.onmouseleave = function(){
            sideBarProfile.style.backgroundColor = "transparent"
        }
//-------------------- MEIO ---- hover
        sideBarDiploma.onmouseenter = function(){
            sideBarDiploma.style.backgroundColor = "#0000009d"
        }
        sideBarDiploma.onmouseleave = function(){
            sideBarDiploma.style.backgroundColor = "#0000009d"
        }
//-------------------- BAIXO ---- hover
        sideBarLamp.onmouseenter = function(){
            sideBarLamp.style.backgroundColor = "#0000009d"
        }
        sideBarLamp.onmouseleave = function(){
            sideBarLamp.style.backgroundColor = "transparent"
        }
        }
// --------------------------- BOTÃO DE BAIXO -------------------------------------------
    const sideBarLamp = document.getElementById("lamp-pic");
        sideBarLamp.onclick = function(){

            var section3 = document.getElementById("container3");
            if (section3) {
                section3.scrollIntoView({ behavior: "smooth" });
            }

            sideBarLamp.style.borderRight = "solid 7px white";
            sideBarLamp.style.backgroundColor = "#0000009d";
            sideBarLamp.style.transition = ".3s";

            sideBarProfile.style.borderRight = "none";
            sideBarProfile.style.backgroundColor = "transparent";

            sideBarDiploma.style.borderRight = "none";
            sideBarDiploma.style.backgroundColor = "transparent";

            //-------------------- CIMA ---- hover
        sideBarProfile.onmouseenter = function(){
            sideBarProfile.style.backgroundColor = "#0000009d"
        }
        sideBarProfile.onmouseleave = function(){
            sideBarProfile.style.backgroundColor = "transparent"
        }
//-------------------- MEIO ---- hover
        sideBarDiploma.onmouseenter = function(){
            sideBarDiploma.style.backgroundColor = "#0000009d"
        }
        sideBarDiploma.onmouseleave = function(){
            sideBarDiploma.style.backgroundColor = "transparent"
        }
//-------------------- BAIXO ---- hover
        sideBarLamp.onmouseenter = function(){
            sideBarLamp.style.backgroundColor = "#0000009d"
        }
        sideBarLamp.onmouseleave = function(){
        sideBarLamp.style.backgroundColor = "#0000009d"
    }
}

window.addEventListener('scroll', function() {
    const icon = document.getElementById('profile-pic');
    const icon2 = document.getElementById('diploma-pic');
    const icon3 = document.getElementById('lamp-pic');

    const activeContainer = document.getElementById('container');
    const activeContainer3 = document.getElementById('container3');

    const containerPosition = activeContainer.getBoundingClientRect();
    const containerPosition3 = activeContainer3.getBoundingClientRect();

    if (containerPosition.top >= 0 && containerPosition.bottom <= window.innerHeight) {
        icon.style.backgroundColor = "#0000009d";
        icon.style.borderRight = "solid 7px white";
        icon3.style.backgroundColor = "transparent";
        icon3.style.borderRight = "none";
        icon2.style.backgroundColor = "transparent";
        icon2.style.borderRight = "none";

        icon.onmouseenter = function(){
        icon.style.backgroundColor = "#0000009d"
        }
        icon.onmouseleave = function(){
        icon.style.backgroundColor = "#0000009d"
        }

        icon2.onmouseenter = function(){
        icon2.style.backgroundColor = "#0000009d"
        }
        icon2.onmouseleave = function(){
        icon2.style.backgroundColor = "transparent"
        }

        icon3.onmouseenter = function(){
        icon3.style.backgroundColor = "#0000009d"
        }
        icon3.onmouseleave = function(){
        icon3.style.backgroundColor = "transparent"
        }

    } else if (containerPosition3.top >= 0 && containerPosition3.bottom <= window.innerHeight){
        icon3.style.backgroundColor = "#0000009d";
        icon3.style.borderRight = "solid 7px white";
        icon.style.backgroundColor = "transparent";
        icon.style.borderRight = "none";
        icon2.style.backgroundColor = "transparent";
        icon2.style.borderRight = "none";

        icon.onmouseenter = function(){
            icon.style.backgroundColor = "#0000009d"
            }
            icon.onmouseleave = function(){
            icon.style.backgroundColor = "transparent"
            }
    
            icon2.onmouseenter = function(){
            icon2.style.backgroundColor = "#0000009d"
            }
            icon2.onmouseleave = function(){
            icon2.style.backgroundColor = "transparent"
            }
    
            icon3.onmouseenter = function(){
            icon3.style.backgroundColor = "#0000009d"
            }
            icon3.onmouseleave = function(){
            icon3.style.backgroundColor = "#0000009d"
            }
            
    }else{
        icon3.style.backgroundColor = "transparent";
        icon3.style.borderRight = "none";
        icon.style.backgroundColor = "transparent";
        icon.style.borderRight = "none";
        icon2.style.backgroundColor = "#0000009d";
        icon2.style.borderRight = "solid 7px white";

        icon.onmouseenter = function(){
            icon.style.backgroundColor = "#0000009d"
            }
            icon.onmouseleave = function(){
            icon.style.backgroundColor = "transparent"
            }
    
            icon2.onmouseenter = function(){
            icon2.style.backgroundColor = "#0000009d"
            }
            icon2.onmouseleave = function(){
            icon2.style.backgroundColor = "#0000009d"
            }
    
            icon3.onmouseenter = function(){
            icon3.style.backgroundColor = "#0000009d"
            }
            icon3.onmouseleave = function(){
            icon3.style.backgroundColor = "transparent"
            }
    }
});