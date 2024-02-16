import { Client, Account , Databases} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65c34e40aab3c24a8ec7');

export const account = new Account(client);
export { ID } from 'appwrite';


//Database
 export const database = new Databases(client , "65c3b9197c661a56a1a9")
