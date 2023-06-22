import "./styles.css";

const username = document.querySelector("#input-username");
const email = document.querySelector("#input-email");
const address = document.querySelector("#input-address");
const admin = document.querySelector("#input-admin");
const submitBtn = document.querySelector("#submit-data");

const emptyBtn = document.querySelector("#empty-table");
const tbody = document.querySelector(".tableBody");

const tableRows = tbody.querySelectorAll("tr");
console.log(`tr-list length: ${tableRows.length}`);

/* adding the new data from the form to the table */
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  for (let row of tableRows) {
    if (row.firstElementChild.innerHTML === username.value) {
      console.log(`= USERNAME FOUND IN DATABASE`);
      /*console.log(row.children);
      console.log(`0th ` + row.children[0].innerHTML);
      console.log(`1st ` + row.children[1].innerHTML);
      console.log(`2nd ` + row.children[2].innerHTML);
      console.log(`4th ` + row.children[3].innerHTML);*/

      row.children[0].innerHTML = username.value;
      row.children[1].innerHTML = email.value;
      row.children[2].innerHTML = address.value;
      row.children[3].innerHTML = admin.checked ? "X" : "-";

      //console.log(`if-check complete`);

      username.value = "";
      email.value = "";
      address.value = "";
      admin.checked = false;

      return;
    }
  }

  // console.log(`after if-check`);

  //console.log(`${username.value} ${email.value} ${address.value} ${admin.checked}`);
  let newTr = document.createElement("tr");
  let tdUsername = document.createElement("td");
  let tdEmail = document.createElement("td");
  let tdAddress = document.createElement("td");
  let tdAdmin = document.createElement("td");

  tdUsername.textContent = username.value;
  tdEmail.textContent = email.value;
  tdAddress.textContent = address.value;
  tdAdmin.textContent = admin.checked ? "X" : "-";

  newTr.appendChild(tdUsername);
  newTr.appendChild(tdEmail);
  newTr.appendChild(tdAddress);
  newTr.appendChild(tdAdmin);

  tbody.appendChild(newTr);

  /* clearing the input fields after submitting */
  username.value = "";
  email.value = "";
  address.value = "";
  admin.checked = false;
});

/* removing every child element of table body (clearing the table) */
emptyBtn.addEventListener("click", () => {
  //console.log(tbody.children);
  while (tbody.lastChild) tbody.removeChild(tbody.lastChild);
  //console.log(tbody.children);
});
