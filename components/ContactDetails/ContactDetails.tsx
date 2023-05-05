import type { Contact } from "../../queries/Contacts";

type ContactCardProps = {
  contact: Contact;
};

export const ContactDetails = ({
  contact,
}: ContactCardProps): JSX.Element => (

  <div className="flex">
    <img src={contact.avatar} alt={`${contact.name} avatar`} className="w-24 h-24" />
    <div className="flex flex-col justify-center pl-36 space-y-6">
      <h2 className="font-bold">{contact.name}</h2>
      <div>Name: {contact.name}</div>
      <div>Created: {new Date(contact.createdAt).toLocaleDateString()}</div>
      <div>Email: {contact.email}</div>
      <div>Phone: {contact.phone}</div>
      <div>Birthday: {new Date(contact.birthday).toLocaleDateString()}</div>
    </div>
  </div>
);