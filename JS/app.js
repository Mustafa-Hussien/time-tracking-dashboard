// Replace ./data.json with your JSON feed
fetch('../data.json').then(response => response.json()).then(data => {
  // Work with JSON data here
  // Get the list.
  const mainCardBottom = document.querySelector(".bottom-main");

  // Get all links inside the list.
  const links = mainCardBottom.querySelectorAll("a");

  for (var i = 0; i < links.length; i++) {
    // Add event listiner for the clicked link.
    links[i].addEventListener("click", function () {
      // Get the current active link and remove the active class from it.
      let currentLink = document.querySelector(".active");
      currentLink.classList.remove("active");
      // Add the active class to the clicked link.
      this.className += " active"
      // Get the name of the active link
      let activeLink = this.textContent;
      const cardBottoms = document.querySelectorAll('.bottom');
      // Loop through the cards to edit the hours
      for (var i = 0; i < cardBottoms.length; i++) {
        let currentCard = cardBottoms[i];
        switch (activeLink) {
          case 'Daily':
            currentCard.querySelector('h1').textContent = data[i].timeframes.daily.current + 'hrs';
            currentCard.querySelector('p').textContent = 'Last day - ' + data[i].timeframes.daily.previous + 'hrs';
            break;
          case 'Weekly':
            currentCard.querySelector('h1').textContent = data[i].timeframes.weekly.current + 'hrs';
            currentCard.querySelector('p').textContent = 'Last week - ' + data[i].timeframes.weekly.previous + 'hrs';
            break;
          case 'Monthly':
            currentCard.querySelector('h1').textContent = data[i].timeframes.monthly.current + 'hrs';
            currentCard.querySelector('p').textContent = 'Last month - ' + data[i].timeframes.monthly.previous + 'hrs';
            break;
          default: console.log('Error default triggered');
            break;
        }
      }
    });
  }
}).catch(err => {
  // Do something for an error here
  console.log(err);
});

