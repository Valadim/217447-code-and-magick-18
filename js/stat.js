'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var TEXT_X = 120;
var TEXT_Y = 40;
var FONT_GAP = 15;
var TEXT_HEIGHT = 30;
var BAR_WIDTH = 40;
var barHeight = 150;
var WIN_MESSAGE = ['Ура вы победили!', 'Список результатов:'];
var winFontStyle = '16px PT Mono';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var winMessage = function (ctx, x, y, text, font) {
  ctx.font = font;
  for (var i = 0; i < text.length; i++) {
    ctx.fillText(text[i], x, y + FONT_GAP * i);
  }
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_Y, CLOUD_Y + CLOUD_Y, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, (barHeight - (barHeight * times[i]) / maxTime) + CLOUD_HEIGHT - barHeight - TEXT_HEIGHT, BAR_WIDTH, (barHeight * times[i]) / maxTime);
    } else {
      ctx.fillStyle = 'hsl(250, ' + '50%, ' + Math.floor(30 + i * 15) + '%)';
      ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, (barHeight - (barHeight * times[i]) / maxTime) + CLOUD_HEIGHT - barHeight - TEXT_HEIGHT, BAR_WIDTH, (barHeight * times[i]) / maxTime);
    }
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_GAP);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, (barHeight - (barHeight * times[i]) / maxTime) + CLOUD_HEIGHT - barHeight - BAR_WIDTH);
  }

  winMessage(ctx, TEXT_X, TEXT_Y, WIN_MESSAGE, winFontStyle);
};
