import { ContactCard } from "@/components/ContactCard/ContactCard";
import { ContactsContainer } from "@/components/ContactsContainer/ContactsContainer";
import { fetchContacts } from "@/queries/Contacts";

const ContactsList = async () => {
  try {
    const contacts = await fetchContacts();
    return (
        <ContactsContainer contacts={contacts} /> 
    );
  } catch (error) {
    return <>Something went wrong</>; //TODO: Add better error screen/component
  }
};

export default function Contacts() {
  return (
    <main className="mx-48 my-24">
      <h1 className="text-3xl mb-24">Contacts</h1>
      {/* @ts-expect-error Async Server Component */}
      <ContactsList />
    </main>
  );
}
