
export interface UserUpdateDB {
    name:string,
    email:string,
    password:string,
    dateJoined:Date
}

export interface User extends UserUpdateDB{
    id:number
}
