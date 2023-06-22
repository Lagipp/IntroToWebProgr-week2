import "./styles.css";

const username = document.querySelector("#input-username");
const email = document.querySelector("#input-email");
const address = document.querySelector("#input-address");
const admin = document.querySelector("#input-admin");
const submitBtn = document.querySelector("#submit-data");

const emptyBtn = document.querySelector("#empty-table");

const tbody = document.querySelector(".tableBody");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
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

  username.value = "";
  email.value = "";
  address.value = "";
  admin.checked = false;
});

emptyBtn.addEventListener("click", () => {
  console.log(tbody.children);
  //for (let child of tbody.children) tbody.removeChild(child);
  while (tbody.hasChildNodes) tbody.removeChild(tbody.lastChild);
  console.log(tbody.children);
});
