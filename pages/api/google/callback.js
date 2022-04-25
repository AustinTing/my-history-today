export default function handler (req, res) {
  const { method, body } = req
  if (method === 'POST') {
    // Process a POST request
    console.log(`POST /google/callback, body: ${body}`)
  }
  res.status(400).send()
}
