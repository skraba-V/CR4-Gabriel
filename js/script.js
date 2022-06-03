const listOfTask = JSON.parse(tasks); 

const content = document.querySelector(".ruf");
 

function call(x) {
    content.innerHTML = "";
  for (let tasks of x) {
      if (tasks.priority <= 1) {
          color = "bg-success";
          jos = "none";
          shdw = "whole-s";
      } else if (tasks.priority <= 3) {
          color = "bg-warning";
          jos = "none";
          shdw = "whole-w";
      } else  if (tasks.priority <= 5){
          color = "bg-danger";
          jos = "none";
          shdw = "whole-d";
      } else {
        color = "bg-light";
        jos = "bg-danger";
        shdw = "whole-d";
    }
    content.innerHTML += `
           <div class="col-lg-4 col-md-6 col-sm-12 d-flex mio my-2 justify-content-center">
               <div class="card ${shdw} ${jos} " style="width: 18rem">
                   <div class="first row justify-content-center">
                       <div class="col-12 my-2 row d-flex justify-content-between">
                           <div class="col-3 text-center">
                               <h6 class="task-b">Task</h6>
                           </div>
                           <div class="col-5 d-flex justify-content-end">
                           <img class="tree m-1" src="../img/bookmark@2x.png">
                           <img class="bell m-1" src="../img/dots.png">
                           </div>
                       </div>
                       <div class="col-12">
                           <img src="${tasks.photo}" class="card-img-top" style="height:10rem; object-fit:cover" alt="..." />
                       </div>
                   </div>
                   <div class="card-body trying">
                       <h5 class="card-title text-center">${tasks.do}</h5>
                       <h6 class="card-title text-center">${tasks.info}</h6>
                       <hr>
                       <div class="pry gogo d-flex">
                           <svg  class="b-likes" id="i-alert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                               <path d="M16 3 L30 29 2 29 Z M16 11 L16 19 M16 23 L16 25" />
                           </svg>
                           <p>Priority level:</p>
                           <p class="mx-1 px-2 ${color} rounded domov">${tasks.priority}</p>
                       </div>
                       <div class="pry d-flex">
                           <svg id="i-calendar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                               <path d="M2 6 L2 30 30 30 30 6 Z M2 15 L30 15 M7 3 L7 9 M13 3 L13 9 M19 3 L19 9 M25 3 L25 9" />
                           </svg>
                           <p>Deadline:${tasks.deadline}</p> 
                       </div>
                       <hr>
                       <div class="d-flex justify-content-end">
                           <div class="col-4 mx-2 d-flex align-items-center">
                           <a class="btn btn-danger d-flex align-items-center"> 
                               <svg id="i-trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="15" height="15" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                               <path d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" />
                               </svg>
                               Delete</a>
                           </div>
                           <div class="col-4 d-flex align-items-center">
                           <a class="btn btn-success d-flex align-items-center"> 
                               <svg id="i-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="15" height="15" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                   <path d="M2 20 L12 28 30 4" />
                               </svg>
                               Done</a>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
    `;
  }
  action();
}

function action() {
  let btns = document.getElementsByClassName("gogo");
  for (let i = 0; i < btns.length; i++) { 
    btns[i].addEventListener("click", function () {
        listOfTask[i].priority++;
        
      document.getElementsByClassName("domov")[i].innerHTML = listOfTask[i].priority;

      var sortedArray = listOfTask.slice((a, b) => b.priority - a.priority);
      call(sortedArray);
    });
  }
} 
call(listOfTask);
action();
 
function sortpr() {
    listOfTask.sort(function(a, v) {
        return v.priority - a.priority;
    })
}
 
document.querySelector(".lokas").addEventListener("click", function() {
    sortpr();
    call(listOfTask);
});