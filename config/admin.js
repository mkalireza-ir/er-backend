module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", 09203302808),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", 09203302808),
  },
});
