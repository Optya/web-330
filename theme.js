/**
 * Title: theme.js
 * Author: Walter McCue
 * Date: 08/12/22
 * Description: JavaScript to capture, store, and display the light or dark theme that the user selects
 * References: WEB 330 GitHub; WEB 330 Assign_1;
 */

/**
 * Copied the following script from WEB 300 GitHub
 */

/**
 * Set the default theme to light if one has not been set in the browsers localStorage
 */
 function setDefaultTheme()
 {
     const theme = localStorage.getItem("mode") || "light-theme";
     const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
     const iconText = localStorage.getItem("iconText") || "Light Mode";
 
     document.body.classList.value = theme;
     document.getElementById("icon-mode").classList.add(iconMode);
     document.getElementById("icon-text").innerHTML = iconText;
 }
 
 /**
  * Set the HTML body to the user's selected theme. If one has not been selected, set the theme to light-theme
  */
 function setSelectedTheme()
 {
     document.body.classList.value = localStorage.getItem("mode") || "light-theme";
 }