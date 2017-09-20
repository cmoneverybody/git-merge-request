$(document).ready(function() {
   var
      mrState = $('.mr-state-widget'),
      mrError = !!mrState.find('.fa-exclamation-triangle').length,
      mrMerged = !!mrState.find('.author_link').length,
      plus1Target = $('.voting_notes .content-block .awards'),
      plus1 = $('<div class="award-control btn plus1">+ 1</div>'),
      mrText = $('.js-main-target-form .js-note-text'),
      mrForm = mrText.parents('form'),
      jenkinsConst = 'http://ci-platform.sbis.ru/job/' + (document.location.href.indexOf('/ws/data/') !== -1 ? 'sbis3-ws.data' : document.location.href.indexOf('/sbis/ws') !== -1 ? 'sbis3-ws' : 'sbis3-controls')  + '_',
      jenkinsMiddle = '/branch/',
      jenkinsIconConst = '/badge/icon',
      branch = $('.mr-source-target .label-branch:first a').html(),
      rootBranch = branch.substring(0, branch.indexOf('/')),
      testURL = jenkinsConst + rootBranch + jenkinsMiddle + encodeURIComponent(branch),
      testIconURL = testURL + jenkinsIconConst;
   $('<div class="ws-copy-link fa fa-files-o" title="Copy merge request URL"></div>')
      .click(function() {
         document.execCommand('copy');
      })
      .insertBefore('.header-logo .home');
      
   this.addEventListener('copy', function (e) {
      if (e.target.className.indexOf('ws-copy-link') !== -1) {
         e.preventDefault();
         e.clipboardData.setData('text/plain', document.location.href);
      }
   });
      
   $('body').addClass(mrMerged ? 'ws-mr-already-merged' : mrError ? 'ws-mr-not-merged' : 'ws-mr-merged');
   if (plus1Target.length) {
      plus1.click(function() {
         mrText.html('+1');
         mrForm.submit();
      });
      plus1.prependTo(plus1Target);
   }
   $('<div class="request-tests-block" style="margin: 16px 0;"><img src="http://ci-platform.sbis.ru/static/5661bc22/images/headshot.png" style="height: 24px; vertical-align: top; padding-right: 8px;"><a href="' + testURL + '" style="font-weight: bold; display: inline-block; font-size: 16px; padding-right: 8px;">Jenkins tests</a><img src="' + testIconURL + '" style="display: inline-block; vertical-align: top;"></div>').insertBefore($('.merge-request .mr-state-widget'));
});
