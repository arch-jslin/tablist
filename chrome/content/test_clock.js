function initTime(event) {
  updateTime();
  window.setInterval(updateTime, 1000);
  var myPanel = document.getElementById("my-panel");
  alert(event.target);
  myPanel.openPopup( myPanel , "before_start" , 0 , 0 , false, false);
}

function updateTime() {
  var myPanel = document.getElementById("my-panel");
  myPanel.label = new Date().toLocaleTimeString();
}