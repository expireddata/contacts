import Link from "next/link";
import type { Contact } from "../../queries/Contacts";

type ContactCardProps = {
  contact: Contact;
};

export const ContactCard = ({
  contact: { name, avatar, id },
}: ContactCardProps): JSX.Element => (
  <Link href={`/details/${id}`}>
    <div className="flex w-96 h-36 space-x-4 m-4 shadow hover:shadow-xl bg-white align-middle px-3">
      <div className="flex flex-col justify-center">
        <img src={avatar} alt={`${name} avatar`} className="w-24 h-24" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="font-bold">{name}</h2>
      </div>
    </div>
  </Link>
);
