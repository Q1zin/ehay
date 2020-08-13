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
		var headerHiddenWindow = $(".menu")
		e.preventDefault
		$(this).toggleClass("header__menu-block_active")
		headerHidden.toggleClass("header__menu_main--active")
		headerHiddenWindow.toggleClass("header__menu_window--active")
	})

	//Обработка форм
	$(".newsletter__form").each(function () {
		$(this).validate({
			errorClass: "invalid",
			messages: {
				email: {
					required: "Email is required",
				},
			},
		})
	})

	//Инициализация слайдера #1
	var swiper = new Swiper(".quotes__container", {
		initialSlide: 1,
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	})

	//Инициализация слайдера #2
	var swiper = new Swiper(".fashun-story__right", {
		navigation: {
			nextEl: ".fashun-story__button-next",
			prevEl: ".fashun-story__button-prev",
		},
	})
})
