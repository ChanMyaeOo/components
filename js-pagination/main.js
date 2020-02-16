const listItems = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
  "Item 16",
  "Item 17",
  "Item 18",
  "Item 19",
  "Item 20",
  "Item 21",
  "Item 22"
];

const pageRows = 5;
let currentPage = 1;
const wrapper = document.querySelector(".content");
const list = document.querySelector(".list");
const paginationNum = document.querySelector(".pagination");
const displayListItem = (items, pageRows, page) => {
  currentPage = page;
  page--;
  let start = pageRows * page;
  let end = start + pageRows;
  let itemLists = items.slice(start, end);
  itemLists.forEach(itemList => {
    const content = document.createElement("div");
    content.textContent = itemList;
    content.classList.add("list");
    list.appendChild(content);
  });
};

const setPagination = (items, pageRows) => {
  let pagination = Math.ceil(items.length / pageRows);
  for (let i = 1; i < pagination + 1; i++) {
    const button = paginationBtn(i, items);
    paginationNum.appendChild(button);
  }
};

const paginationBtn = (pgnumber, items) => {
  const button = document.createElement("button");
  button.textContent = pgnumber;
  button.classList.add("button");

  button.addEventListener("click", e => {
    list.innerHTML = "";
    displayListItem(items, pageRows, e.target.textContent);
    currentPage = e.target.textContent;
  });
  return button;
};

displayListItem(listItems, pageRows, currentPage);
setPagination(listItems, pageRows);
