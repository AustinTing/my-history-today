import nextConnect from 'next-connect'
import auth from 'middlewares/auth'
import passport from 'library/passport'

const handler = nextConnect()
handler
  .use(auth)
  .use(
    passport.authenticate('google', {
      failureRedirect: '/login',
      failureFlash: true,
      session: true
    })
  )
  .get(async (req, res) => {
    // User has logged in.
    console.log.info('User has logged in.')
    // await req.session.save()
    return res.redirect('/')
  })
// export default function handler (req, res) {
//   const { method, body } = req
//   if (method === 'POST') {
//     // Process a POST request
//     console.log(`POST /google/callback, body: ${body}`)
//     return res.status(200).send()
//   }
//   res.status(400).send()
// }
