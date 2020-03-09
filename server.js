const http = require('http')
const cp = require('child_process')
const PORT = 1337

const server = http.createServer()

/**
 * @param {string} target
 */
const launchGoogleChrome = async target => {
  try {
    await new Promise((res, rej) =>
      cp.exec(
        `/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome ${target}`,
        (err, result) => {
          if (err) rej(err)
          else res(result)
        }
      )
    )
  } catch (e) {
    console.log('failed', e.message)
  }
}

const HEADERS = {
  'Content-Type': 'text/plain',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': '*',
  Accept: '*/*',
}

server.on('request', (req, res) => {
  if (req.method === 'PUT') {
    let targetURL = decodeURI(req.url.slice(1))
    launchGoogleChrome(targetURL)
    res.writeHead(200, HEADERS)
    res.write('OK')
    res.end()
  } else {
    res.writeHead(200, HEADERS)
    res.end()
  }
})

server.listen(PORT, () => console.log(`listening at ${PORT}...`))
