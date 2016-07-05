$(document).ready(function() {
   var
      branches = ['3.7.4.100', '3.7.4', '3.7.3.230', '3.7.3.220'],
      container = $('.event-last-push .pull-right'),
      url,
      replaced;
   if (container.length) {
      url = container.find('.btn').attr('href');
      url.search(/(?:target_branch%5D=)([^&]+)/gim, function(res, branch) {
          replaced = branch;
      });
      container.prepend('<a class="ws-button" target="_blank" href=' + url.replace(replaced, 'development') + '>dev</a>');
      for (var i = 0; i < branches.length; i++) {
         container.prepend('<a class="ws-button" target="_blank" href=' + url.replace(replaced, 'rc-' + branches[i]) + '>' + branches[i] + '</a>')
      }
   }
});
