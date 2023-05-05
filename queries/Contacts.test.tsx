import { fetchContacts } from "./Contacts";

const mockContact = {
  createdAt: "2023-02-12T13:12:08.303Z vvvv",
  name: "Test Name",
  avatar:
    "https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?cs=srgb&dl=pexels-helena-lopes-1996333.jpg&fm=jpg",
  email: "test@example.com",
  phone: "89908908909889089",
  birthday: "01/01/2001",
  id: "133",
};

global.fetch = jest.fn(
  () =>
    Promise.resolve({
      json: () => Promise.resolve([mockContact]),
    }) as unknown as Promise<Response>
);

test("get contacts contains contacts", async () => {
  const response = fetchContacts(); 

  response.then(contacts => expect(contacts).toContain(mockContact))
});
