$('.articles').on('click', '.article', function (event) {
    event.preventDefault();
    if (!$(this).hasClass("flipped")) {
        $(this).addClass("flipped");
        // this.closest(".backface").classList.add("backface--flip");
    } else {
        $(this).removeClass("flipped");
    }
});
