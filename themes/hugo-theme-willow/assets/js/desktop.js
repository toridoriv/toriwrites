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
      const modal = createFullWindowElement(anchor);

      if (!$(icon).hasClass('open')) {
        $(this).addClass('open');
        $(modal).appendTo('body').hide().css(windowOptionsCSS()).toggle({
          effect: 'scale'
        });

        $('.window').draggable({ handle: '.title-bar' });
        $('.window').resizable({
          alsoResize: 'iframe',
          handles: 's, se, sw'
        });

        $('.delete').on('click', function(event) {
          const windowEl = $(event.target).closest('.window');
          $(windowEl).toggle({
            effect: 'scale',
            complete: closeWindowCallback(this)(icon)
          });
        });

      };
    });
    $('#navigation').off('dblclick', '.icon');
    $('#navigation').off('mouseenter');
  });
});
