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
var BAR_HEIGHT = 150;
var WIN_MESSAGE = ['Ура вы победили!', 'Список результатов:'];
var WIN_FONT_STYLE = '16px PT Mono';
var PLAYER_NAME = 'Вы';
var BAR_PLAYER_COLOR = 'rgba(255, 0, 0, 1)';

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

    var barCordX = CLOUD_X + GAP + (GAP + BAR_WIDTH) * i;
    var barCordY = (BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime) + CLOUD_HEIGHT - BAR_HEIGHT - TEXT_HEIGHT;
    var barPlayersColor = 'hsl(250, ' + '50%, ' + Math.floor(30 + i * 15) + '%)';

    if (players[i] === PLAYER_NAME) {
      ctx.fillStyle = BAR_PLAYER_COLOR;
      ctx.fillRect(barCordX, barCordY, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    } else {
      ctx.fillStyle = barPlayersColor;
      ctx.fillRect(barCordX, barCordY, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    }
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], barCordX, CLOUD_HEIGHT - FONT_GAP);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), barCordX, (BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime) + CLOUD_HEIGHT - BAR_HEIGHT - BAR_WIDTH);
  }

  winMessage(ctx, TEXT_X, TEXT_Y, WIN_MESSAGE, WIN_FONT_STYLE);
};
