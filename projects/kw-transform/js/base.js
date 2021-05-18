const btnCopy = document.querySelector('.app-btn-copy');
const btnClear = document.querySelector('.app-btn-clear');
const btnTransform = document.querySelector('.app-btn-transform');
const readyTextForm = document.querySelector('.app-transform-to');
const originalText = document.querySelector('.app-transform-from');


// Copy result
btnCopy.addEventListener('click', function() {
  readyTextForm.select();
  document.execCommand('copy');
  toggleBtnCopy();
})


// Toggle copy button
function toggleBtnCopy() {
  btnCopy.classList.add('btn-success');
  btnCopy.textContent = 'Text copyed';
  setTimeout(function(){
    btnCopy.classList.remove('btn-success');
    btnCopy.textContent = 'Copy';
  }, 1000);
}


// Select method to text transform
function selectTransformMethod() {
    const selectedSplitOption = document.querySelector('select').value;
    splitKeyWords(selectedSplitOption);
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


// Activation copy button
function activeCopyButton(textPasted) {
  if (textPasted === true) {
    btnCopy.removeAttribute('disabled');
  }
  else {
    btnCopy.setAttribute("disabled", "disabled");
  }
}


// Clear form
btnClear.addEventListener('click', function() {
  readyTextForm.value = '';
  originalText.value = '';
  textPasted = false;
  activeCopyButton(textPasted);
});


// Remove ympty elements of array
function notEmpty(keyWords) {
  keyWords = keyWords.filter(word => {
    if (word != '') {
      return word;
    };
  })
  return keyWords
}


// Modify text
function splitKeyWords(selectedOption) {
    const getKeyWords = originalText.value;
    let keyWords = getKeyWords.split(/(?:,|;| |#)+/);
    keyWords = unique(keyWords);
    keyWords = notEmpty(keyWords);
    if (selectedOption === 'stokes') {
        keyWords = keyWords.join(', ');
    }
    else if (selectedOption === 'networks') {
        keyWords = keyWords.map(word => {
          if (word != '') {
            return '#' + word;
          }
        })
        keyWords = keyWords.join(' ');
    }
    pastKeyWords(keyWords);
}

function unique(arr) {
  return Array.from(new Set(arr));
}


btnTransform.addEventListener('click', selectTransformMethod);
