let input = document.querySelector("#input");
const title = document.querySelector(".title");

const description = document.querySelector(".description");
let list = document.querySelector(".list");

let isDescriptionEdit = false;
let isTitleEdit = false;
const handleTitleEditClick = () => {
  isTitleEdit = !isTitleEdit;
};
const handleDescriptionEditClick = () => {
  isDescriptionEdit = !isDescriptionEdit;
};

// Add title
title.addEventListener("click", function () {
  // console.log("title", input.value);
  if (input.value === "") {
    alert("Add title");
  } else {
    description.style.backgroundColor = "#115e59";
    description.disabled = false;
    list.insertAdjacentHTML(
      "beforeend",
      `<li class="items">
     <div> 
          <input type="checkbox" class="checkbox"/>
          <div class="itemTitle">
            <div> <span> Title: </span> 
              <p>  ${input.value} </p> </div>
       <div class="icons">
       <i class="fa-solid fa-trash delete"></i>
       <i class="fa-solid fa-pen-to-square edit"></i>
       <i class="fa-solid fa-floppy-disk save"></i>

        </div>
        </div>
     </div>
     </li>`
    );
    input.value = "";
    // saveData();
  }

  // To remove item in a list (both title and description)
  const deleteIcon = document.querySelectorAll(
    ".list .items .itemTitle .icons  .delete"
  );
  
  let items = document.querySelectorAll(".list .items ");

  deleteIcon.forEach(function (item, index) {
    item.addEventListener("click", function () {
      console.log("  items[index]", items[index]);

      items[index].remove();

      //   saveData();
    });
  });

  //   Edit Title

  let itemsPara = document.querySelectorAll(".list .items .itemTitle p");
  const editIcon = document.querySelectorAll( ".list .items .itemTitle .icons .edit ");

  const saveButton = document.querySelectorAll(".list .items .itemTitle .icons .save ");

  editIcon.forEach((Icon, index) => {
    let titleVal = ""; 
    Icon.addEventListener("click", () => {
      titleVal = itemsPara[index].textContent;
      handleTitleEditClick();
      if (isTitleEdit) {
       
        console.log("Current title:", titleVal);
    
     
        Icon.style.visibility = "hidden";
        saveButton[index].style.visibility = "visible";
    
  
        itemsPara[index].innerHTML = `
            <input 
                type="text" 
                class="titleInputElement" 
                value="${titleVal}" 
                style="border:1px solid red; padding:0.5rem;" 
            />`;
    
  
        const titleInputElement = itemsPara[index].querySelector('.titleInputElement');
        titleInputElement.addEventListener('input', (e) => {
            titleVal = e.target.value; 
            console.log("New value:", titleVal);
        });
    
        
        saveButton[index].addEventListener("click", () => {
           
            isTitleEdit = false;
            editIcon[index].style.visibility = "visible";
            saveButton[index].style.visibility = "hidden";
    
          
            itemsPara[index].innerHTML = `${titleVal}`;
            console.log("Final saved value:", titleVal);
        });
    }
    
    });
  });

  

  

});


// Add Description
description.addEventListener("click", () => {
  console.log("description", input.value);

  const item = document.querySelectorAll(".items");
  const Length = item.length - 1;
  console.log(item.length);

  console.log("button clicked");
  if (input.value === "" && description.disabled) {
    alert("Add description");
  } else if (!description.disabled) {
    item[Length].insertAdjacentHTML(
      "beforeend",
      `
         
          <div class="item_description">
          <div> <span> Description: </span> 
          <p>  ${input.value} </p></div>
           <div class="icons">
           <i class="fa-solid fa-trash delete"></i>
           <i class="fa-solid fa-pen-to-square edit"></i>
            <i class="fa-solid fa-floppy-disk save"></i>
            </div>
         </div>`
    );
    // saveData();
    input.value = "";
  }
  description.style.backgroundColor = "#99f6e4";
  description.disabled = true;

  // Edit Description

  let itemsPara = document.querySelectorAll(".list .items .item_description p");

  const editIcon = document.querySelectorAll(
    ".list .items .item_description .icons .edit "
  );

  const saveButton = document.querySelectorAll(
    ".list .items .item_description .icons .save "
  );
  
  editIcon.forEach((Icon, index) => {
    let descriptionVal = ""; 
    Icon.addEventListener("click", () => {
      descriptionVal = itemsPara[index].textContent;
      handleDescriptionEditClick();
      if (isDescriptionEdit) {
      
   
    

        Icon.style.visibility = "hidden";
        saveButton[index].style.visibility = "visible";
    
  
        itemsPara[index].innerHTML = `
            <input 
                type="text" 
                class="descriptionInputElement" 
                value="${descriptionVal}" 
                style="border:1px solid red; padding:0.5rem;" 
            />`;
    
     
        const descriptionInputElement = itemsPara[index].querySelector('.descriptionInputElement');
        descriptionInputElement.addEventListener('input', (e) => {
            descriptionVal = e.target.value; 
        
        });
    
      
        saveButton[index].addEventListener("click", () => {
       
            isDescriptionEdit = false;
            editIcon[index].style.visibility = "visible";
            saveButton[index].style.visibility = "hidden";
    
          
            itemsPara[index].innerHTML = `${descriptionVal}`;
           
        });
    }
    
    });
  });


 

 

  // Delete description only
  const deleteIcon = document.querySelectorAll(
    ".list .items .item_description .icons  .delete"
  );
  console.log(deleteIcon);
  let descriptionItems = document.querySelectorAll(
    ".list .items .item_description"
  );
  deleteIcon.forEach(function (item, index) {
    item.addEventListener("click", function () {
      descriptionItems[index].remove();
      description.style.backgroundColor = "#115e59";
      description.disabled = false;
      //   saveData();
    });
  });
});

// function saveData(){
//     localStorage.setItem('data',list.innerHTML);
// }

// function getData(){
//     list.innerHTML=localStorage.getItem('data');
// }
// getData();
