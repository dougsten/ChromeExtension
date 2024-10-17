let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const clearBtn = document.getElementById("clear-btn");

// ["lead1", "lead2"] or null
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage) {
  console.log(leadsFromLocalStorage);
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

inputBtn.addEventListener("click", function () {
  if ((inputEl.value != "")) {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
  }
});

clearBtn.addEventListener("click", function () {
  myLeads = [];
  localStorage.clear();
  inputEl.value = "";
  // localStorage.setItem("myLeads", JSON.stringify(myLeads));
  // renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}
