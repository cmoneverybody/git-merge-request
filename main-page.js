$(document).ready(function() {
   var
      container = $('.event-last-push .pull-right'),
      url,
      replaced;
   if (container.length) {
      url = container.find('.btn').attr('href');
      replaced = /*url.search('sbis3-controls') !== -1 ? 'development' : */'rc-3.7.3.200';
      container
         .prepend('<a class="ws-button" target="_blank" href=' + url.replace(replaced, 'development') + '>dev</a>')
         .prepend('<a class="ws-button" target="_blank" href=' + url.replace(replaced, 'rc-3.7.4.100') + '>3.7.4.100</a>')
         .prepend('<a class="ws-button" target="_blank" href=' + url.replace(replaced, 'rc-3.7.4') + '>3.7.4</a>')
		 .prepend('<a class="ws-button" target="_blank" href=' + url.replace(replaced, 'rc-3.7.3.220') + '>3.7.3.230</a>')
		 .prepend('<a class="ws-button" target="_blank" href=' + url.replace(replaced, 'rc-3.7.3.220') + '>3.7.3.220</a>');
   }
});
