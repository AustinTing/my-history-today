import nextConnect from 'next-connect'
import passport from 'passport'
import auth from 'middlewares/auth'

const handler = nextConnect()

handler
  .use(auth)
  .get(passport.authenticate('google', {
    // TODO: move to config
    scope: [
      'https://www.googleapis.com/auth/photoslibrary.readonly',
      'profile'
    ],
    failureFlash: true, // Display errors to the user.
    session: true
  }))

// export default function handler (req, res) {
//   const { method, body } = req
//   if (method === 'POST') {
//     // Process a POST request
//     console.log(`POST /google/callback, body: ${body}`)
//     return res.status(200).send()
//   }
//   res.status(400).send()
// }
