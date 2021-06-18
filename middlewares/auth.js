const { validateJWT } = require("../helpers/jsonWebToken");
const { User, Job } = require("../models/index");

function authentication(req, res, next) {
  const access_token = req.headers.access_token;

  if (access_token) {
    try {
      const payload = validateJWT(access_token);

      User.findByPk(payload.id)
        .then((user) => {
          if (user) {
            req.user = { id: user.id, role: user.role, email: user.email };
            next();
          } else {
            next({ statusCode: 401, message: "Invalid/Wrong JWT" });
          }
        })
        .catch((err) => {
          next({ statusCode: 500 });
        });
    } catch (err) {
      next({ statusCode: 401, message: "Invalid/Wrong JWT" });
    }
  } else {
    next({ statusCode: 401, message: "Please login first" });
  }
}

async function authorizationJob(req, res, next) {
  try {
    let job = await Job.findByPk(req.params.id);
    if (req.user.role === "admin") {
      next();
    } else if (req.user.role === "staff" && job.authorId === req.user.id) {
      next();
    } else {
      next({ statusCode: 403 });
    }
  } catch (err) {
    next({ statusCode: 500 });
  }
}

function authorizationAdmin(req, res, next) {
  if (req.user.role === "admin") {
    next();
  } else {
    next({ statusCode: 403 });
  }
}

module.exports = {
  authentication,
  authorizationJob,
  authorizationAdmin,
};
