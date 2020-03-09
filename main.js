const CHROME_NAME = 'Google Chrome'

chrome.contextMenus.create({
  title: 'Open with Chrome',
  contexts: ['selection'],
  onclick: ({ linkUrl }) => {
    window
      .fetch(`http://localhost:1337/${encodeURI(linkUrl)}`, { method: 'PUT' })
      .then(() => console.log(`Launched ${CHROME_NAME} with ${linkUrl}`))
      .catch(() =>
        console.error(
          `Could not launch ${CHROME_NAME} :c, but received ${linkUrl}`
        )
      )
  },
})
