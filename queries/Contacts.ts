import { useQuery } from "react-query";

const baseUrl = "https://61c32f169cfb8f0017a3e9f4.mockapi.io/";

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
  fetch(`${baseUrl}/api/v1/contacts`).then(req => req.json());
