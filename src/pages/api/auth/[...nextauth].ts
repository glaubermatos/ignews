import { query as q } from "faunadb"

import NextAuth from "next-auth"
import Providers from "next-auth/providers"

import { fauna } from '../../../services/faunadb'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn( user, account, profile ) {
      const { email } = user  
      
      console.log(email)

      fauna.query(
        q.Create(
          q.Collection('users'),
          { data: { email }}
        )
      )
      .then((ret) => console.log(ret))
      .catch((err) => console.error('Error: %s', err))

      return true
    },
}
})