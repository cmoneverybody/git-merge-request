$(document).ready(function() {
   var
      mrState = $('.mr-state-widget'),
      mrError = !!mrState.find('.fa-exclamation-triangle').length,
      mrMerged = !!mrState.find('.author_link').length,
      branch = $('.mr-source-target .label-branch:first a').html(),
      rootBranch = branch.substring(0, branch.indexOf('/')),
      isDATA = document.location.href.indexOf('/ws/data/') !== -1,
      isWS = document.location.href.indexOf('/sbis/ws') !== -1,
      isENGINE = document.location.href.indexOf('sbis/engine') !== -1,
      jenkinsConst = 'http://ci-platform.sbis.ru/job/branch_' + (isDATA ? 'ws.data' : isWS ? 'ws' : isENGINE ? 'engine' : 'controls')  + '_',
      jenkinsMiddle = '/job/',
      jenkinsIconConst = '/badge/icon',
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
   $('<div class="request-tests-block" style="margin: 16px 0;"><img src="http://ci-platform.sbis.ru/static/5661bc22/images/headshot.png" style="height: 24px; vertical-align: top; padding-right: 8px;"><a href="' + testURL + '" style="font-weight: bold; display: inline-block; font-size: 16px; padding-right: 8px;">Jenkins tests</a><img src="' + testIconURL + '" style="display: inline-block; vertical-align: top;"></div>').insertBefore($('.merge-request .mr-state-widget'));
});
