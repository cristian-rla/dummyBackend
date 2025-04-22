import {User, UserUpdateDB} from "../types/user"

const DUMMY_USERS: User[] = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        password: "password123",
        dateJoined: new Date("2023-01-15")
    },
    {
        id: 2,
        name: "Bob Smith",
        email: "bob.smith@example.com",
        password: "bobPass456",
        dateJoined: new Date("2022-11-02")
    },
    {
        id: 3,
        name: "Charlie Brown",
        email: "charlie.brown@example.com",
        password: "charlie789",
        dateJoined: new Date("2024-05-23")
    },
    {
        id: 4,
        name: "Diana Prince",
        email: "diana.prince@example.com",
        password: "wonderWoman",
        dateJoined: new Date("2023-08-09")
    },
    {
        id: 5,
        name: "Ethan Clark",
        email: "ethan.clark@example.com",
        password: "ethanSecure321",
        dateJoined: new Date("2021-12-01")
    }
];

class UserService{
    data:User[];
    constructor(data:User[]){
        this.data = data;
    }
    getAll():User[]{
        return this.data;
    }
    getById(userId:number):User{
        const foundUser = this.data.find((userData) => userData.id == userId);
        if(!foundUser)
            throw new Error("No se encontró el usuario");
        return foundUser;
    }
    update(userId:number, userData:User | UserUpdateDB):User{
        let previousUserData = this.data.find(userData => userData.id == userId);
        if (!previousUserData)
            throw new Error("No se encontró el usuario a actualizar");
        previousUserData = {id:userId, ...userData};
        let updatedData = this.data.find(userData => userData.id == userId);
        return updatedData!; // Debería ser los datos actualizados. No es indefinido porque 
    }
    delete(userId:number){
        let userToDeleteIndex = this.data.findIndex(userData => userData.id == userId);
        if (!userToDeleteIndex)
            throw new Error("No se encontró el usuario a borrar");
        this.data.splice(userToDeleteIndex);
        const deletedUser = this.data.find(userData => userData.id == userId);
        if (deletedUser){
            throw new Error("No se pudo borrar el usuario")
        }
        return;
    }
}

export default new UserService(DUMMY_USERS);