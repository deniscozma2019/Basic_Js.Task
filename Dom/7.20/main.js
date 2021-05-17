const submitBtn = document.getElementById("submitBtn");
const inputAdd = document.getElementById("inputAdd");
const users = document.getElementById("users");

const add = () => {
  submitBtn.addEventListener("click", () => {
      if (inputAdd.value) {
          users.innerHTML += `<tr> <td> ${inputAdd.value}</td><td class="close"> X </td> </tr>`;
          inputAdd.value = "";
      }
      deleteHandler();
  })  
};

const deleteHandler = () => {
  const btns = document.querySelectorAll(".close");

  btns.forEach((btn, index) => {
      btns[index].addEventListener("click", () => {
          btn.parentElement.remove();
      })
  })
};

add();