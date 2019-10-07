'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var FONT_GAP = 15;
var TEXT_HEIGHT = 30;
var BAR_WIDTH = 40;
var barHeight = 150;

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

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_Y, CLOUD_Y + CLOUD_Y, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_GAP);
    ctx.fillStyle = 'hsl(' + Math.floor(30 * i) + ',' + '70%, 50%)';
    ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, (barHeight - (barHeight * times[i]) / maxTime) + CLOUD_HEIGHT - barHeight - TEXT_HEIGHT, BAR_WIDTH, (barHeight * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, (barHeight - (barHeight * times[i]) / maxTime) + CLOUD_HEIGHT - barHeight - BAR_WIDTH);
  }

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, TEXT_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, TEXT_HEIGHT + FONT_GAP);
};
