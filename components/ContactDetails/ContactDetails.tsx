"use client";
import { useState } from "react";
import { Contact, deleteContact, putContact } from "../../queries/Contacts";

type ContactCardProps = {
  contact: Contact;
};

export const ContactDetails = ({ contact }: ContactCardProps): JSX.Element => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [pageContact, setPageContact] = useState<Contact>(contact);
  return (
    <div className="flex">
      <img
        src={pageContact.avatar}
        alt={`${pageContact.name} avatar`}
        className="w-24 h-24"
      />
      <div className="flex flex-col justify-center pl-36 space-y-6">
        <h2 className="font-bold">{pageContact.name}</h2>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            value={pageContact.name}
            onChange={(e) =>
              setPageContact((pc) => ({ ...pc, name: e.target.value }))
            }
            readOnly={!editMode}
          />
        </div>
        <div>
          <label htmlFor="created">Created: </label>
          <input
            id="created"
            value={pageContact.createdAt.substring(0, 10)}
            type="date"
            readOnly={true}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            value={pageContact.email}
            readOnly={!editMode}
            onChange={(e) =>
              setPageContact((pc) => ({ ...pc, email: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="phone">Phone: </label>
          <input
            id="phone"
            value={pageContact.phone}
            readOnly={!editMode}
            onChange={(e) =>
              setPageContact((pc) => ({ ...pc, phone: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="birthday">Birthday: </label>
          <input
            id="birthday"
            value={pageContact.birthday.substring(0, 10)}
            type="date"
            readOnly={!editMode}
            onChange={(e) =>
              setPageContact((pc) => ({
                ...pc,
                birthday: new Date(e.target.value).toISOString(),
              }))
            }
          />
        </div>
        {editMode && (
          <button
            className="h-7"
            onClick={() => {
              putContact(pageContact);
              setEditMode(false);
            }}
          >
            Save
          </button>
        )}
      </div>
      {!editMode && (
        <button className="h-7" onClick={() => setEditMode(true)}>
          Edit
        </button>
      )}
      <button
        className="h-7"
        onClick={() => {
          deleteContact(contact.id).then(() => window.location.assign("/"));
        }}
      >
        Delete
      </button>
    </div>
  );
};
