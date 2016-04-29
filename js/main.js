var $svg = $('svg');
var $li = $('<li>');
var $figure = $('<figure>');
var $img = $('<img>');
var $caption = $('<figcaption>');
var $ul = $('ul');

$('.btn').on('click', function () {
  $svg.toggleClass('is-facts');
});

$ul.addClass('nurses-list');

$('.more-nurses').remove();

nurses.forEach(function (nurses) {

  $caption.html(nurses.name);
  $img.attr('src', 'images/' + nurses.img);

  $figure.append($img, $caption);
  $li.append($figure);
  $ul.append($li);
});
