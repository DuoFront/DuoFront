// seçao cards prices 
const tabButtons = document.querySelectorAll(".tab-plans .btn-plans button")
const tabPanel = document.querySelectorAll(".tab-plans .tab-panel-plans")

function showPanel(panelIndex){

  tabPanel.forEach(function(node){
    node.style.display = "none"
  })
  tabPanel[panelIndex].style.display="flex"
}

// selecao de card 
const planBoxes = document.querySelectorAll(".plan")

planBoxes.forEach(function (planBox, key) {
  planBox.addEventListener("click", function () {
    planBox.classList.toggle("active-plan");

    planBoxes.forEach(function (planBoxEle, els) {
      if (key !== els) {
        planBoxEle.classList.remove("active-plan");
      }
    });
  });
});

// seção tabela de preços
const table = document.getElementById("plans-table")
const btnTable = document.querySelector(".table-btn")
const btnTable2 = document.querySelector(".table-btn2")

btnTable.onclick = e => {
  table.classList.toggle("active")
}
btnTable2.onclick = e => {
  table.classList.toggle("active")
}

// Seção perguntas frequentes
const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach(content => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
}

//scroll
$(".js-btn-scroll-top").on("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return false;
});


// PLANS TABLE (RESPONSIVE) - SLIDER

// HEADER TABLE SLIDE

let swiper4 = new Swiper(".table-box-mobile-plan-type", {
  allowTouchMove: false,
  slidesPerView: 1,
  navigator: false,
  initialSlide: 1,

  breakpoints: {
    481: {
      navigation: {
        nextEl: ".next-plan",
        prevEl: ".prev-plan",
      },
    },
  },
});