jQuery(document).ready(function($){

	//Text placeholders for "stay informed" block and page
  $('form[id|="webform-client-form-938"] input[type=email]').focus(function() {
		if (this.defaultValue == this.value) {
			this.value = "";
		}
	});

	$('form[id|="webform-client-form-938"] input[type=email]').blur(function() {
		if (this.value == "") {
			this.value = this.defaultValue;
		}
	});

	//search box placeholder
	$("input[type=search]").focus(function() {
		$(this).val('');
	});

	$("input[type=search]").blur(function() {
		if (this.value == "") this.value = this.defaultValue;
	});

	//clear html5 placeholder attr on focus
	$(function(){
		if ($.browser.webkit) {
	    	$('input, textarea').live('focus',function(){
		    	if ( $(this).attr('placeholder') ) $(this).data('placeholder', $(this).attr('placeholder')).removeAttr('placeholder');
		    }).live('blur', function(){
	        	if ( $(this).data('placeholder') ) $(this).attr('placeholder', $(this).data('placeholder')).removeData('placeholder');
	        });
	    }
	});
  // Open links to tabs within the same page
  $('.node-download-page .open-tab').click(function (event) {
    var tab = $(this).attr('href');
    $('.field-collection-tabs').tabs('select', tab);
  });

  // FAQ toggle.
  var faqToggle = $('.field-faq h2.field-faq-question');
  var faqNode = $('.field-faq .field-faq-answer');

  // Expand first FAQ item.
	$('.field-collection-container .field-faq').first().addClass('js-active');

  $(faqToggle).click(function(e) {
    if ($(this).parent().parent().hasClass('js-active')) {
      $(this).parent().parent().removeClass('js-active');
    }
    else {
      $(this).parent().parent().removeClass('js-active');
      $(this).parent().parent().addClass('js-active');
    }
    e.preventDefault();
  });

});
;
