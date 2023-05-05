import { ContactCard } from "@/components/ContactCard";
import { useGetContacts } from "@/queries/Contacts";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const ContactsList = () => {
  const { isLoading, error, contacts } = useGetContacts();

  if (error) {
    return <>Something went wrong</>; //TODO: Add better error screen/component
  }

  {
    isLoading || !contacts ? (
      <div>Loading...</div>
    ) : (
      contacts.map((contact) => (
        <ContactCard contact={contact} key={contact.id} />
      ))
    );
  }
};

export default function Contacts() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </QueryClientProvider>
  );
}
