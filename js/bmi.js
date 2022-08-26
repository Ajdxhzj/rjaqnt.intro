const $BMI = document.querySelector(".BMI");

let height;
let weight;



const bmiheight = () => {
  height = Number(document.getElementById("inputHeight").value);
  console.log(height);
  return height;
};
const bmiweight = () => {
  weight = Number(document.getElementById("inputWeight").value);
  console.log(weight);
  return weight;
};

const result = (height, weight) => {
  let bmi = weight / (height / 100) ** 2; //bmi 계산법
  bmi = Math.round(bmi * 100) / 100; //bmi 수치 반올림
  let bmiClass = "";
  if (bmi < 18.5) {
    bmiClass = "저체중";
  } else if (bmi >= 18.5 && 25 > bmi) {
    bmiClass = "표준";
  } else if (bmi >= 25 && 30 > bmi) {
    bmiClass = "비만위험";
  } else if (bmi > 30) {
    bmiClass = "비만";
  }
  console.log(height, weight);
  console.log(bmi);
  console.log(bmiClass);
  alert(`체질량 지수는 ${bmi}, ${bmiClass} 입니다.`);
};



window.addEventListener('load',()=>{
  fetch("../js/bmi.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for(let i=0; i<data.length; i++){
      $BMI.innerHTML += `<span class="table">${data[i].bmi}</span><span class="table">${data[i].bmiClass}</span><br/>`
    }
    
  });
})