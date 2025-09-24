const { InvalidPropertyError } = require("../../shared/errors");
const { mapErrorToStatus } = require("../../shared/errors/handle");
const httpValidator = require("../../shared/validator");
const { patchApplicationSchema } = require("./validation");

module.exports = function makePatchApplication({ editApplication }) {
  return async function patchApplication(httpRequest) {
    try {
      const validator = httpValidator(
        { body: httpRequest.body, params: httpRequest.params },
        patchApplicationSchema
      );
      const { error, body, params } = await validator.validate();

      if (error) {
        throw new InvalidPropertyError(error);
      }

      const data = await editApplication({ ...params, ...body });

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
