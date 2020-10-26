window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('.burger').classList.toggle('burg-active')
  })
  $(".container-search").mouseover(function () {
    $(".nav").hide();
});
$(".container-search").mouseout(function () {
    $(".nav").show();
});

$(".question-item").click(function() {
  $(this).find(".question-btn-plus span:last-child").toggleClass("active");

  $(this).find(".question-text").slideToggle(300);
  $(".question-text").not($(this).find(".question-text")).slideUp(300);
  $(".question-btn-plus span:last-child").not($(this).find(".question-btn-plus span:last-child")).removeClass("active");
});
})
