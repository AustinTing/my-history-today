// // this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
// export const sessionOptions = {
//   password: process.env.SECRET_COOKIE_PASSWORD,
//   cookieName: 'my-history-today',
//   cookieOptions: {
//     secure: process.env.NODE_ENV === 'production'
//   }
// }

import { parse, serialize } from 'cookie'
import { createLoginSession, getLoginSession } from './auth'

const parseCookies = (req) => {
  if (req.cookies) return req.cookies
  const cookie = req.headers?.cookie
  return parse(cookie || '')
}

const session = ({ name, secret, cookie: cookieOpts }) => {
  return async (req, res, next) => {
    const cookies = parseCookies(req)
    const token = cookies[name]
    let unsealed = {}

    if (token) {
      try {
        // the cookie needs to be unsealed using the password `secret`
        unsealed = await getLoginSession(token, secret)
      } catch (e) {
        // TODO: The cookie is invalid
      }
    }

    req.session = unsealed
    // We are proxying res.end to commit the session cookie
    const oldEnd = res.end
    res.end = async function resEndProxy (...args) {
      if (res.finished || res.writableEnded || res.headersSent) return
      if (cookieOpts.maxAge) {
        req.session.maxAge = cookieOpts.maxAge
      }

      const token = await createLoginSession(req.session, secret)

      res.setHeader('Set-Cookie', serialize(name, token, cookieOpts))
      oldEnd.apply(this, args)
    }

    next()
  }
}
export default session
