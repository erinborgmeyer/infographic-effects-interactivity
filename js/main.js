var $svg = $('svg');

$('.btn').on('click', function () {
  $svg.toggleClass('is-facts');
});


var $ul = $('ul');

$ul.addClass('nurses-list');

$('.more-nurses').remove();

nurses.forEach(function (nurses) {
  var $li = $('<li>');
  var $figure = $('<figure>');
  var $img = $('<img>');
  var $caption = $('<figcaption>');

  $caption.html(nurses.name);
  $img.attr('src', 'images/' + nurses.img);

  $figure.append($img, $caption);
  $li.append($figure);
  $ul.append($li);
});
