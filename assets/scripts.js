'use strict';
var newTagInput = document.querySelector('.new-tag-input');
var tag = document.getElementsByClassName('tag');

function createTag() {
  var tagConteiner = document.querySelector('.tag-container');
  var span = document.createElement('span');
  var closeSpan = document.createElement('span');
  var tagText = document.createTextNode(newTagInput.value);
  var closeSpanText = document.createTextNode('x');
  closeSpan.appendChild(closeSpanText);
  span.className = "tag";
  closeSpan.addEventListener('click', function() {
    console.log(this);
    span.style.display = "none"
  })
  span.appendChild(tagText);
  span.appendChild(closeSpan);
  tagConteiner.appendChild(span);
  newTagInput.value = "";
}

newTagInput.addEventListener('keyup', function addNewTag(e) {
  if (e.keyCode == 32 || e.which == 32) {
    createTag();
  }
});


function showModal() {
  var modal = document.querySelector('.modal');
  modal.style.display = "block";

}

function showTagView() {
  var tagView = document.querySelector('.tag-view');
  // newTagInput.focus();
  tagView.style.top = "0";
}

function hideTagView() {
  var tagView = document.querySelector('.tag-view');
  tagView.style.top = "600";
}
