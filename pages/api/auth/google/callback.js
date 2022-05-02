import nextConnect from 'next-connect'
import auth from 'middlewares/auth'
import passport from 'library/passport'

const handler = nextConnect()
handler.use(auth).get(
  passport.authenticate('google', {
    failureRedirect: '/login',
    failureFlash: true,
    session: true
  })
)
// export default function handler (req, res) {
//   const { method, body } = req
//   if (method === 'POST') {
//     // Process a POST request
//     console.log(`POST /google/callback, body: ${body}`)
//     return res.status(200).send()
//   }
//   res.status(400).send()
// }
