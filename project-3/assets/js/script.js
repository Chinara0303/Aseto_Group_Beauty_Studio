
function uppercaseAz(text) {
    let azChars = {
        "ə": "Ə",
        "ç": "Ç",
        "ş": "Ş",
        "ü": "Ü",
        "ö": "Ö",
        "ğ": "Ğ",
        "ı": "I",
        "i": "İ"
    };
    return text.replace(/[əçşüöğıi]/g, function (match) {
        return azChars[match];
    });
}

function transformAzText() {
    let elements = document.querySelectorAll("[data-uppercase-az]");
    elements.forEach(function (element) {
        element.textContent = uppercaseAz(element.textContent);
    });
}
transformAzText();


$(function () {
    $('.employees-gallery').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
})




let mainNavbar = document.querySelector(".main-navbar");

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        mainNavbar.classList.add("active-navbar");
    } else {
        mainNavbar.classList.remove("active-navbar")
    }
});

let openIcon = document.querySelector('.burger-menu');
let closeIcon = document.querySelector('.close-menu');
let navbar = document.querySelector('.responsive-navbar');
let navLinks = document.querySelectorAll('.responsive-navbar ul li a')

openIcon.addEventListener('click', function () {
    navbar.classList.add('active-responsive-navbar')
})
closeIcon.addEventListener("click", function () {
    navbar.classList.remove('active-responsive-navbar')
})
navLinks.forEach((navLink => {
    navLink.addEventListener("click", function () {
        navbar.classList.remove('active-responsive-navbar')
    })
}))


let settingIcon = document.querySelector('.setting-icon');
let settingArea = document.querySelector('.setting-area');

settingIcon.addEventListener('click', function () {
    settingArea.classList.toggle('active-switch')
})