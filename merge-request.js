$(document).ready(function() {
   var
      mrState = $('.mr-state-widget'),
      mrError = !!mrState.find('.fa-exclamation-triangle').length,
      mrMerged = !!mrState.find('.author_link').length,
      plus1Target = $('.voting_notes'),
      plus1 = $('<div class="ws-button plus1">+1 без тестов</div>'),
      mrText = $('#note_note'),
      mrForm = mrText.parents('form');
   mrState.addClass(mrMerged ? 'ws-mr-already-merged' : mrError ? 'ws-mr-not-merged' : 'ws-mr-merged');
   if (plus1Target.length) {
      plus1.click(function() {
         mrText.html('+1 без тестов');
         mrText.parents('form').submit();
      });
      plus1.prependTo(plus1Target);
   }
});