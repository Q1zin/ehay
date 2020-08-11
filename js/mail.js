$(document).ready(function () {
	var tabsItem = $(".trending-items__li")
	var contentItem = $(".trending-items__bottom")

	tabsItem.on("click", function (event) {
		var activeContent = $(this).attr("data-target")
		tabsItem.removeClass("trending-items__li--active")
		contentItem.removeClass("trending-items__bottom--active")
		$(activeContent).addClass("trending-items__bottom--active")
		$(this).addClass("trending-items__li--active")
	})

	$(".header__menu-block").on("click", function (e) {
		var headerHidden = $(".header__menu_main")
		e.preventDefault
		$(this).toggleClass("header__menu-block_active")
		headerHidden.toggleClass("header__menu_main--active")
	})
})
