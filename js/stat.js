// eslint-disable-next-line strict,no-redeclare
'use strict';

'use strict';

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 200;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, (barWidth * times[i]) / maxTime, BAR_HEIGHT);
  }

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 50, 50);
  ctx.fillText('Список результатов:', 50, 70);
};

// window.renderStatistics = function (ctx) {
//   ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
//   ctx.fillRect(110, 20, 270, 420);
//   ctx.fillStyle = '#fff';
//   ctx.fillRect(100, 10, 270, 420);
//
//   ctx.fillStyle = 'rgba(0, 0, 0, 1)';
//   ctx.font = '16px PT Mono';
//   ctx.textBaseline = 'hanging';
//   ctx.fillText('Ура вы победили!', 50, 50);
//   ctx.fillText('Список результатов:', 50, 70);
// };

// window.renderStatistics = function(ctx) {
//   ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
//   ctx.fillRect(110, 60, 500, 200);
//
//   ctx.fillStyle = '#fff';
//   ctx.fillRect(100, 50, 500, 200);
// };


// var CLOUD_WIDTH = 500;
// var CLOUD_HEIGHT = 200;
//
// var renderCloud = function(ctx, x, y, color) {
//   ctx.fillStyle = color;
//   ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
// };
//
// window.renderStatistics = function(ctx) {
//   ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
//   ctx.fillRect(110, 60, 500, 200);
//
//   ctx.fillStyle = '#fff';
//   ctx.fillRect(100, 50, 500, 200);
// };

/*
Задача
В новом файле js/stat.js определите функцию renderStatistics, которая будет являться методом объекта window, со следующими параметрами:

ctx — канвас на котором рисуется игра.
names — массив, с именами игроков прошедших уровень. Имя самого игрока — Вы. Массив имён формируется случайным образом.
times — массив, по длине совпадающий с массивом names. Массив содержит время прохождения уровня соответствующего игрока из массива names. Время прохождения уровня задано в миллисекундах.

Эта функция будет вызываться каждый раз когда игрок проходит уровень. Чтобы успешно пройти уровень, надо выстрелить фаерболом (клавиша Shift) в забор.

При вызове этой функции на канвас ctx должны быть выведены следующие элементы:

Белое облако с координатами [100, 10] высотой 270px и шириной 420px. Облако может быть как правильным многоугольником, нарисованным методом  fillRect, так и неправильным нарисованным с помощью методов beginPath, moveTo, closePath, fill и других.

vПод облаком должна располагаться тень: многоугольник такой же формы, залитый цветом rgba(0, 0, 0, 0.7) (полупрозрачный чёрный), смещённый относительно белого на 10px вниз и вправо.


На облаке должен быть отрисован текст сообщения ’Ура вы победили!\nСписок результатов:’ с помощью метода fillText. Текст должен быть набран шрифтом PT Mono размером 16px.
Обратите внимание. Особенностью отрисовки текста на канвасе является то, что он не поддерживает перенос, поэтому каждая новая строчка должна быть отрисована новым вызовом метода fillText или strokeText.
После сообщения о победе должна располагаться гистограмма времён участников. Параметры гистограммы следующие:
Высота гистограммы 150px.
Ширина колонки 40px.
Расстояние между колонками 50px.
Цвет колонки игрока Вы rgba(255, 0, 0, 1).
Цвет колонок других игроков — синий, а насыщенность задаётся случайным образом.
Обратите внимание. В rgba последний параметр — это прозрачность, а не насыщенность. Поэтому для задания цвета колонок других игроков нужно использовать hsl.
Обратите внимание. Функцию отрисовки статистики вызывать не надо. Её будет вызывать непосредственно сама игра из файла js/game.js.
Обратите внимание. Время прохождения игры должно быть округлено к целому числу.
Ниже показан пример, как может выглядеть экран успешного прохождения уровня.
 */
