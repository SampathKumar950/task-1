const items = document.querySelectorAll(".product");
const list_element = document.querySelector(".block");
const pagination_element = document.querySelector(".pagination");
console.log(items);
let current_page = 1;
let rows = 3;

function DisplayList(items, wrapper, rows_per_page, page){
    wrapper.innerHTML = "";
    page--;
    let start = rows_per_page * (page);
    let end = start + rows_per_page;
    console.log(start,end);
    for (let i = start; i<end; i++){
        let item = items[i];
        let item_element = document.createElement('div');
        item_element.classList.add('product');
        item_element.innerText = item;
        console.log(item_element);
        wrapper.appendChild(item);
    }
}

function SetupPagination(items, wrapper , rows_per_page){
    wrapper.innerHTML = "";

    let page_count = Math.ceil(items.length / rows_per_page);
    for(let i = 1; i<page_count + 1; i++){
       let btn = PaginationButton(i,items);
       wrapper.appendChild(btn);
    }
}

function PaginationButton(page, items){
    let button = document.createElement('button');
    button.innerText = page;

    if(current_page == page)button.classList.add('active');

    button.addEventListener('click', function(){
        current_page = page;
        DisplayList(items, list_element, rows, current_page);

        let current_btn = document.querySelector('.pagination button.active');
        current_btn.classList.remove('active');

        button.classList.add('active');
    });

    return button;
}

DisplayList(items, list_element, rows, current_page);
SetupPagination(items, pagination_element, rows);