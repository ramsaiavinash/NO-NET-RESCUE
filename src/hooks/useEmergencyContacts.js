import { useState, useEffect } from 'react';
import { Preferences } from '@capacitor/preferences';

const CONTACTS_STORAGE_KEY = 'emergency_contacts';

export const useEmergencyContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContacts = async () => {
      setLoading(true);
      try {
        const { value } = await Preferences.get({ key: CONTACTS_STORAGE_KEY });
        if (value) {
          setContacts(JSON.parse(value));
        }
      } catch (error) {
        console.error("Failed to load contacts:", error);
      } finally {
        setLoading(false);
      }
    };
    loadContacts();
  }, []);

  const saveContacts = async (newContacts) => {
    await Preferences.set({
      key: CONTACTS_STORAGE_KEY,
      value: JSON.stringify(newContacts),
    });
    setContacts(newContacts);
  };

  const addContact = async (contact) => {
    const newContact = { ...contact, id: Date.now().toString() };
    const newContacts = [...contacts, newContact];
    await saveContacts(newContacts);
  };

  const deleteContact = async (contactId) => {
    const newContacts = contacts.filter(c => c.id !== contactId);
    await saveContacts(newContacts);
  };

  return { contacts, loading, addContact, deleteContact };
};

