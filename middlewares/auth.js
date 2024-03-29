import nextConnect from 'next-connect'
import passport from 'library/passport'
import session from 'library/session'

const auth = nextConnect()
  .use(
    session({
      name: 'sess',
      secret: process.env.TOKEN_SECRET,
      cookie: {
        maxAge: 60 * 60 * 8, // 8 hours,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax'
      }
    })
  )
  .use((req, res, next) => {
    // Initialize mocked database
    // TODO: Remove this after you add your own database
    // req.session.users = req.session.users || []
    console.log(`middlewares/auth: req.user: ${req.user}`)
    next()
  })
  .use(passport.initialize())
  // .use(passport.session())

export default auth
