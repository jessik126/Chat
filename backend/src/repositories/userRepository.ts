import User from '../models/user';

const users: User[] = [];

async function getUsers(): Promise<User[]> {
    return new Promise((resolve, reject) => {
        return resolve(users);
    })
}

async function getUser(id: number): Promise<User | undefined> {
    return new Promise((resolve, reject) => {
        return resolve(users.find(c => c.id === id));
    })
}

async function addUser(user: User): Promise<User> {
    return new Promise((resolve, reject) => {
        if (!user.name || !user.message)
            return reject(new Error(`Invalid user.`));

        const newUser = new User(user.name, user.message);
        users.push(newUser);

        return resolve(newUser);
    })
}

async function updateUser(id: number, newUser: User): Promise<User | undefined> {
    return new Promise((resolve, reject) => {
        const index = users.findIndex(c => c.id === id);
        if (index >= 0) {
            if (newUser.name && users[index].name !== newUser.name)
                users[index].name = newUser.name;

            if (newUser.message && users[index].message !== newUser.message)
                users[index].message = newUser.message;

            return resolve(users[index]);
        }

        return resolve(undefined);
    })
}

async function deleteUser(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
        const index = users.findIndex(c => c.id === id);
        if (index >= 0) {
            users.splice(index, 1);
            return resolve(true);
        }

        return resolve(false);
    })
}

export default {
    getUser,
    getUsers,
    deleteUser,
    addUser,
    updateUser
}