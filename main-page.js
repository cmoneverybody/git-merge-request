$(document).ready(function() {
   var
      branches = ['3.7.5', '3.7.4.220', '3.7.4.210', '3.7.4.200'],
      container = $('.event-last-push .pull-right'),
      url,
      replaced,
      createRequest = $('<div class="ws-create-request"><i title="Create another request" class="ws-create-request-button fa fa-pencil-square-o" aria-hidden="true"></i></div>'),
      rp1 = 'https://git.sbis.ru/sbis/controls/merge_requests/new?utf8=✓&merge_request[source_project_id]=143&merge_request[source_branch]=',
      rp2 = '&merge_request[target_project_id]=143&merge_request[target_branch]=';
      createRequest
      .prependTo($('.input-group'))
      .find('i').click(function() {
         var
            pos = createRequest.find('i').offset(),
            requestContainer,
            branchName;
         if (window.createRequestFrame) {
            window.createRequestFrame.remove();
         }
         window.createRequestFrame = $('<div class="ws-create-request-frame" style="display: none;"><input placeholder="You must select source and target branch" class="ws-branch-name"><div class="ws-create-request-links"></div></div>')
            .appendTo('body')
            .css(pos);
         requestContainer = $('.ws-create-request-links');
         debugger;
         $.getJSON("https://raw.githubusercontent.com/cmoneverybody/git-merge-request/master/config.json", function(data) {
            debugger;
            for (var i = 0; i < data.branches.length; i++) {
               requestContainer.prepend('<a class="ws-button" branch="rc-' + data.branches[i] + '">' + data.branches[i] + '</a>');
            }
            if (container.length) {
               url = container.find('.btn').attr('href');
               url.replace(/(?:target_branch%5D=)([^&]+)/gim, function(res, branch) {
                   replaced = branch;
               });
               for (var i = 0; i < data.branches.length; i++) {
                  container.prepend('<a class="ws-button" target="_blank" href=' + url.replace(replaced, 'rc-' + data.branches[i]) + '>' + data.branches[i] + '</a>')
               }
            }
         });
         /*for (var i = 0; i < branches.length; i++) {
            requestContainer.prepend('<a class="ws-button" branch="rc-' + branches[i] + '">' + branches[i] + '</a>');
         }*/
         window.createRequestFrame.fadeIn(200, function() {
            $('.ws-branch-name').focus()
         });
      });
   document.addEventListener('click', function(e) {
      var
         targetBranch = e.target.getAttribute('branch'),
         branchName, branchField;
      if (targetBranch) {
         branchField = $('.ws-branch-name');
         branchName = branchField.val();
         if (branchName) {
            window.open(rp1 + branchName + rp2 + targetBranch,'_blank');
         } else {
            branchField.focus();
         }
      } else if (window.createRequestFrame && !$(e.target).closest(window.createRequestFrame).length) {
         window.createRequestFrame.remove();
         window.createRequestFrame = undefined;
      }
   }, true);
   document.addEventListener('keydown', function(e) {
      if (e.keyCode === 27 && e.target.className === 'ws-branch-name' && window.createRequestFrame) {
         window.createRequestFrame.remove();
         window.createRequestFrame = undefined;
      };
   }, true);
});