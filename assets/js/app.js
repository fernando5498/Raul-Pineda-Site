let header = document.getElementById('header')
let burger = document.getElementById('menu-burger')
let menu = document.getElementById('wrapper-menu-movile')
let bgMenu = document.getElementById('bg-fill-menu')
let navbar_links = document.querySelectorAll('.navbar-r .navbar-r__link')
let lastScrollTop = 0
let closeMenu = document.getElementById('close')

/* ----------------- SECTION ACTIVE ----------------- */
const sections = document.querySelectorAll("section")
const navLink = document.querySelectorAll(".navbar-r__link a")

window.addEventListener("scroll", function () {
    let idSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop) {
            idSection = section.getAttribute('id')
        }
    })
    // console.log(idSection);
    navLink.forEach(li => {
        li.classList.remove('active')
        if (li.dataset.page == idSection) {
            li.classList.add('active')
        }
    })
})


window.addEventListener('scroll', () => {

    if (window.scrollY > 100) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
})

navbar_links.forEach(element => {
    element.addEventListener('click', () => {
        menu.classList.remove('active')
        bgMenu.style.display = 'none'
    })
})

bgMenu.addEventListener('click', () => {
    menu.classList.remove('active')
    bgMenu.style.display = 'none'
})

burger.addEventListener('click', () => {
    menu.classList.add('active')
    bgMenu.style.display = 'block'
})

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active')
    bgMenu.style.display = 'none'

})
let itemExperience = document.querySelectorAll('.item-experience')
let experienceContent = document.querySelectorAll('.item-experience__content')
let sliderSubHeading = document.getElementById('slider-sub-heading')
let btnNext = document.getElementById('btn-next')
let btnPrev = document.getElementById('btn-prev')


/* --------------------- EXPERIENCE --------------------- */
itemExperience.forEach(item => {
    item.addEventListener('click', () => {
        item.lastElementChild.classList.toggle('active');
        item.firstElementChild.classList.toggle('active')

        itemExperience.forEach(item2 => {
            if (item2 !== item) {
                item2.lastElementChild.classList.remove('active');
                item2.firstElementChild.classList.remove('active')
            } else {
                console.log('hola');
            }
        })
    })
})

/* ----------------- SLIDERS SUB HEADING ---------------- */

sliderSubHeading.lastElementChild.style.left = "100%"
sliderSubHeading.style.transition = "all 600ms"
sliderSubHeading.lastElementChild.style.display = "none"
window.addEventListener('load', () => {
    let hFirsItemCurse = sliderSubHeading.children[0].getBoundingClientRect().height
    sliderSubHeading.style.height = hFirsItemCurse + "px"
})

btnNext.addEventListener('click', () => {
    sliderSubHeading.lastElementChild.style.display = "block"
    sliderSubHeading.style.transform = "translateX(-100%)"
    sliderSubHeading.firstElementChild.style.left = "-100%"
    sliderSubHeading.lastElementChild.style.left = "0%"
    let height2Div = sliderSubHeading.lastElementChild.getBoundingClientRect().height;
    sliderSubHeading.style.height = height2Div + "px"

})
btnPrev.addEventListener('click', () => {
    sliderSubHeading.style.transform = "translateX(0%)"
    sliderSubHeading.firstElementChild.style.left = "0%"
    sliderSubHeading.lastElementChild.style.left = "100%"
    let height1Div = sliderSubHeading.firstElementChild.getBoundingClientRect().height;
    sliderSubHeading.style.height = height1Div + "px"
    setTimeout(() => {
        sliderSubHeading.lastElementChild.style.display = "none"
    }, 600);
})

/* ----------------- DATOS DE PROYECTOS ----------------- */
let proyectList = [
    {
        type: "website",
        title: "Travel React",
        time: "19-Noviembre-2022",
        content:
            "Proyecto personal con React, estoy experimentando c??mo funciona este Framework y me ha gustado, este es solo uno de los primeros que he hecho pero buscare retos m??s complicados para subir mi nivel.",
        url: "https://test-travel-react.netlify.app/",
        github: "https://github.com/fernando5498/Travel-React",
        image: "assets/proyectos/react/travel-react.webp",
        tags: ["html", "css", "sass", "react"]
    },
    {
        type: "website",
        title: "Travel & Hotells",
        time: "28-Octubre-2022",
        content:
            `Este es uno de los proyectos que realice con el Bootcamp y prueba t??cnica de <a class='link' href='https://silveraenterprises.com/' target='_blank'>SilverEnterpise</a>, aprend?? demasiado con ellos, incluyendo el manejo de Shopify y la creaci??n de secciones din??micas con liquid, est?? p??gina es solo la base del sitio original.`,
        url: "https://travelhotells.netlify.app/",
        github: "https://github.com/fernando5498/Travek-Hotells",
        image: "assets/proyectos/js/travelhotells.webp",
        tags: ["html", "css", "sass", "js"]
    },
    {
        type: "website",
        title: "Wallpapers",
        time: "7-diciembre-2021",
        content:
            "Creada con Html,Css y JavaScript, me inspire con diferentes dise??os e implemente videos en bucle de alta calidad.",
        url: "assets/proyectos/js/Pagina-Wallpaper/index.html",
        github: "https://github.com/fernando5498/Pagina-Wallpaper",
        image: "assets/img/home/flor.webp",
        tags: ["html", "css", "js"]
    },

    {
        type: "website",
        title: "Evulus Tokens",
        time: "19-Febrero-2022",
        content:
            "Apoye en la creaci??n de algunas secciones de la p??gina oficial de Evulus, trabaje de manera FreeLancer y todo fue creado en base a bootstrap,html,css y javaScript.",
        url: "assets/proyectos/js/Evulus/index.html",
        github: "https://github.com/fernando5498/evulus-Inicio",
        image: "assets/img/home/evulus-home.webp",
        tags: ["html", "css", "sass", "bootstrap"]
    },
    {
        type: "website",
        title: "Mi Antiguo Portafolio",
        time: "24-Julio-2022",
        content:
            "Fue el primer portafolio que realice, tarde much??simo tiempo pero logre terminarlo, hasta ahora es uno de los proyectos con el que logro ver mi progreso pero me gust?? mucho.",
        url: "assets/proyectos/js/Portafolio-Principal/index.html",
        github: "https://github.com/fernando5498/Segundo-Portafolio",
        image: "assets/proyectos/js/Portafolio-Principal/primer-portafolio.webp",
        tags: ["html", "css", "sass", "bootstrap"]
    },
    {
        type: "video",
        title: "Two Feet I Feel Like I'm Drowning",
        time: "3-Enero-2022",
        content:
            "Siempre me ha gustado la musica y me encantaria seguir creando videos asi por mi cuenta, lo cree con after effects.",
        url: "https://www.youtube.com/embed/HcxUKjzbFhQ",
        image: "assets/img/home/two_feet-poster.webp",
        tags: ["premiere", "after-effects"]
    },
    {
        type: "video",
        title: "Video para RedesTopk",
        time: "19-octubre-2021",
        content:
            `Video Creado con Illustrator, After effects, Premiere y montado por Redestopk en su canal Oficial de Youtube, si gustan visiten su canal de youtube o sitio web <a class="link" href="https://www.redestopk.com/" target="_blank">redestopk.com</a>`,
        url: "https://www.youtube.com/embed/yh-xzSoGBNA",
        image: "assets/img/home/redestopk1.webp",
        tags: ["premiere", "after-effects"]
    },
    {
        type: "video",
        title: "RedesTopk Marketing",
        time: "1-octubre-2021",
        content:
            "Tuve la oportunidad de crearles un video a RedesTopk, les invito a visitar su canal es una empresa dedicada al Marketing.",
        url: "https://www.youtube.com/embed/W8mErtIAuwE",
        image: "assets/img/home/redestopk.webp",
        tags: ["premiere", "after-effects", "illustrator"]
    },
]
// Funcion para crear iconos tiene las url de las imagenes
function listIcons(array, father) {
    let icons = [
        {
            title: "html",
            url: "assets/img/icons/html.svg"
        },
        {
            title: "css",
            url: "assets/img/icons/css-icon.svg"
        },
        {
            title: "sass",
            url: "assets/img/icons/sass-icon.svg"
        },
        {
            title: "bootstrap",
            url: "assets/img/icons/bootstrap-icon.svg"
        },
        {
            title: "js",
            url: "assets/img/icons/js-icon.svg"
        },
        {
            title: "php",
            url: "assets/img/icons/php-icon.svg"
        },
        {
            title: "react",
            url: "assets/img/icons/react-icon.svg"
        },
        {
            title: "illustrator",
            url: "assets/img/icons/illustrator-icon.svg"
        },
        {
            title: "premiere",
            url: "assets/img/icons/premiere-icon.svg"
        },
        {
            title: "after-effects",
            url: "assets/img/icons/afterEffects-icon.svg"
        },

    ]
    let container = []
    array.forEach(tag => {
        icons.forEach(icon => {
            if (tag === icon.title) {
                let img = `<img data-tippy-content="${icon.title}" class="tooltip-ra" src="${icon.url}"/>`
                container.push(img)
            }
        })
    })

    let string = container.toString()
    father.innerHTML = string.replace(/,/g, "")
}


/* ------------------------ BTNS ----------------------- */
let btnPlay = document.getElementById("btn-play")
let btnVolver = document.getElementById("btn-volver")

btnPlay.addEventListener("click", () => {
    document.querySelector(".proyect-content").style.left = "-150%"
    document.querySelector(".swiper").style.right = "-150%"
    document.querySelector(".technologies-icons").style.bottom = "-10%"
    document.querySelector(".proyects-preview").classList.add("video-preview")
    document.querySelector(".container-video").style.opacity = "1"
    document.querySelector(".container-video").style.pointerEvents = "auto"
    setTimeout(() => {
        btnVolver.style.left = "0"
        btnVolver.style.animation = "hoverVolver 5s 1"
    }, 1500)
})



function bgPreviewContent() {
    proyectList.forEach(infoProyects => {
        let item = document.querySelector(".swiper-slide-active")
        if (infoProyects.title == item.firstElementChild.dataset.id) {
            switch (infoProyects.type) {
                case "website":
                    document.getElementById('btn-site').href = infoProyects.url
                    document.getElementById('btn-github').href = infoProyects.github
                    document.getElementById('btn-site').style.display = "flex"
                    document.getElementById('btn-github').style.display = "flex"
                    document.getElementById("btn-play").classList.add("d-none")
                    break;
                case "video":
                    document.getElementById('btn-site').style.display = "none"
                    document.getElementById('btn-github').style.display = "none"
                    document.getElementById("btn-play").classList.remove("d-none")
                    let iframeVid = `<iframe src="${infoProyects.url}?autohide=1" title="YouTube video player" data-title="${infoProyects.title}" frameborder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>`
                    let IframeHtml = document.querySelector(".iframe-vid iframe")
                    // filtro para que el video de youtube no se recarge y realize excesivas solicitudes a youtube 
                    if (IframeHtml) {
                        if (IframeHtml.dataset.title !== infoProyects.title) {
                            document.querySelector(".iframe-vid").innerHTML = iframeVid
                        }
                    } else {
                        document.querySelector(".iframe-vid").innerHTML = iframeVid
                    }

                    btnVolver.addEventListener("click", () => {
                        document.querySelector(".proyect-content").style.left = "0%"
                        document.querySelector(".swiper").style.right = "0%"
                        document.querySelector(".technologies-icons").style.bottom = "5%"
                        document.querySelector(".proyects-preview").classList.remove("video-preview")
                        document.querySelector(".container-video").style.opacity = "0"
                        document.querySelector(".container-video").style.pointerEvents = "none"
                        // cambiamos las propiedad del video para cortar la reproduccion y cambiamos el titulo para que la condicion del video de falso y lo corrija 
                        document.querySelector(".container-video iframe").src = infoProyects.url
                        document.querySelector(".container-video iframe").dataset.title = ""
                        btnVolver.style.left = "-100%"
                    })
                    break
                default:
                    break;
            }
            document.querySelector('.proyect-content__title').innerHTML = infoProyects.title
            document.querySelector('.proyect-content__time').innerHTML = infoProyects.time
            document.querySelector('.proyect-content__description').innerHTML = infoProyects.content
            document.querySelector(".proyects-preview").style.backgroundImage = "url(" + infoProyects.image + ")"
            // iconos 
            let technologiesIcons = document.querySelector(".technologies-icons")
            listIcons(infoProyects.tags, technologiesIcons)
        }
    })
}

function Proyects() {
    proyectList.forEach((proyect) => {
        // crea las imagenes 
        const imageProyect = document.createElement('div')
        imageProyect.classList.add('swiper-slide')
        imageProyect.innerHTML = `<img class="proyect-slider__item" data-id="${proyect.title}" src='${proyect.image}' alt='${proyect.title}' loading='lazy'>`
        document.getElementById("container-swiper").appendChild(imageProyect)
    })
}
Proyects()

// botones y animacion para los videos 




var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    keyboard: true,
    loop: true,
    speed: 300,
    slideToClickedSlide: true,
    spaceBetween: 230,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 0,
        modifier: 1,
        slideShadows: false,
    },
})
swiper.on('beforeTransitionStart', function () {
    bgPreviewContent()
});


