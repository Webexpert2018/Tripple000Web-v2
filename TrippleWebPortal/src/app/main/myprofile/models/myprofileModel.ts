export class User {
    id:string;
    firstName:string;
    lastName:string;
    email:string;
    avatarId:string;
    avatarUrl:string;    
    phoneNumber:string;
    gender:string;
    dob:Date;

}
export class PasswordModel  {
    oldPassword:string;
    newPassword:string;
    confirmPassword:string
  
  }