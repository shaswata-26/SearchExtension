document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.keyCode === 13) {
      var selectedText = window.getSelection().toString();
      chrome.tabs.create({ url: 'https://www.google.com/search?q=' + selectedText });
    }
  });
  