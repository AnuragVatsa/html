document.getElementById("addItemBtn").addEventListener("click", () => {
  const input = document.getElementById("listInput");
  const list = document.getElementById("dynamicList");
  if (input.value.trim()) {
    const li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
  }
});
