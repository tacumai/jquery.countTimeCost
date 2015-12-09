;(function($){
  $.fn.countTimeCost = function(options){
    var timeCost = 0, textCount = 0, gStartTime = 0;
    var form = $(this);
    var opts = $.extend({}, options);
    var input_form = $('#' + options.input_text_id);
    var countTimeCostResult;

    // when focus the form, start to count time.
    input_form.focus(function(){
      var startTime = new Date().getTime();
      gStartTime = startTime;
      console.log(gStartTime);
    });

    // Focusout action
    input_form.focusout(function(){
      var text_length = input_form.val().length;
      if(text_length == 0) gStartTime = 0;
    });

    // Calculate time-cost after submitted.
    form.submit(function(){
      var endTime = new Date().getTime();
      var timediff = endTime - gStartTime;
      var cost = new Date(timediff).getSeconds();
      console.log(cost)
      countTimeCostResult = [cost, textCount];
      gStartTime = 0;
      $(this).val('');
      return countTimeCostResult;
    });

    // Count text length.
    form.keyup(function(e){
      if(e.keyCode == 8) {
        textCount = input_form.val().length;
        if(textCount == 0) {
          gStartTime == 0;
          var startTime = new Date().getTime();
          gStartTime = startTime;
        }
        console.log(textCount);
      } else {
        console.log(textCount);
        textCount = input_form.val().length;
        $('.hoge').html(textCount);
      }
    });
    return this;
  };
})(jQuery);