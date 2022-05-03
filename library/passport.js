import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

passport.serializeUser((user, done) => done(null, user))

passport.deserializeUser((user, done) => done(null, user))

const goolgeStrategy = new GoogleStrategy(
  {
    clientID: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    callbackURL: process.env.OAUTH_CALLBACK,
    passReqToCallback: true
  },
  (request, accessToken, refreshToken, profile, done) => done(null, profile)
)

passport.use(goolgeStrategy)

export default passport
