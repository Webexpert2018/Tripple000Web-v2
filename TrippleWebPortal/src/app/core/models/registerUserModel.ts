export class registerUserModel {
    UserEmail: string;
    UserFirstName: string;
    UserLastName: string;
    UserPassword: string;
}

export class registerResponse {
    UserId: string;
    Code: string
}

export class confirmEmail {
    UserId: string;
    Code: string
}

export class loginRequestModel {
    grant_type: string;
    client_id: string;
    email: string;
    password: string

}
export class loginResponseModel {
    access_token: string;
    refresh_token: string;
    expires: number

}
 //webexpert2324@gmail.com