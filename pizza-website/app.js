// Анимация прокрутки
window.sr = ScrollReveal();

sr.reveal(".section-title", {
    duration: 1000,
    origin: 'top',
    distance: '50px',
    easing: 'ease-in-out',
    scale: 0.2,
    mobile: false
});

sr.reveal(".section-subtitle", {
    duration: 1000,
    delay: 1000,
    origin: 'top',
    distance: '50px',
    easing: 'ease-in-out',
    scale: 0.2,
    mobile: false
});

sr.reveal(".left", {
    duration: 2000,
    delay: 2000,
    origin: 'left',
    distance: '300px',
    easing: 'ease-in-out',
    scale: 0.5,
    mobile: false
});

sr.reveal(".right", {
    duration: 2000,
    delay: 2000,
    origin: 'right',
    distance: '300px',
    easing: 'ease-in-out',
    scale: 0.5,
    mobile: false
});

sr.reveal(".order", {
    duration: 2000,
    delay: 2000,
    scale: 0.2,
    easing: 'ease-in-out',
    mobile: false,
    rotate: { x: 0, y: 360, z: 180}
}, 300);

sr.reveal(".ingredient-box", {
    duration: 500,
    delay: 2000,
    scale: 0.1,
    easing: 'ease-in-out',
    mobile: false,
    rotate: {x: 0, y: 0, z: 180}
}, 100);

// Добавить плавную прокрутку ко всем ссылкам
$("a").on('click', function (event) {

    // Убедитесь, что this.hash имеет значение, прежде чем переопределять поведение по умолчанию.
    if (this.hash !== "") {
        // Предотвратить стандартное поведение щелчка якоря
        event.preventDefault();

        // Хранить хэш
        var hash = this.hash;

        // Использование метода jQuery animate() для добавления плавной прокрутки страницы
         // Необязательное число (1000) указывает количество миллисекунд, необходимое для прокрутки до указанной области
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000, function () {

            // Добавляем решетку (#) к URL после завершения прокрутки (поведение при нажатии по умолчанию)
             // window.location.hash = хэш;
        });
    } // Конец, если
});
