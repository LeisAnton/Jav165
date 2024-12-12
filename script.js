$("html").click(function (event) {
    $("#heading").offset({
        left: event.pageX,
        top: event.pageY
    });
});
let posX = 0; // Начальная позиция по оси X
let posY = 0; // Начальная позиция по оси Y
const step = 200; // Шаг перемещения
let direction = 0; // Направление (0 - вправо, 1 - вниз, 2 - влево, 3 - вверх)

setInterval(function() {
    switch (direction) {
        case 0: // Вправо
            posX += step;
            if (posX >= window.innerWidth - 200) {
                direction++;
            }
            break;
        case 1: // Вниз
            posY += step;
            if (posY >= window.innerHeight - 50) { // Учитываем высоту заголовка
                direction++;
            }
            break;
        case 2: // Влево
            posX -= step;
            if (posX <= 0) {
                direction++;
            }
            break;
        case 3: // Вверх
            posY -= step;
            if (posY <= 0) {
                direction = 0; // Сброс направления
            }
            break;
    }

    // Обновление позиции заголовка
    $("#heading").css({
        left: posX + 'px',
        top: posY + 'px'
    });
}, 1000); // Интервал в миллисекундах (1 секунда)