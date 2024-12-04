/* eslint-disable no-unused-vars */
export enum httpStatusCode {
    // Informational
    continue = 100,
    switchingProtocols = 101,
    processing = 102,

    // Success
    ok = 200,
    created = 201,
    accepted = 202,
    nonAuthoritativeInformation = 203,
    noContent = 204,
    resetContent = 205,
    partialContent = 206,

    // Redirection
    multipleChoices = 300,
    movedPermanently = 301,
    found = 302,
    seeOther = 303,
    notModified = 304,
    useProxy = 305,
    unused = 306,
    temporaryRedirect = 307,
    permanentRedirect = 308,

    // Client Error
    badRequest = 400,
    unauthorized = 401,
    paymentRequired = 402,
    forbidden = 403,
    notFound = 404,
    methodNotAllowed = 405,
    notAcceptable = 406,
    proxyAuthenticationRequired = 407,
    requestTimeout = 408,
    conflict = 409,
    gone = 410,
    lengthRequired = 411,
    preconditionFailed = 412,
    payloadTooLarge = 413,
    uriTooLong = 414,
    unsupportedMediaType = 415,
    rangeNotSatisfiable = 416,
    expectationFailed = 417,
    imATeapot = 418,
    misdirectedRequest = 421,
    unprocessableEntity = 422,
    locked = 423,
    failedDependency = 424,
    upgradeRequired = 426,
    preconditionRequired = 428,
    tooManyRequests = 429,
    requestHeaderFieldsTooLarge = 431,
    unavailableForLegalReasons = 451,

    // Server Error
    internalServerError = 500,
    notImplemented = 501,
    badGateway = 502,
    serviceUnavailable = 503,
    gatewayTimeout = 504,
    httpVersionNotSupported = 505,
    variantAlsoNegotiates = 506,
    insufficientStorage = 507,
    loopDetected = 508,
    notExtended = 510,
    networkAuthenticationRequired = 511,
    networkConnectTimeoutError = 599,
}

export enum responseMessage {
    success = "success",
    failed = "failed",
    notFound = "not-found",
    forbidden = "forbidden",
    invalidId = "invalid-id",
    notAllowed = "not-allowed",
    unauthorized = "unauthorized",
    badRequest = "bad-request",
    badGateway = "bad-gateway",
    retrievedData = "retrieved-data",
    internalServerError = "internal-server-error",
    invalidRequest = "invalid-request",
    invalidData = "invalid-data",
    invalidCredentials = "invalid-credentials",
    invalidArray = "invalid-array",
    invalidDateRange = "invalid-date-range",
    notDebtPayment = "not-debt-payment",
    insufficientPayment = "insufficient-payment",

    missingFields = "missing-fields",
    missingFile = "missing-file",

    created = "created-data",
    updated = "updated-data",
    deleted = "deleted-data",

    uploadFileFailed = "upload-file-failed",
    uploadFileSuccess = "upload-file-success",
    invalidFileExtension = "invalid-file-extension",

    invalidUsername = "invalid-username",
    usernameAlreadyExists = "username-already-exists",
    userNotFound = "user-not-found",
    invalidEmail = "invalid-email",
    emailAlreadyExists = "email-already-exists",
    invalidPassword = "invalid-password",
    passwordNotMatch = "password-not-match",
    passwordChanged = "password-changed",
    invalidRole = "invalid-role",
    invalidToken = "invalid-token",
    expiredToken = "expired-token",
    loggedOut = "logged-out",

    invalidVerificationCode = "invalid-verification-code",
    verificationCodeExpired = "verification-code-expired",
    verificationCodeSent = "verification-code-sent",
    verificationNotMatch = "verification-not-match",

    supplierNotFound = "supplier-not-found",

    alreadyPaid = "already-paid",
    confirmed = "confirmed",
    paymentPendingConfirmation = "payment-pending-confirmation",
    paymentConfirmed = "payment-confirmed",
    paymentFailed = "payment-failed",
    invalidYear = "invalid-year",
}

export enum gender {
    male = "m",
    female = "f",
}

export enum ExamCategory {
    pts = "pts",
    pas = "pas",
    harian = "harian",
    umum = "umum",
}

export enum examType {
    open = "open",
    close = "close",
}

export enum examQuestionType {
    multipleChoice = "choice",
    essay = "essay",
}

export enum userRole {
    admin = "admin",
    adminStaff = "admin_staff",
    user = "user",
    staff = "staff",
    teacher = "teacher",
    students = "students",
}

export enum activeStatus {
    yes = 1,
    no = 0,
}

export enum queryType {
    update = "update",
    insert = "insert",
    delete = "delete",
}

export enum defaultValue {
    password = "123456",
}

export enum httpMethodAlias {
    POST = "c",
    GET = "r",
    PUT = "u",
    // eslint-disable-next-line no-unused-vars
    DELETE = "d",
}