// Só pra mostrar que eu posso usar tanto com jQuery quanto sem
// Just to show that i can use jQuery if I'ts necessery

function handleToggle(){
  const nav = document.querySelector(".nav-links");
  nav.classList.contains("displayed") 
  ? nav.classList.remove("displayed") 
  : nav.classList.add("displayed");
}

function handleClick(){
  const nav = document.querySelector(".nav-links");
  nav.classList.add("displayed");
}

$(".display").slideUp();
$(".project-displayed").hide();

$(".n1").on("click", () => {
  $(".d1").slideToggle("fast");
});

$(".n2").on("click", () => {
  $(".d2").slideToggle("fast");
});

$(".n3").on("click", () => {
  $(".d3").slideToggle("fast");
});

$(".n4").on("click", () => {
  $(".d4").slideToggle("fast");
});

$(".selector").on("click", () => {
  $(".project-displayed").toggle("600");
});