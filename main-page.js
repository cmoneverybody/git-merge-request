$(document).ready(function() {
   var
      container = $('.event-last-push .pull-right'),
      url,
      replaced;
   if (container.length) {
      url = container.find('.btn').attr('href');
      replaced = url.search('sbis3-controls') !== -1 ? 'development' : 'rc-3.7.3.15';
      container
         .prepend('<a class="ws-button" target="_blank" href=' + url.replace(replaced, 'development') + '>dev</a>')
         .prepend('<a class="ws-button" target="_blank" href=' + url.replace(replaced, 'rc-3.7.4') + '>3.7.4</a>')
         .prepend('<a class="ws-button" target="_blank" href=' + url.replace(replaced, 'rc-3.7.3.100') + '>3.7.3.100</a>')
         .prepend('<a class="ws-button" target="_blank" href=' + url.replace(replaced, 'release-3.7.3.100.R1') + '>3.7.3.100.R1</a>')
         .prepend('<a class="ws-button" target="_blank" href=' + url.replace(replaced, 'rc-3.7.3.30') + '>3.7.3.30</a>')
         .prepend('<a class="ws-button" target="_blank" href=' + url.replace(replaced, 'rc-3.7.3.20') + '>3.7.3.20</a>');
   }
});
