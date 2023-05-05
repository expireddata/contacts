import { ContactDetails } from "./ContactDetails";
import { getByDisplayValue, render } from "@testing-library/react";

const mockContact = {
  createdAt: "2023-02-12T13:12:08.303Z",
  name: "Test Name",
  avatar:
    "https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?cs=srgb&dl=pexels-helena-lopes-1996333.jpg&fm=jpg",
  email: "test@example.com",
  phone: "89908908909889089",
  birthday: "2023-02-12T13:12:08.303Z",
  id: "133",
};

test("contact details can display the required details", () => {
  const { getByLabelText, getByAltText } = render(<ContactDetails contact={mockContact} readOnly />);
  
  expect(getByAltText(`${mockContact.name} avatar`)).toBeDefined()
  expect((getByLabelText('Name:') as HTMLInputElement).value).toBe(mockContact.name)
  expect((getByLabelText('Created:') as HTMLInputElement).value).toBe('2023-02-12')
  expect((getByLabelText('Email:') as HTMLInputElement).value).toBe(mockContact.email)
  expect((getByLabelText('Phone:') as HTMLInputElement).value).toBe(mockContact.phone)
  expect((getByLabelText('Birthday:') as HTMLInputElement).value).toBe('2023-02-12')
});
