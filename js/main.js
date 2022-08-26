const localName = localStorage.getItem(`loginName`);
const header=document.querySelector(`#header`);
const header_name = document.createElement(`span`);
const headerName = localStorage.getItem(`loginName`);
header_name.innerText = `안녕하세요 ${headerName} 님`;
header.appendChild(header_name);


$(function () {
  $(`.slider_panel`).append($(`.slider_image`).first().clone());
  $(`.slider_panel`).prepend($(`.slider_image`).eq(-2).clone());
  var index = 1;
  moveSlider(index);

  setInterval(() => {
    if (index < 5) {
      index++;
      moveSlider(index);
    } else {
      $(`.slider_panel`).css(`left`, 0);
      index = 1;
      moveSlider(index);
    }
  }, 3000);

  // $(`.left_control`).click(function () {
  //   if (index > 1) {
  //     index--;
  //     moveSlider(index);
  //   } else {
  //     $(`.slider_panel`).css(`left`, -3600);
  //     index = 5;
  //     moveSlider(index);
  //   }
  // });
  // $(`.right_control`).click(function () {
  //   if (index < 5) {
  //     index++;
  //     moveSlider(index);
  //   } else {
  //     $(`.slider_panel`).css(`left`, 0);
  //     index = 1;
  //     moveSlider(index);
  //   }
  // });

  function moveSlider(index) {
    $(`.slider_panel`).animate({
      left: -(index * 600)
    }, `slow`);
  }

  $(`.slider_panel`).hover(function () {
    $(`.slider_panel span`).addClass(`hoverSlider`);
    $(`.slider_panel span`).removeClass(`slider_hidden`);
  }, function () {
    $(`.slider_panel span`).removeClass(`hoverSlider`);
    $(`.slider_panel span`).addClass(`slider_hidden`);
  });

});