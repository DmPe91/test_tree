let services;

(async () => {
  await fetch("https://65d47e763f1ab8c6343546c4.mockapi.io/api/test_tree/items")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      services = json;
    });

  let items = document.getElementById("items");
  let root_2, root_3, root_8;

  function createUl(head) {
    let arr = services.filter((el) => el.head === head);
    arr = arr.sort((a, b) => (a.sorthead > b.sorthead ? 1 : -1));

    let ul = document.createElement("ul");

    arr.forEach((el) => {
      let li = document.createElement("li");
      let span = document.createElement("span");
      if (el.id === 2) {
        li.id = "root_2";

        span.onclick = () => {
          document
            .getElementById(li.id)
            .lastElementChild.classList.toggle("block");
        };
        root_2 = li;
      }
      if (el.id === 3) {
        li.id = "root_3";
        span.onclick = () => {
          document
            .getElementById(li.id)
            .lastElementChild.classList.toggle("block");
        };
        root_3 = li;
      }
      if (el.id === 8) {
        li.id = "root_8";
        span.onclick = () => {
          document
            .getElementById(li.id)
            .lastElementChild.classList.toggle("block");
        };
        root_8 = li;
      }
      li.className = "root";
      span.innerHTML = el.name + "(" + el.price + ")";
      li.appendChild(span);
      ul.appendChild(li);
    });
    return ul;
  }
  let root_node = createUl(null);
  let root_node_2 = createUl(2);
  let root_node_3 = createUl(3);
  let root_node_8 = createUl(8);
  items.appendChild(root_node);
  root_2.appendChild(root_node_2);
  root_3.appendChild(root_node_3);
  root_8.appendChild(root_node_8);
})();
