fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    const cityDropdown = document.getElementById("cityDropdown");
    const userList = document.getElementById("userList");
    const cities = [...new Set(users.map(user => user.address.city))];
    
    cityDropdown.innerHTML = `<option value="">Select a city</option>` + 
      cities.map(city => `<option value="${city}">${city}</option>`).join("");
    
    cityDropdown.addEventListener("change", (e) => {
      const selectedCity = e.target.value;
      const filteredUsers = users.filter(user => user.address.city === selectedCity);
      userList.innerHTML = filteredUsers.length ? 
        filteredUsers.map(user => `<li>${user.name} - ${user.email}</li>`).join("") : 
        "<li>No users found</li>";
    });
  });