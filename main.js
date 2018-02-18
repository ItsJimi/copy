chrome.tabs.executeScript( {
  code: "window.getSelection().toString()"
}, function (selection) {
  if (!selection) return document.getElementById('text').innerHTML = `Can't get selected text from this page.`
  qrcode(selection[0])
})

document.getElementById('url').addEventListener('click', function () {
  chrome.tabs.executeScript( {
    code: "window.location.toString()"
  }, function (selection) {
    if (!selection) return document.getElementById('text').innerHTML = `Can't get url.`
    qrcode(selection[0])
  })
})

function qrcode (value) {
  const qr = new QRious({
    size: 200,
    element: document.getElementById('qr'),
    value: value
  })
}