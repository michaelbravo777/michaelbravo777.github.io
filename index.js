$("a.scrollLink").click(function (event) {
  event.preventDefault();
  $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 5500);
});