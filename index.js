document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
      moveDodgerRight();
    } else {e.key === "ArrowUp"} {
      moveDodgerUp();
    }
  });
  
  function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }

  function moveDodgerUp() {
    let upNumbers = dodger.style.bottom.replace("px", "");
    let up = parseInt(upNumbers, 10);

  if (up > 0) {
    dodger.style.bottom = `${up + 1}px`;
  }
  }