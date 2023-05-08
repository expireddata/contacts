import { ContactDetails } from "@/components/ContactDetails/ContactDetails";
import { fetchContacts } from "@/queries/Contacts";
import Link from "next/link";

type DetailsProps = { 
  params: { 
    id: string
  }
}

export default async function Details({ params }: DetailsProps): Promise<JSX.Element> {
  const contacts = await fetchContacts();
  const contact = contacts.find(contact => contact.id == params.id)

  if(contact === undefined) { 
    return <main className="h-full align-middle">Oops we couldn't find what you were looking for</main>
  }
  
  return (
    <main className="mx-48 my-24">
      <Link href="/">Go Back</Link>
      <h1 className="text-3xl mb-24 mt-12">Details</h1>
      <ContactDetails contact={contact} />
    </main>
  );
}
