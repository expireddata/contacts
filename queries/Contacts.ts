import { cache } from "react";

const baseUrl = "https://61c32f169cfb8f0017a3e9f4.mockapi.io";

export type Contact = {
  avatar: string;
  birthday: string;
  createdAt: string;
  email: string;
  id: string;
  name: string;
  phone: string;
};

export const fetchContacts = (): Promise<Contact[]> =>
  fetch(`${baseUrl}/api/v1/contacts`, { cache: 'no-cache' }).then((req) => req.json());

export const putContact = async (contact: Contact): Promise<Contact> => { 
    let options = {
        method: "PUT",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(contact)      
    }
    let p = await fetch(`${baseUrl}/api/v1/contacts/${contact.id}`, options);
    let response: Contact = await p.json();
    return response;
}

export const deleteContact = async (id: string) => { 
    let options = {
        method: "DELETE",
        headers: {
            "Content-Type":"application/json",
        }      
    }
    let p = await fetch(`${baseUrl}/api/v1/contacts/${id}`, options);
    let response = await p.json();
    return response;
}