chrome.tabs.executeScript( {
  code: "window.getSelection().toString()"
}, (selection) => {
  const qr = new QRious({
    size: 200,
    element: document.getElementById('qr'),
    value: selection[0]
  })
})
