// Particle effect toggle
const switches = document.getElementById('2');

if(window.localStorage.getItem('v4Particles') !=== "") {
  if(window.localStorage.getItem('v4Particles') === "true") {
    switches.checked = true;
  }
  else {
    switches.checked = false;
  }
}

switches.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    window.localStorage.setItem('v4Particles', 'true');
  } else {
    window.localStorage.setItem('v4Particles', 'false');
  }
});

// Theme selection and storage
let themeId = localStorage.getItem("theme");
if(themeId==="") {themeId="d"}

document.getElementsByClassName("td")[0].value = themeId;

const themeDropdown = document.getElementsByClassName('td');
themeDropdown[0].addEventListener('change', function() {
  const selectedValue = this.value;
  localStorage.setItem('theme', selectedValue);
  // biome-ignore lint/correctness/noSelfAssign: <explanation>
  window.location=window.location;
});

function themeChange(ele) {
  const selTheme = ele.value;
  localStorage.setItem('theme', selTheme);
  // biome-ignore lint/correctness/noSelfAssign: <explanation>
  window.location=window.location;
}
