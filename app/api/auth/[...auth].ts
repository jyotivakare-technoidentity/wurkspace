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
              firstname: profile.name.givenName,
              managerid: 1,
              image: profile._json["picture"],
            },
            update: { email },
          })
          const oneOnOne = await db.wS_ONE_ON_ONES.create({
            data: {
              EMPLOYEE_ID: user.id,
              OOO_WITH_EMPLOYEE_ID: user.id,
              LAST_UPDATED_BY: user.id,
              CREATED_BY: user.id,
              SCHEDULED_TIME: user.createdAt,
              END_TIME: user.createdAt,
              LAST_UPDATED_DATE: user.createdAt,
            },
          })
          await db.wS_OOO_BOARD_DETAILS.createMany({
            data: [
              {
                CREATED_BY: user.id,
                OOO_ID: oneOnOne.ID,
                AGENDA_TYPE: "AGENDA_CHALLENGES",
                COLOR: "pink",
              },
              {
                CREATED_BY: user.id,
                OOO_ID: oneOnOne.ID,
                AGENDA_TYPE: "AGENDA_TOP_OF_MIND",
                COLOR: "blue",
              },
              {
                CREATED_BY: user.id,
                OOO_ID: oneOnOne.ID,
                AGENDA_TYPE: "AGENDA_LEARNING",
                COLOR: "yellow",
              },
              {
                CREATED_BY: user.id,
                OOO_ID: oneOnOne.ID,
                AGENDA_TYPE: "AGENDA_PRIORITIES",
                COLOR: "purple",
              },
              {
                CREATED_BY: user.id,
                OOO_ID: oneOnOne.ID,
                AGENDA_TYPE: "AGENDA_WENT_WELL",
                COLOR: "pink",
              },
            ],
          })

          const publicData = {
            userId: user.id,
            managerid: user.id + 1,
            roles: [user.role],
            source: "google",
            firstname: profile.name.givenName,
          }

          return done(undefined, { publicData })
        }
      ),
    },
  ],
})
