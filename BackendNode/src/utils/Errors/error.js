const ErrorFactory = name =>{
    return class CustomizedError extends Error {
        constructor(message) {
            super(message);
            this.name = name;
            this.stack= ''
        }
    }
}

export const NotValidateDataError = ErrorFactory('Not_Validated_Input')
export const AuthError =  ErrorFactory('Authorization_Erro')
export const NotFoundError =  ErrorFactory('Not_Found_Error')
export const InternalServerError =  ErrorFactory('Internal_Server_Error')
export const NoConnectDB =  ErrorFactory('NO_CONNECT_DB')
export const DuplicatedRegister = ErrorFactory('DUPLICATED_KEY')