import type { Contact } from "../queries/Contacts";

type ContactCardProps = {
  contact: Contact;
};

export const ContactCard = ({
  contact: { name, avatar },
}: ContactCardProps): JSX.Element => (
  <>
    <div>{name}</div>
    <img src={avatar} alt={`${name} avatar`} />
  </>
);
