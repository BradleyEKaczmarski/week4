function printHighscores() {
    // either get scores from localstorage or set to empty array
  
  
    // sort highscores by score property in descending order
  
  }
  
  function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }