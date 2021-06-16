const btnCopy = document.querySelector('.app-btn-copy');
const btnClear = document.querySelector('.app-btn-clear');
const readyTextForm = document.querySelector('.app-transform-to');
const originalText = document.querySelector('.app-transform-from');
const btnToKeyWords = document.querySelector('.app-key-words');
const btnToHashTags = document.querySelector('.app-hashtags');
const textType = document.querySelector('.app-type-text');
const btnTransform = document.querySelector('.app-btn-transform');


// Activation copy button
function activeCopyButton(textPasted) {
  if (textPasted === true) {
    btnCopy.removeAttribute('disabled');
  }
  else {
    btnCopy.setAttribute("disabled", "disabled");
  }
}


// Copy result
btnCopy.addEventListener('click', function() {
  readyTextForm.select();
  document.execCommand('copy');
  toggleBtnCopy();
});


// Toggle copy button
function toggleBtnCopy() {
  btnCopy.classList.add('btn-success');
  setTimeout(function(){
    btnCopy.classList.remove('btn-success');
  }, 1000);
}


// Past ready text
function pastKeyWords(keyWords) {
  let textPasted = false;
  readyTextForm.value = keyWords;
  switch (readyTextForm.value) {
    case '': textPasted = false;
    break;
    default: textPasted = true;
  }
  activeCopyButton(textPasted);
}


// Clear form
btnClear.addEventListener('click', function() {
  readyTextForm.value = '';
  originalText.value = '';
  textPasted = false;
  textType.textContent = '';
  activeCopyButton(textPasted);
  btnTransform.setAttribute('disabled', 'disabled');
});


// Split text
function splitKeyWords(getKeyWords) {
    const wordsArray = getKeyWords.split(/(?:,|;| |#)+/);
    return wordsArray;
}


// Remove ympty elements of array
function notEmpty(keyWords) {
  keyWords = keyWords.filter(word => {
    if (word != '') {
      return word;
    }
  });
  return keyWords;
}


// Remove non-unique words
function unique(arr) {
  return Array.from(new Set(arr));
}


// Get original text
function getText() {
  const getKeyWords = originalText.value;
  return textModify(getKeyWords);
}


// Modify text
function textModify(getKeyWords) {
    let keyWords = splitKeyWords(getKeyWords);
    keyWords = unique(keyWords);
    keyWords = notEmpty(keyWords);
    return keyWords;
}


// Transform words array to keywords
function toKeyWords() {
  let keyWords = getText();
  keyWords = keyWords.join(', ');
  pastKeyWords(keyWords);
  textType.textContent = 'KeyWords';
}


// Transform words array to hashtags
function toHashTags() {
  let keyWords = getText();
  keyWords = keyWords.map(word => {
    if (word != '') {
      return '#' + word;
    }
  });
  keyWords = keyWords.join(' ');
  pastKeyWords(keyWords);
  textType.textContent = '#HashTags';
}

originalText.addEventListener("input",function(ev){
  switch (originalText.value) {
    case '': btnTransform.setAttribute('disabled', 'disabled');
      break;
    default: btnTransform.removeAttribute('disabled');
  }
});


btnToKeyWords.addEventListener('click', toKeyWords);
btnToHashTags.addEventListener('click', toHashTags);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJidW5kbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnRuQ29weSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAtYnRuLWNvcHknKTtcclxuY29uc3QgYnRuQ2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwLWJ0bi1jbGVhcicpO1xyXG5jb25zdCByZWFkeVRleHRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcC10cmFuc2Zvcm0tdG8nKTtcclxuY29uc3Qgb3JpZ2luYWxUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcC10cmFuc2Zvcm0tZnJvbScpO1xyXG5jb25zdCBidG5Ub0tleVdvcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcC1rZXktd29yZHMnKTtcclxuY29uc3QgYnRuVG9IYXNoVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAtaGFzaHRhZ3MnKTtcclxuY29uc3QgdGV4dFR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwLXR5cGUtdGV4dCcpO1xyXG5jb25zdCBidG5UcmFuc2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwLWJ0bi10cmFuc2Zvcm0nKTtcclxuXHJcblxyXG4vLyBBY3RpdmF0aW9uIGNvcHkgYnV0dG9uXHJcbmZ1bmN0aW9uIGFjdGl2ZUNvcHlCdXR0b24odGV4dFBhc3RlZCkge1xyXG4gIGlmICh0ZXh0UGFzdGVkID09PSB0cnVlKSB7XHJcbiAgICBidG5Db3B5LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBidG5Db3B5LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8gQ29weSByZXN1bHRcclxuYnRuQ29weS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gIHJlYWR5VGV4dEZvcm0uc2VsZWN0KCk7XHJcbiAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcclxuICB0b2dnbGVCdG5Db3B5KCk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIFRvZ2dsZSBjb3B5IGJ1dHRvblxyXG5mdW5jdGlvbiB0b2dnbGVCdG5Db3B5KCkge1xyXG4gIGJ0bkNvcHkuY2xhc3NMaXN0LmFkZCgnYnRuLXN1Y2Nlc3MnKTtcclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICBidG5Db3B5LmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1zdWNjZXNzJyk7XHJcbiAgfSwgMTAwMCk7XHJcbn1cclxuXHJcblxyXG4vLyBQYXN0IHJlYWR5IHRleHRcclxuZnVuY3Rpb24gcGFzdEtleVdvcmRzKGtleVdvcmRzKSB7XHJcbiAgbGV0IHRleHRQYXN0ZWQgPSBmYWxzZTtcclxuICByZWFkeVRleHRGb3JtLnZhbHVlID0ga2V5V29yZHM7XHJcbiAgc3dpdGNoIChyZWFkeVRleHRGb3JtLnZhbHVlKSB7XHJcbiAgICBjYXNlICcnOiB0ZXh0UGFzdGVkID0gZmFsc2U7XHJcbiAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6IHRleHRQYXN0ZWQgPSB0cnVlO1xyXG4gIH1cclxuICBhY3RpdmVDb3B5QnV0dG9uKHRleHRQYXN0ZWQpO1xyXG59XHJcblxyXG5cclxuLy8gQ2xlYXIgZm9ybVxyXG5idG5DbGVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gIHJlYWR5VGV4dEZvcm0udmFsdWUgPSAnJztcclxuICBvcmlnaW5hbFRleHQudmFsdWUgPSAnJztcclxuICB0ZXh0UGFzdGVkID0gZmFsc2U7XHJcbiAgdGV4dFR5cGUudGV4dENvbnRlbnQgPSAnJztcclxuICBhY3RpdmVDb3B5QnV0dG9uKHRleHRQYXN0ZWQpO1xyXG4gIGJ0blRyYW5zZm9ybS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIFNwbGl0IHRleHRcclxuZnVuY3Rpb24gc3BsaXRLZXlXb3JkcyhnZXRLZXlXb3Jkcykge1xyXG4gICAgY29uc3Qgd29yZHNBcnJheSA9IGdldEtleVdvcmRzLnNwbGl0KC8oPzosfDt8IHwjKSsvKTtcclxuICAgIHJldHVybiB3b3Jkc0FycmF5O1xyXG59XHJcblxyXG5cclxuLy8gUmVtb3ZlIHltcHR5IGVsZW1lbnRzIG9mIGFycmF5XHJcbmZ1bmN0aW9uIG5vdEVtcHR5KGtleVdvcmRzKSB7XHJcbiAga2V5V29yZHMgPSBrZXlXb3Jkcy5maWx0ZXIod29yZCA9PiB7XHJcbiAgICBpZiAod29yZCAhPSAnJykge1xyXG4gICAgICByZXR1cm4gd29yZDtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4ga2V5V29yZHM7XHJcbn1cclxuXHJcblxyXG4vLyBSZW1vdmUgbm9uLXVuaXF1ZSB3b3Jkc1xyXG5mdW5jdGlvbiB1bmlxdWUoYXJyKSB7XHJcbiAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcnIpKTtcclxufVxyXG5cclxuXHJcbi8vIEdldCBvcmlnaW5hbCB0ZXh0XHJcbmZ1bmN0aW9uIGdldFRleHQoKSB7XHJcbiAgY29uc3QgZ2V0S2V5V29yZHMgPSBvcmlnaW5hbFRleHQudmFsdWU7XHJcbiAgcmV0dXJuIHRleHRNb2RpZnkoZ2V0S2V5V29yZHMpO1xyXG59XHJcblxyXG5cclxuLy8gTW9kaWZ5IHRleHRcclxuZnVuY3Rpb24gdGV4dE1vZGlmeShnZXRLZXlXb3Jkcykge1xyXG4gICAgbGV0IGtleVdvcmRzID0gc3BsaXRLZXlXb3JkcyhnZXRLZXlXb3Jkcyk7XHJcbiAgICBrZXlXb3JkcyA9IHVuaXF1ZShrZXlXb3Jkcyk7XHJcbiAgICBrZXlXb3JkcyA9IG5vdEVtcHR5KGtleVdvcmRzKTtcclxuICAgIHJldHVybiBrZXlXb3JkcztcclxufVxyXG5cclxuXHJcbi8vIFRyYW5zZm9ybSB3b3JkcyBhcnJheSB0byBrZXl3b3Jkc1xyXG5mdW5jdGlvbiB0b0tleVdvcmRzKCkge1xyXG4gIGxldCBrZXlXb3JkcyA9IGdldFRleHQoKTtcclxuICBrZXlXb3JkcyA9IGtleVdvcmRzLmpvaW4oJywgJyk7XHJcbiAgcGFzdEtleVdvcmRzKGtleVdvcmRzKTtcclxuICB0ZXh0VHlwZS50ZXh0Q29udGVudCA9ICdLZXlXb3Jkcyc7XHJcbn1cclxuXHJcblxyXG4vLyBUcmFuc2Zvcm0gd29yZHMgYXJyYXkgdG8gaGFzaHRhZ3NcclxuZnVuY3Rpb24gdG9IYXNoVGFncygpIHtcclxuICBsZXQga2V5V29yZHMgPSBnZXRUZXh0KCk7XHJcbiAga2V5V29yZHMgPSBrZXlXb3Jkcy5tYXAod29yZCA9PiB7XHJcbiAgICBpZiAod29yZCAhPSAnJykge1xyXG4gICAgICByZXR1cm4gJyMnICsgd29yZDtcclxuICAgIH1cclxuICB9KTtcclxuICBrZXlXb3JkcyA9IGtleVdvcmRzLmpvaW4oJyAnKTtcclxuICBwYXN0S2V5V29yZHMoa2V5V29yZHMpO1xyXG4gIHRleHRUeXBlLnRleHRDb250ZW50ID0gJyNIYXNoVGFncyc7XHJcbn1cclxuXHJcbm9yaWdpbmFsVGV4dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIixmdW5jdGlvbihldil7XHJcbiAgc3dpdGNoIChvcmlnaW5hbFRleHQudmFsdWUpIHtcclxuICAgIGNhc2UgJyc6IGJ0blRyYW5zZm9ybS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDogYnRuVHJhbnNmb3JtLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbmJ0blRvS2V5V29yZHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b0tleVdvcmRzKTtcclxuYnRuVG9IYXNoVGFncy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvSGFzaFRhZ3MpOyJdLCJmaWxlIjoiYnVuZGxlLmpzIn0=
