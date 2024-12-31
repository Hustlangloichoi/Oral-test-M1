const x = new Date();
const date = document.getElementById("date");
date.innerHTML = `Date: ${x}`;
const jobList = document.getElementById("jobList")
console.log(jobList);
const previous = document.getElementById("previous");
const next = document.getElementById("next");
let pageNumber = 1;
const searchButton = document.getElementById("searchButton");
const input = document.getElementById("input");
let searchTerm="";


const allJobs = async () => {
    const url = `https://ry7l6h-8080.csb.app/jobs?_limit=10&_page=${pageNumber}&q=${searchTerm}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    jobList.innerHTML="";
    data.forEach(job =>{
        const y = document.createElement("li");
        y.innerHTML =`${job.title}`
        jobList.appendChild(y);
    })
}

    previous.addEventListener("click", async()=>{
        if(pageNumber>1){
            pageNumber --;
            allJobs();
        };
    })
    next.addEventListener("click", async()=>{
        pageNumber ++;
        allJobs();
    })

searchButton.addEventListener("click", async()=>{
    searchTerm=input.value;
    allJobs();
})


allJobs();

