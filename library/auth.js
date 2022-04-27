import iron from '@hapi/iron'

const createLoginSession = async (session, secret) => {
  const createdAt = Date.now()
  const token = { ...session, createdAt }
  const sealedToken = await iron.seal(token, secret, iron.defaults)
  console.log(`library/auth createLoginSession: token: ${token}, sealedToken: ${sealedToken}`)
  return sealedToken
}

const getLoginSession = async (sealedToken, secret) => {
  const session = await iron.unseal(sealedToken, secret, iron.defaults)
  const validAt = session.maxAge && Date.now()
  const expiresAt = session.createdAt + session.maxAge * 1000
  if (validAt > expiresAt) {
    throw new Error('Session expired')
  }
  console.log(`library/auth  getLoginSession: sealedToken: ${sealedToken}, session: ${session}`)
  return session
}

export { createLoginSession, getLoginSession }
