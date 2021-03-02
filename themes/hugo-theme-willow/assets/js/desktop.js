import { closeWindowCallback, windowOptionsCSS, createFullWindowElement } from './helpers.js';
import './vendor/jquery-ui';

$('document').ready(function() {
  $('#navigation').on('mouseenter', function(event) {
    //let d = new Date();
    //console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} | ${event.type} [target: ${event.target.className}]\n`.replace(/(:|^)(\d\D)/, '$10$2'));
    $('.icon').on('click', function(event) {
      event.preventDefault();
    });

    $('.icon').draggable();

    $('.icon').on('dblclick', function(event) {
      const icon = this;
      const anchor = event.target.closest('a');
      const modal = createFullWindowElement(anchor).hide();

      $(modal).draggable({ handle: '.title-bar' });
      $(modal).resizable({
        alsoResize: 'iframe',
        handles: 's, se, sw'
      });
      $(modal).css(windowOptionsCSS());

      if (!$(icon).hasClass('open')) {
        $(this).addClass('open');
        $(modal).appendTo('body').toggle({
          effect: 'scale'
        });

        $('.close').on('click', function(event) {
          const windowEl = $(event.target).closest('.window');
          $(windowEl).toggle({
            effect: 'clip',
            complete: function() {
              closeWindowCallback(windowEl)(icon);
            }
          });
        });

      };
    });
    $('#navigation').off('dblclick', '.icon');
    $('#navigation').off('mouseenter');
  });
});
