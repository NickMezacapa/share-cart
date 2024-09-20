document.getElementById('generate-link').addEventListener('click', function () {
  // Send a message to the content script to get cart items
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { message: 'get_cart_items' },
      response => {
        const cartItems = response.items

        // Ensure the correct API URL (local or deployed)
        const apiURL = 'https://us-central1-sharecart-5dbc4.cloudfunctions.net/shareCart'

        // Make a POST request to the backend API to generate the shareable link
        fetch(apiURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ items: cartItems }),
        })
          .then(response => response.json())
          .then(data => {
            const shareableLink = data.shareableLink
            document.getElementById(
              'link-output'
            ).innerHTML = `<p>Shareable Link: <a href="${shareableLink}" target="_blank">${shareableLink}</a></p>`
          })
          .catch(err => {
            console.error('Error generating shareable link:', err)
          })
      }
    )
  })
})
