let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__navigation");

function showBurger() {
    menu.classList.toggle("show");
}

burger.addEventListener("click", showBurger);

let navigationLinks = document.querySelectorAll('.menu__link');
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function (event) {
        event.preventDefault();
        var sectionId = navigationLinks[i].getAttribute('href');
        document.querySelector('' + sectionId).scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
        menu.classList.toggle("show");
    })
}

//VIDEO 

function findVideos() {
    let videos = document.querySelectorAll('.video');

    for (let i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
    }
}

function setupVideo(video) {
    let link = video.querySelector('.video__link');
    let media = video.querySelector('.video__media');
    let button = video.querySelector('.video__button');
    let id = parseMediaURL(media);

    video.addEventListener('click', () => {
        let iframe = createIframe(id);

        link.remove();
        button.remove();
        video.appendChild(iframe);
    });

    link.removeAttribute('href');
    video.classList.add('video--enabled');
}

function parseMediaURL(media) {
    let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    let url = media.src;
    let match = url.match(regexp);

    return match[1];
}

function createIframe(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('video__media');

    return iframe;
}

function generateURL(id) {
    let query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();

// BECOMES VISIBLE

// Получаем нужный элемент

//var element = document.querySelector('#top');

var Visible = function (target, changes, className, classHren) {
    // Все позиции элемента
    var targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        },
        // Получаем позиции окна
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код
        console.clear();
        changes.classList.add(className, classHren);
        console.log('Вы видите элемент :)');
    } else {
        // Если элемент не видно, то запускаем этот код
        console.clear();
    };
};

// Запускаем функцию при прокрутке страницы
/*window.addEventListener('scroll', function () {
    Visible(element);
});*/

let topBlocks = document.querySelectorAll(".top__item");
let topInfos = document.querySelectorAll(".top__info");

let className1 = "animate__animated";
let className2 = "animate__fadeInLeft";

for (let i = 0; i < topBlocks.length; i++) {
    window.addEventListener('scroll', function () {
        Visible(topBlocks[i], topInfos[i], className1, className2);
    });
}