function myFunction() {
  // document.getElementById("info").innerHTML = "card-body";
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //let emailText = vanhanhnguyendck12@gmail.com;
  let inputVal = document.getElementById("emailText").value; // giá trị lấy được từ ô input được gán vào biến inputVal
  let result = regex.test(inputVal); // "vanhanhnguyendck12@gmail.com" đây là giá trị bị gán cứng
  // giá trị cần kiểm tra phải được lấy từ ô input

  const personInfoBox = document.getElementById("personalInforBox");
  const emailInforBox = document.getElementById("emailInforBox");
  const emailInforBoxTrue = document.getElementById("emailInforBoxTrue");
  const emailInforBoxFail = document.getElementById("emailInforBoxFail");

  //  if (result == true) {
  if (result == true) {
    personInfoBox.classList.remove("d-none");
    emailInforBox.classList.add("d-none");
  } else {
    emailInforBoxFail.classList.remove("d-none");
    emailInforBoxTrue.classList.add("d-none");
  }
}
// Get all hover areas
const hoverAreas = document.querySelectorAll(".hover-area");

hoverAreas.forEach((hoverArea) => {
  const describeButton = hoverArea.querySelector(".describe-button");
  const hiddenContent = hoverArea.querySelector(".hidden-content");

  // Show button on hover
  hoverArea.addEventListener("mouseover", () => {
    describeButton.style.display = "block";
  });

  // Hide button when the mouse leaves
  hoverArea.addEventListener("mouseout", () => {
    describeButton.style.display = "none";
  });

  // Toggle content visibility and button text on click
  describeButton.addEventListener("click", () => {
    if (
      hiddenContent.style.display === "none" ||
      hiddenContent.style.display === ""
    ) {
      hiddenContent.style.display = "block";
      describeButton.textContent = "View Less";
    } else {
      hiddenContent.style.display = "none";
      describeButton.textContent = "View More";
    }
  });
});
// // Di chuột để hiện mô tả
// const experienceDescribe = document.getElementById("experienceDescribe");
// const buttonDescribe = document.getElementById("buttonDescribe");

// experienceDescribe.addEventListener("mouseover", () => {
//   desc.style.display = "block"; // Hiện khi di chuột vào
// });

// experienceDescribe.addEventListener("mouseout", () => {
//   desc.style.display = "none"; // Ẩn khi rời chuột
// });
