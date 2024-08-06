// let myLeads = []
// // console.log(localStorage.getItem("myLeads"))
// const inputEL = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn");
// const ulEL = document.getElementById("ul-el");
// const deleteBtn = document.getElementById("delete-btn")
// const tabBtn = document.getElementById("tab-btn")
// const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

// if (leadsFromLocalStorage){
//     myLeads = leadsFromLocalStorage
//     render(myLeads)
// }

// tabBtn.addEventListener("click", function(){
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         myLeads.push(tabs[0].url)
//         localStorage.setItem("myLeads", JSON.stringify(myLeads))
//         render(myLeads)

//     })

// })

// function render(leads){
//     let listItems = ""
//     for(let i = 0; i < leads.length; i++){
//         // listItems += "<li><a target= '_blank' href=' " + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
//         listItems += `
//         <li>
//             <a target= '_blank' href='${myLeads[i]}'>
//             ${leads[i]}
//             </a>
//         </li>`;
//     }

//     ulEL.innerHTML = listItems
// }

// deleteBtn.addEventListener("dblclick", ()=>{
//     localStorage.clear()
//     myLeads = []
//     render(myLeads)
// })

// inputBtn.addEventListener("click", ()=>{

//     myLeads.push(inputEL.value);
//     inputEL.value = "";
//     localStorage.setItem("myLeads", JSON.stringify(myLeads));

//     render(myLeads)
//     console.log(localStorage.getItem("myLeads"))
// })

// shakthi's practice
let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEL = document.getElementById("input-el");
const ulEL = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn") 
const tabBtn = document.getElementById("tab-btn")
const tabs = [
  {url: "https://www.x.com"}
]
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

tabBtn.addEventListener("click", function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  
     })
     
   })

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += 
    `<li>
        <a target='_blank' href='${leads[i]}'> ${leads[i]} 
        </a>
    </li>`;
  }
  ulEL.innerHTML = listItems;
}

deleteBtn.addEventListener("click", ()=>{

  localStorage.clear()
  myLeads = []
  render(myLeads) 
})

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEL.value);
  inputEL.value = "";
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  render(myLeads);
  console.log(localStorage.getItem("myLeads"))
});


