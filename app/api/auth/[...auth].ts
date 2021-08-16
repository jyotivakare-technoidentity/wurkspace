import { passportAuth } from "blitz"
import db from "db"
import { Strategy as GoogleStrategy } from "passport-google-oauth2"

export default passportAuth({
  successRedirectUrl: "http://localhost:3000/dashboard",
  strategies: [
    {
      authenticateOptions: { scope: "openid email profile" },
      strategy: new GoogleStrategy(
        {
          domain: process.env.AUTH0_DOMAIN,
          clientID: process.env.AUTH0_CLIENT_ID,
          clientSecret: process.env.AUTH0_CLIENT_SECRET,
          callbackURL:
            process.env.NODE_ENV === "production"
              ? "http://localhost:3000/api/auth/google/callback"
              : "http://localhost:3000/api/auth/google/callback",
          includeEmail: true,
        },
        async function (_token, _tokenSecret, profile, done) {
          const email = profile.emails && profile.emails[0]?.value

          if (!email) {
            return done(new Error("Google OAuth response doesn't have email."))
          }

          const user = await db.user.upsert({
            where: { email },
            create: {
              email,
              name: profile.displayName,
            },
            update: { email },
          })

          const publicData = {
            userId: user.id,
            roles: [user.role],
            source: "google",
          }
          return done(undefined, { publicData })
        }
      ),
    },
  ],
})
