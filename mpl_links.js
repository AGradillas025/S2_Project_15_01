"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Anthony S,A Gradillas
   Date:   4.18.19
   
   Filename: mpl_links.js

*/

// For the load event that will runs an anonymous function
window.addEventListener("load", function () {
    // Refrences all the select elements nested within the govLinks form
    var allSelect = document.forms.govLinks;

    // Loops through the allSelect object collection and for each selection list in the collection and anonymous function was created for the onchage event
    for (var i = 0; i < allSelect.length; i++) {
        // The href of the location object was used to change the page shown in the browser window to the value of the target of the event object that has initiated the onchange event
        allSelect[i].onchange = function (e) {
            document.location.href = e.target.value;
        };
    };
});