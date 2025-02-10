/* Navigation function: Redirect to the specified page */
function goToNextPage(pageUrl) {
  window.location.href = pageUrl;
}

/* Global counter for "No" button clicks */
var noClickCount = 0;

/* Handle the "No" button click */
function handleNoClick() {
  noClickCount++;
  if (noClickCount === 1) {
    // First click: add 7 extra Yes buttons
    createExtraYesButtons(7);
  } else if (noClickCount >= 2) {
    // Second (or more) click: add 20 extra Yes buttons and hide the No button
    createExtraYesButtons(20);
    var noBtn = document.getElementById("noButton");
    if (noBtn) {
      noBtn.style.display = 'none';
    }
  }
}

/* Create extra Yes buttons randomly within the button container */
function createExtraYesButtons(count) {
  var container = document.querySelector('.button-container');
  if (!container) return;
  var containerRect = container.getBoundingClientRect();
  for (var i = 0; i < count; i++) {
    var btn = document.createElement('button');
    btn.className = 'btn extra-yes-btn';
    btn.innerText = 'Yes';
    // Randomly position the button inside the container
    btn.style.position = 'absolute';
    btn.style.left = Math.random() * (containerRect.width - 50) + 'px';
    btn.style.top  = Math.random() * (containerRect.height - 30) + 'px';
    // When clicked, simulate clicking the primary Yes button
    btn.onclick = function () {
      var primaryYes = document.querySelector('.yes-btn');
      if (primaryYes) {
        primaryYes.click();
      } else {
        window.location.href = 'proposal.html';
      }
    };
    container.appendChild(btn);
  }
}

/* Generate floating animated objects (hearts, butterflies, balloons, flowers) */
function generateFloatingObjects() {
  var body = document.body;
  // Create hearts
  for (var i = 0; i < 10; i++) {
    var heart = document.createElement('div');
    heart.className = 'heart animated-object';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top  = Math.random() * window.innerHeight + 'px';
    heart.innerHTML = '❤';
    body.appendChild(heart);
  }
  // Create butterflies
  for (var i = 0; i < 5; i++) {
    var butterfly = document.createElement('div');
    butterfly.className = 'butterfly animated-object';
    butterfly.style.left = Math.random() * window.innerWidth + 'px';
    butterfly.style.top  = Math.random() * window.innerHeight + 'px';
    butterfly.innerHTML = '🦋';
    body.appendChild(butterfly);
  }
  // Create balloons
  for (var i = 0; i < 5; i++) {
    var balloon = document.createElement('div');
    balloon.className = 'balloon animated-object';
    balloon.style.left = Math.random() * window.innerWidth + 'px';
    balloon.style.top  = Math.random() * window.innerHeight + 'px';
    balloon.innerHTML = '🎈';
    body.appendChild(balloon);
  }
  // Create flowers
  for (var i = 0; i < 7; i++) {
    var flower = document.createElement('div');
    flower.className = 'flower animated-object';
    flower.style.left = Math.random() * window.innerWidth + 'px';
    flower.style.top  = Math.random() * window.innerHeight + 'px';
    flower.innerHTML = '🌸';
    body.appendChild(flower);
  }
}

/* Generate floating objects when the document is loaded */
document.addEventListener('DOMContentLoaded', function () {
  generateFloatingObjects();
});
