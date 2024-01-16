let goTopBtn = document.getElementById("goTopBtn");
window.onscroll =function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    goTopBtn.style.display = "flex";
  } else {
    goTopBtn.style.display = "none";
  }
};

let shopItemsData = [
    {
    id:"ytrsseyfhs",
    name:"Table Set #1",
    price: 100,
    desc: "Table set with two stools and a bench",
    img:"images/img1.jpg"
},
{
    id:"reyefhfy5t",
    name:"Table Set #2",
    price: 120,
    desc: "Table set with two Kalesa bench and two stools",
    img:"images/img2.jpg"
},
{
    id:"ewfegeATYT",
    name:"Table Set #3",
    price: 110,
    desc: "Round Table set with two stools and a Kalesa bench",
    img:"images/img3.jpg"
},
{
    id:"FHGFHryery",
    name:"Table Set #4",
    price: 105,
    desc: "Square Table set with two Kalesa bench",
    img:"images/img4.jpg"
},
{
    id:"sdfhthrwhv",
    name:"Table Set #5",
    price: 120,
    desc: "Table set with two Kalesa bench and two stools",
    img:"images/img5.jpg"
},

{
    id:"dfhfhvhgy",
    name:"Table Set #6",
    price: 105,
    desc: "Round Table set with four stools(White)",
    img:"images/img7.jpg"
},
{
    id:"ryeyrtgft",
    name:"Table Set #7",
    price: 110,
    desc: "Round Table set with four stools(Brown)",
    img:"images/img8.jpg"
},
{
    id:"iukfdtyhg",
    name:"Table Set #8",
    price: 105,
    desc: "Round Table set with four stools(Marble)",
    img:"images/img9.jpg"
}
];