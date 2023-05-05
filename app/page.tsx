import { ContactCard } from "@/components/ContactCard";
import { fetchContacts } from "@/queries/Contacts";

const ContactsList = async () => {
  try {
    const contacts = await fetchContacts();
    return (
      <div>
        {contacts.map((contact) => (
          <ContactCard contact={contact} key={contact.id} />
        ))}
      </div>
    );
  } catch (error) {
    console.log(error);
    return <>Something went wrong</>; //TODO: Add better error screen/component
  }
};

export default function Contacts() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* @ts-expect-error Async Server Component */}
        <ContactsList />
      </main>
  );
}
