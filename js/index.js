var hidden = document.getElementsByClassName("hide")[0];

let table = document.getElementsByClassName("table")[0];

table.addEventListener("click", function (e) {
  colors = Array("red", "green", "blue", "yello", "gray", "ivory", "lightgreen", "lightblue");
  e.target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];;
});

var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Click on disabled button
var disabled = document.getElementById("disabled");
disabled.addEventListener("click", function () {
  modal.style.display = "block";
  modal.getElementById("modal-text").innerText = "Hello from disabled!";
});

// Click on hidden button
var hidden = document.getElementById("hidden");
hidden.addEventListener("click", function () {
  modal.style.display = "block";
  modal.getElementById("modal-text").innerText = "Hello from hidden button!";
});

// Click on hidden button
var opacity = document.getElementById("opacity");
opacity.addEventListener("click", function () {
  modal.style.display = "block";
  document.getElementById("modal-text").innerText = "Hello from opacity button!";
});

var example_input = document.getElementById("inp");
example_input.addEventListener("keyup", function () {
  var disabled_button = document.getElementById("disabled");
  if (example_input.value == "привет как твои дела сегодня?") {
    if (confirm("Хотите активировать кнопку?")) {
      disabled_button.style.animation="spin2 2s linear";
      alert("Кнопка успешно активирована!");
      setTimeout(() => disabled_button.removeAttribute("disabled"), 2000);
      
    };
    
  } else {
    disabled_button.setAttribute("disabled", null);
  }
});

function setCookie(name, value, daysToLive) {
  // Create expiration date
  const date = new Date();
  date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
  let expires = "expires=" + date.toUTCString();
  
  // Set the cookie with all options
  document.cookie = `${name}=${value}; ${expires}; path=/`;
  console.log("cookie set");
}

// Usage
setCookie("username", "JohnDoe", 30); // Expires in 30 days
setCookie("theme", "dark", 365); // Expires in 1 year

function listCookiesAsTable() {
  // Get all cookies
  var cookies = document.cookie.split(';');
  cookies = cookies.filter(function(entry) { return entry.trim() != ''; });

  if (cookies.length == 0) {
    console.log("No cookies found");
    return "";
  }
  
  // Create table element
  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.width = '100%';
  table.style.margin = '20px 0';
  
  // Create table header
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  
  ['Name', 'Value', 'Actions'].forEach(headerText => {
      const th = document.createElement('th');
      th.textContent = headerText;
      th.style.border = '1px solid #ddd';
      th.style.padding = '8px';
      th.style.textAlign = 'left';
      th.style.backgroundColor = '#f2f2f2';
      headerRow.appendChild(th);
  });
  
  thead.appendChild(headerRow);
  table.appendChild(thead);
  
  // Create table body
  const tbody = document.createElement('tbody');
  
  cookies.forEach(cookie => {
      const row = document.createElement('tr');
      // Split cookie into name and value
      const [name, ...valueParts] = cookie.trim().split('=');
      const value = valueParts.join('='); // In case value contains '='
      
      // Name cell
      const nameCell = document.createElement('td');
      nameCell.textContent = decodeURIComponent(name);
      nameCell.style.border = '1px solid #ddd';
      nameCell.style.padding = '8px';
      row.appendChild(nameCell);
      
      // Value cell
      const valueCell = document.createElement('td');
      valueCell.textContent = decodeURIComponent(value);
      valueCell.style.border = '1px solid #ddd';
      valueCell.style.padding = '8px';
      row.appendChild(valueCell);
      
      // Actions cell (with delete button)
      const actionsCell = document.createElement('td');
      actionsCell.style.border = '1px solid #ddd';
      actionsCell.style.padding = '8px';
      
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.style.padding = '5px 10px';
      deleteBtn.style.backgroundColor = '#f44336';
      deleteBtn.style.color = 'white';
      deleteBtn.style.border = 'none';
      deleteBtn.style.borderRadius = '4px';
      deleteBtn.style.cursor = 'pointer';
      
      deleteBtn.addEventListener('click', () => {
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
          row.remove();
      });
      
      actionsCell.appendChild(deleteBtn);
      row.appendChild(actionsCell);
      
      tbody.appendChild(row);
  });
  
  table.appendChild(tbody);

  document.getElementById("cookies").appendChild(table);
  
  return table;
}

listCookiesAsTable();