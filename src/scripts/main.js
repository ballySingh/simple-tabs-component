let target;
let changeTab = (e) => {
  target = e.target;

  // Remove all current selected tabs
  $('[role="tab"]').attr('aria-selected', false);
  // Set this tab as selected
  $(`#${target.id}`).attr('aria-selected', true);
  // Hide all tab panels
  $('[role="tabpanel"]').removeClass().addClass('hide');
  // Show the selected panel
  $(`#${target.getAttribute('aria-controls')}`)
    .removeClass('hide')
    .addClass('show');
};

$(function () {
  $('[role="tab"]').click(changeTab);
});
