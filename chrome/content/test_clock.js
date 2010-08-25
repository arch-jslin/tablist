function initTime() {
  alert("HI!");
  updateTime();
  window.setInterval(updateTime, 1000);
}

function updateTime() {
  var myPanel = document.getElementById("my-panel");
  myPanel.label = new Date().toLocaleTimeString();
}