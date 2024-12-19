
interface UserType {
  id?: string;
  name: string;
  phone: string;
  password: string;
  created_at?: Date;
  updated_at?: Date;
  role?: UserRole;
  status?: UserStatus;
}

export class UserDto {
  id?: string;
  name: string;
  phone: string;
  password: string;
  created_at: Date;
  updated_at: Date;
  role: UserRole;
  status: UserStatus;

  constructor(userData: UserType) {
    this.id = userData.id;
    this.name = userData.name;
    this.phone = userData.phone;
    this.password = userData.password;
    this.created_at = userData.created_at || new Date();
    this.updated_at = userData.updated_at || new Date();
    this.role = userData.role || UserRole.USER;
    this.status = userData.status || UserStatus.ACTIVE;
  }
}
/*
id?: string
name: string
phone: string
password: string
created_at: Date | string
updated_at: Date | string
role: number
status: number
*/

export enum UserStatus {
  ACTIVE,
  INACTIVE,
  BANNED,
}

export enum UserRole {
  ADMIN,
  STAFF,
  USER,
}
