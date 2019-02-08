# FunWithJQuery Events
* **Level:** Beginner
* **Description:** Practice implementing jQuery DOM manipulations and event handlers

## Lesson
Basic jQuery syntax: $(selector).action

To implement DOM manipulations and event handlers on HTML elements using jQuery, use the process flow:
1. Identify the element you are watching/targetting (query/select the element)
2. Indicate the action to be taken on the element and if applicable, refer to the function that should be invoked
3. Write a function with all of the things that should happen when the action is triggered

Refer to the jQuery documentation for the full list of actions:
* [DOM Manipulations](https://api.jquery.com/category/manipulation/)
* [Events](https://api.jquery.com/category/events/)
* [Animations/Effects](https://api.jquery.com/category/effects/)

## Challenges
* **Challenge Zero:** On hover of each icon, change to giphy. When hovering off, return to icon
* **Challenge One:** Change the title from “Fortnite Emotes!” to anything you want
* **Challenge Two:** Remove the element with id “extra-text”
* **Challenge Three:** On click of the Fortnite logo, change the bg to “bg2.jpg”
* **Challenge Four:** On click of the emote titles, hide/show (toggle) the emote-info

## Example
```javascript
$(“#icon”).hover(enter, leave); 

function enter() {
  this.src = “giphy.gif”;
} 

function leave() {
  this.src = “icon.gif”;
}
```

## Relevant jQuery actions
* Inner HTML → ```$(selector).html(“new text”)```
* Remove → ```$(selector).remove(“#element”)```
* Click →
```javascript
$(selector).click(toBeExecuted)
  function toBeExecuted() {
      //all the things to be executed
  }
```
* Toggle → ```$(selector).slideToggle()```

## Solution Gist
[script.js](https://gist.github.com/isabellatea/e169d61bf3f512959017aa7aa3cbdf0c)
