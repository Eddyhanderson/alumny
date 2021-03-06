export class Constants {
    // Users roles 
    static STUDANT = "STUDANT";
    static TEACHER = "TEACHER";
    static SCHOOL_MANAGER = "MANAGER";

    // Api url
    static ROOT = "api";
    static VERSION = "v1";
    static IP_ADDRESS = "192.168.1.207";
    static BASE = `${Constants.ROOT}/${Constants.VERSION}/`;

    static LOGIN_REMOTE = `${Constants.BASE}/login`;
    static REGISTRATION_REMOTE = `${Constants.BASE}/registration`;

    // Regex
    static NOMENCLATURE_REGEX = "^[a-zA-ZáÁàÀêÊéèÉÈíìÌÍÔôõÕóòÓÒÚúùÙ]+$";

    static TEXT_WITH_SPACE_REGEX = "^[a-zA-ZáÁàÀêÊéèÉÈíìÌÍÔôõÕóòÓÒÚúùÙ ]+$";

    static NUMERIC_REGEX = "^[0-9]+$";

    static TEXT_WITH_SPACE_AND_NUMBER_REGEX = "^[a-zA-Z0-9áÁàÀêÊéèÉÈíìÌÍÔôõÕóòÓÒÚúùÙ ]+$";

    static SIMPLE_INFORMATION_REGEX = "^[a-zA-Z0-9áÁàÀêÊéèÉÈíìÌÍÔôõÕóòÓÒÚúùÙ ]*{1,15}$";

    static STANDARD_INFORMATION_REGEX = "^[a-zA-ZáÁàÀêÊéèÉÈíìÌÍÔôõÕóòÓÒÚúùÙ]*{1,15}$";

    static EMAIL_REGEX = "^[a-zA-Z0-9_]+@[a-zA-Z]+[.][a-zA-Z]+$";

    // Status code
    static FORBIDDEN_STATUS_CODE = 403;

    static UNAUTHORIZED_STATUS_CODE = 401;

    static SUCCESS_STATUS_CODE = 200;

    static CREATED_STATUS_CODE = 201;

    // Model Situations
    static NORMAL_MODEL_STATE = "Normal";
    static PENDING_MODEL_STATE = "Pending";
    static UNSUBSCRIBED = "Unsubscribed";
}