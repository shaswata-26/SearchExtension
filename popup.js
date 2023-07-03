document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('search-input');
    var searchButton = document.getElementById('search-button');
  
    searchButton.addEventListener('click', function() {
      var query = searchInput.value;
      chrome.tabs.create({ url: 'https://www.google.com/search?q=' + query });
    });
  });
  