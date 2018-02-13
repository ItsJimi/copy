chrome.tabs.executeScript( {
  code: "window.getSelection().toString()"
}, function (selection) {
  if (!selection) return document.getElementById('text').innerHTML = `Can't get selected text from this page.`
  const qr = new QRious({
    size: 200,
    element: document.getElementById('qr'),
    value: selection[0]
  })
})
