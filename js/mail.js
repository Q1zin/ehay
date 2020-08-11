$(document).ready(function () {
	var tabsItem = $(".trending-items__li")
	var contentItem = $(".trending-items__bottom")

	tabsItem.on("click", function (event) {
		var activeContent = $(this).attr("data-target")
		console.log(activeContent)
		tabsItem.removeClass("trending-items__li--active")
		contentItem.removeClass("trending-items__bottom--active")
		$(activeContent).addClass("trending-items__bottom--active")
		$(this).addClass("trending-items__li--active")
	})
})
