const mountain=[
  {name:"kilimanjaro", height:5895 , plase:"tanzania"},
  {name:"everest", height:8848 , plase:"nepal"},
  {name:"mount fuji", height:3776 , plase:"japan"},
  {name:"vaalserberg", height:323 , plase:"netherlands"},
  {name:"denali", height:6168 , plase:"unated states"},
  {name:"popocatepetl", height:5468, plase:"mexico"},
  {name:"mont blanc", height:4808 , plase:"italy/france"}
];

const tableContainer = document.getElementById("mountains");
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

const headerRow = document.createElement("tr");
for (const head in mountain[0]) {
  const th = document.createElement("th");
  th.textContent = head;
  headerRow.appendChild(th);
}
thead.appendChild(headerRow);

for (const key of mountain) {
  const row = document.createElement("tr");
  for (const head in key) {
    const td = document.createElement("td");
    td.textContent = key[head];
    if (!isNaN(key[head])) {
      td.style.textAlign = "right";
    }
    row.appendChild(td);
  }
  tbody.appendChild(row);
}
table.appendChild(thead);
table.appendChild(tbody);

tableContainer.appendChild(table);
  
 
 
 
 