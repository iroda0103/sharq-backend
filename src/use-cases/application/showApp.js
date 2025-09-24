const makeApplication = require("../../entities/application");
const { BadRequestError } = require("../../shared/errors");

/**
 * @param {object} deps
 * @param {import('../../data-access/applicationDb')} deps.applicationDb
 */

module.exports = function makeShowApp({ applicationDb }) {
    return async function showApp(data) {
        try {
            console.log('Data', data)

            const applicationInfo = await applicationDb.findOne({
                "passport.jsshir": data.passportJsshir,
                phone: data.phone
            });
            console.log('pppp', data, applicationInfo);
            if (!applicationInfo) {
                throw new BadRequestError(
                    "Bunday Passportli odam avval hujjat topshirmagagan"
                );
            }

            return applicationInfo;
        } catch (e) {

            throw e;
        }
    };
};
