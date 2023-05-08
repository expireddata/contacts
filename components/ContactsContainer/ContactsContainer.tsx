"use client";
import { Contact } from "@/queries/Contacts";
import { useEffect, useState } from "react";
import { ContactCard } from "../ContactCard/ContactCard";

type ContactsContainerProps = {
  contacts: Contact[];
};

const nearestSearchSpace = (contacts: Contact[], cachedSearches: Record<string, Contact[]>, searchTerm: string): Contact[] => { 
    let filterSpace = contacts;

    if (Object.keys(cachedSearches).length < contacts.length) {
      const closestCache = Object.keys(cachedSearches).filter(key => searchTerm.startsWith(key)).sort((key1, key2) => key2.length - key1.length)[0]; 
      if(closestCache) { 
        filterSpace = cachedSearches[closestCache]; 
      }
    }

    return filterSpace;
}

const useFilterContacts = (
  term: string,
  contacts: Contact[]
): Contact[] => {
  const [cachedSearches, setCachedSearches] = useState<
    Record<string, Contact[]>
  >({});
  const searchTerm = term.toLowerCase()

  //if the contacts have been updated then we will need to clear our cache of searches
  useEffect(() => {
    setCachedSearches({});
  }, [contacts]);

  useEffect(() => {
    if (cachedSearches[searchTerm]) return;

    const filterSpace = nearestSearchSpace(contacts, cachedSearches, searchTerm);

    const filteredContacts = filterSpace.filter((contact) =>
      contact.name.toLowerCase().startsWith(searchTerm)
    );
    setCachedSearches({ ...cachedSearches, [searchTerm]: filteredContacts });
  }, [searchTerm]);

  return cachedSearches[searchTerm] || nearestSearchSpace(contacts, cachedSearches, searchTerm);
};

export const ContactsContainer = ({ contacts }: ContactsContainerProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const filteredContacts = useFilterContacts(searchTerm, contacts);
  return (
    <>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="w-full flex flex-wrap">
        {filteredContacts.map((contact) => (
          <ContactCard contact={contact} key={contact.id} />
        ))}
      </div>
    </>
  );
};
