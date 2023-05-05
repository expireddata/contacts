import type { Contact } from "../../queries/Contacts";

type ContactCardProps = {
  contact: Contact;
  readOnly: boolean;
};

export const ContactDetails = ({
  contact,
  readOnly,
}: ContactCardProps): JSX.Element => (
  <div className="flex">
    <img
      src={contact.avatar}
      alt={`${contact.name} avatar`}
      className="w-24 h-24"
    />
    <div className="flex flex-col justify-center pl-36 space-y-6">
      <h2 className="font-bold">{contact.name}</h2>
      <div>
        <label htmlFor="name">Name: </label>
        <input id="name" value={contact.name} readOnly={readOnly} />
      </div>
      <div>
        <label htmlFor="created">Created: </label>
        <input
          id="created"
          value={contact.createdAt.substring(0, 10)}
          type="date"
          readOnly={readOnly}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input id="email" value={contact.email} readOnly={readOnly} />
      </div>
      <div>
        <label htmlFor="phone">Phone: </label>
        <input id="phone" value={contact.phone} readOnly={readOnly} />
      </div>
      <div>
        <label htmlFor="birthday">Birthday: </label>
        <input
          id="birthday"
          value={contact.birthday.substring(0, 10)}
          type="date"
          readOnly={readOnly}
        />
      </div>
    </div>
  </div>
);
