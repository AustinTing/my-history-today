import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'library/session'

export default withIronSessionApiRoute(userRoute, sessionOptions)

async function userRoute (req, res) {
  console.log(`${req.method} api/user body: ${JSON.stringify(req.body)}, session: ${JSON.stringify(req.session)}`)
  if (req.session.user) {
    // in a real world application you might read the user id from the session and then do a database request
    // to get more information on the user if needed
    res.json({
      ...req.session.user,
      isLogin: true
    })
  } else {
    res.json({
      isLogin: false
    })
  }
}
