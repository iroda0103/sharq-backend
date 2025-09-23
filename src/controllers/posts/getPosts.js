const { InvalidPropertyError } = require("../../shared/errors");
const { mapErrorToStatus } = require("../../shared/errors/handle");
const httpValidator = require("../../shared/validator");
const { getPostsSchema } = require("./validation");

module.exports = function makeGetPosts({ listPost }) {
  return async function getPosts(httpRequest) {
    try {
      const validator = httpValidator(
        { query: httpRequest.query },
        getPostsSchema
      );
      const { error, query } = await validator.validate();

      if (error) {
        throw new InvalidPropertyError(error);
      }

      const result = await listPost({ ...query });

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: { ...result }
      };
    } catch (e) {
      console.log(e);

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: mapErrorToStatus(e),
        body: { message: e.message }
      };
    }
  };
};
