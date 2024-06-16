const addProduct = () => {
  var task = document.getElementById("input").value;

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  li.appendChild(document.createTextNode(task));

  li.appendChild(checkbox);

  document.getElementById("ul").appendChild(li);
};
