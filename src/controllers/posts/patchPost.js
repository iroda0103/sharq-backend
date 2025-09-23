const { InvalidPropertyError } = require("../../shared/errors");
const { mapErrorToStatus } = require("../../shared/errors/handle");
const httpValidator = require("../../shared/validator");
const { patchPostSchema } = require("./validation");

module.exports = function makePatchPost({ editPost }) {
  return async function patchPost(httpRequest) {
    try {
      const validator = httpValidator(
        { body: httpRequest.body, params: httpRequest.params },
        patchPostSchema
      );
      const { error, body, params } = await validator.validate();

      if (error) {
        throw new InvalidPropertyError(error);
      }

      const data = await editPost({ ...params, ...body });

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 201,
        body: { data }
      };
    } catch (e) {
      console.log(e);

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: mapErrorToStatus(e),
        body: {
          message: e.message
        }
      };
    }
  };
};
