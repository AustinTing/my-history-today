import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'library/session'

export default withIronSessionApiRoute(async (req, res) => {
  const { username } = await req.body
  console.log(`${req.method} api/login body: ${JSON.stringify(req.body)}, session: ${JSON.stringify(req.session)}`)
  try {
    const user = { isLogin: true, username }
    req.session.user = user
    await req.session.save()
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}, sessionOptions)
