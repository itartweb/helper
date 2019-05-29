/**
 * @file helper.js
 */

(function ($, Drupal) {
  Drupal.behaviors.helper = {
    attach: function(e) {

      $('.selected-wrapper span').on("click", function(e) {
        var t = $(this).data("tid");
        var n = $('[data-drupal-selector="views-exposed-form-articles-page"]').find('[data-drupal-selector="edit-tags"]');
        e.preventDefault();
        n.find('[for^="edit-tags-' + t + '"]').trigger("click");
      });

    }
  }
}(jQuery, Drupal));
