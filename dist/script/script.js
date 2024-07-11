// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navigation');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
})

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}

// window di scroll navbar nya ilang
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-Top');

    if (window.pageYOffset > fixedNav) {
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// Darkmode toggle
const darkToggleDua = document.querySelector('#dark-toggle-2');
const htmlDua = document.querySelector('html');

darkToggleDua.addEventListener('click', function () {
    if (darkToggleDua.checked) {
        htmlDua.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        htmlDua.classList.remove('dark');
        localStorage.theme = 'light';
    }
})

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggleDua.checked = true;
} else {
    darkToggleDua.checked = false;
}

$(document).ready(function () {
    $(".nav-toggler").each(function (_, navToggler) {
        var target = $(navToggler).data("target");
        $(navToggler).on("click", function () {
            $(target).animate({
                height: "toggle",
            });
        });
    });
});