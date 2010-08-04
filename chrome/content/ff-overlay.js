tablist.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ tablist.showFirefoxContextMenu(e); }, false);
};

tablist.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-tablist").hidden = gContextMenu.onImage;
};

window.addEventListener("load", tablist.onFirefoxLoad, false);
