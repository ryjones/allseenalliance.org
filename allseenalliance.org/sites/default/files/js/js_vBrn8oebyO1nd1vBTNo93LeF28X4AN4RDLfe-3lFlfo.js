/** * @file
 * A JavaScript file for the sub-navigation.
 *
 */
// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth

(function ($, Drupal, window, document, undefined) {
  Drupal.behaviors.allseenDocsNav = {
    attach: function(context, settings) {
      new AllSeenThemeSubNav('#block-menu-block-1');
      new AllSeenThemeSubNav('#block-menu-block-allseen-docs-responsive-nav');

      $('#block-menu-block-allseen-docs-responsive-nav .block-content').hide();
      $('#block-menu-block-allseen-docs-responsive-nav h2.block-title').click(function() {
        $('#block-menu-block-allseen-docs-responsive-nav .block-content').toggle();
      });
    }
  };

  var AllSeenThemeSubNav = function(selector) {
    this.subnav = $(selector);
    this.subnav.addClass('expandable-nav');

    // Add the toggle icon to non-leaf menu items.
    this.subnav.find('li').each(function () {
      var li = $(this);
      if (li.children('ul').length > 0) {
        li.children('a').after('<span class="nav-icon"></span>');
      }
    });

    // Collapse everything that is NOT in the active-trail.
    this.subnav.find('li:not(.active-trail) ul').hide();

    // In order to not overwrite the actual active trail for the current page
    // we add our own classes. hl-active-trail indicates an expanded menu item.
    // hl-active indicates a selected menu item.
    // On construction, we can't use highlight() because we may have a hidden
    // current item.
    this.subnav.find('a.active').addClass('hl.active');
    this.subnav.find('li.active-trail').addClass('hl-active-trail');
    this.setToggles();
  }

  AllSeenThemeSubNav.prototype.highlight = function(active) {

    this.subnav.find('.hl-active').removeClass('hl-active');
    if (active) {
      active.addClass('hl-active');
      active.parents('li').addClass('hl-active-new');
    }

    // Find items that no longer need an active trail.
    this.subnav.find('.hl-active-trail').not('.hl-active-new').removeClass('hl-active-trail');

    // Remove extra class.
    this.subnav.find('.hl-active-new').addClass('hl-active-trail').removeClass('hl-active-new');

  }

  AllSeenThemeSubNav.prototype.setToggles = function() {
    var self = this;

    // Trigger toggling on click. 'toggle' is set to the icon that was clicked on.
    this.subnav.find('span.nav-icon').bind('click', function(e) {
      toggle = $(this);

      var li = toggle.closest('li');
      // If the toggled item is expanded, we need to collapse the submenu.
      if (li.find('ul:first').is(':visible')) {
        // Collapse all the children that may be open.
        li.find('ul').slideUp('fast');

        // If this is a root-level menu item.
        if (toggle.parents('ul', this.subnav).length <= 1) {
          self.highlight(null);
        } else {
          self.highlight(li.closest('ul').siblings('a'));
        }

      // If the toggled item is collapsed, we need to collapse other submenus
      // and expand the toggled submenu.
      } else {

        // Collapsing all other open submenus.
        li.siblings('li.hl-active-trail').find('ul').slideUp();

        // Expand the toggled item.
        li.find('ul:first').slideDown();

        // Reset the highlighting.
        self.highlight(toggle.siblings('a'));
      }

      e.stopPropagation();
      return false;
    });
  }
})(jQuery, Drupal, this, this.document);
;
(function ($) {

Drupal.behaviors.textarea = {
  attach: function (context, settings) {
    $('.form-textarea-wrapper.resizable', context).once('textarea', function () {
      var staticOffset = null;
      var textarea = $(this).addClass('resizable-textarea').find('textarea');
      var grippie = $('<div class="grippie"></div>').mousedown(startDrag);

      grippie.insertAfter(textarea);

      function startDrag(e) {
        staticOffset = textarea.height() - e.pageY;
        textarea.css('opacity', 0.25);
        $(document).mousemove(performDrag).mouseup(endDrag);
        return false;
      }

      function performDrag(e) {
        textarea.height(Math.max(32, staticOffset + e.pageY) + 'px');
        return false;
      }

      function endDrag(e) {
        $(document).unbind('mousemove', performDrag).unbind('mouseup', endDrag);
        textarea.css('opacity', 1);
      }
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.mollom = Drupal.mollom || {};

/**
 * Open links to Mollom.com in a new window.
 *
 * Required for valid XHTML Strict markup.
 */
Drupal.behaviors.mollomTarget = {
  attach: function (context) {
    $(context).find('.mollom-target').click(function () {
      this.target = '_blank';
    });
  }
};

/**
 * Retrieve and attach the form behavior analysis tracking image if it has not
 * yet been added for the form.
 */
Drupal.behaviors.mollomFBA = {
  attach: function (context, settings) {
    $(':input[name="mollom[fba]"][value=""]', context).once().each(function() {
      $input = $(this);
      $.ajax({
        url: Drupal.settings.basePath + Drupal.settings.pathPrefix + 'mollom/fba',
        type: 'POST',
        dataType: 'json',
        success: function(data) {
          if (!data.tracking_id || !data.tracking_url) {
            return;
          }
          // Save the tracking id in the hidden field.
          $input.val(data.tracking_id);
          // Attach the tracking image.
          $('<img src="' + data.tracking_url + '" width="1" height="1" alt="" />').appendTo('body');
        }
      })
    });
  }
};

 /**
 * Attach click event handlers for CAPTCHA links.
 */
Drupal.behaviors.mollomCaptcha = {
  attach: function (context, settings) {
    $('a.mollom-switch-captcha', context).click(function (e) {
      var $mollomForm = $(this).parents('form');
      var newCaptchaType = $(this).hasClass('mollom-audio-captcha') ? 'audio' : 'image';
      Drupal.mollom.getMollomCaptcha(newCaptchaType, $mollomForm);
    });
    $('a.mollom-refresh-captcha', context).click(function (e) {
      var $mollomForm = $(this).parents('form');
      var currentCaptchaType = $(this).hasClass('mollom-refresh-audio') ? 'audio' : 'image';
      Drupal.mollom.getMollomCaptcha(currentCaptchaType, $mollomForm);
    });
  }
};

/**
 * Fetch a Mollom CAPTCHA and output the image or audio into the form.
 *
 * @param captchaType
 *   The type of CAPTCHA to retrieve; one of "audio" or "image".
 * @param context
 *   The form context for this retrieval.
 */
Drupal.mollom.getMollomCaptcha = function (captchaType, context) {
  var formBuildId = $('input[name="form_build_id"]', context).val();
  var mollomContentId = $('input.mollom-content-id', context).val();

  var path = 'mollom/captcha/' + captchaType + '/' + formBuildId;
  if (mollomContentId) {
    path += '/' + mollomContentId;
  }

  // Retrieve a new CAPTCHA.
  $.ajax({
    url: Drupal.settings.basePath + Drupal.settings.pathPrefix + path,
    type: 'POST',
    dataType: 'json',
    success: function (data) {
      if (!(data && data.content)) {
        return;
      }
      // Inject new CAPTCHA.
      $('.mollom-captcha-content', context).parent().html(data.content);
      // Update CAPTCHA ID.
      $('input.mollom-captcha-id', context).val(data.captchaId);
      // Add an onclick-event handler for the new link.
      Drupal.attachBehaviors(context);
      // Focus on the CAPTCHA input.
      if (captchaType == 'image') {
          $('input[name="mollom[captcha]"]', context).focus();
      } else {
         // Focus on audio player.
         // Fallback player code is responsible for setting focus upon embed.
         if ($('#mollom_captcha_audio').is(":visible")) {
             $('#mollom_captcha_audio').focus();
         }
      }
    }
  });
  return false;
}

})(jQuery);
;
