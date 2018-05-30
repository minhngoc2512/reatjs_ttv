/*
* ----------------------------------------------------------------------------------------
Author       :  pixshed
Template Name:  Mega Jobs - Job board
Version      :  1.0
* ----------------------------------------------------------------------------------------
*/
//	TOGGLE JOBLISTING FILTERS
$(".category-title .expand").on("click", function() {
  // Toogle icon class
  $(this)
    .find("i")
    .toggleClass("fa-plus");
  $(this)
    .find("i")
    .toggleClass("fa-minus");

  // Toggle filter wrapper
  $(this)
    .closest("div.filters-wrap")
    .find("div.filter-list")
    .slideToggle(500);
});
// $(document).on("ready", function() {
// DROPDOWN ANIMATION
$(".dropdown").on("show.bs.dropdown", function() {
  $(this)
    .find(".dropdown-menu")
    .first()
    .stop(true, true)
    .slideDown();
});
$(".dropdown").on("hide.bs.dropdown", function() {
  $(this)
    .find(".dropdown-menu")
    .first()
    .stop(true, true)
    .slideUp();
});
