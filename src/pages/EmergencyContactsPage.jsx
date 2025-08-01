import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEmergencyContacts } from '../hooks/useEmergencyContacts';

const EmergencyContactsPage = () => {
  const { contacts, loading, addContact, deleteContact } = useEmergencyContacts();
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim() && newPhone.trim()) {
      addContact({ name: newName, phone: newPhone });
      setNewName('');
      setNewPhone('');
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Native-style Header */}
      <header className="bg-green-600 text-white shadow-md sticky top-0 z-10">
        <div className="max-w-2xl mx-auto p-4 flex items-center justify-between">
          <Link to="/" className="text-white" aria-label="Back to Home">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-xl font-bold absolute left-1/2 transform -translate-x-1/2">
            Emergency Contacts
          </h1>
          <div />
        </div>
      </header>

      {/* Content Area */}
      <main className="max-w-2xl mx-auto p-4">
        {/* Add Contact Form */}
        <div className="bg-gray-50 rounded-xl shadow-md p-6 mb-8 border border-gray-200">
          <h2 className="text-xl font-bold text-green-800 mb-4">Add New Contact</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="name"
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="e.g., Jane Doe"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                id="phone"
                type="tel"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                placeholder="e.g., 555-123-4567"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Add Contact
            </button>
          </form>
        </div>

        {/* Contacts List */}
        <div>
          <h2 className="text-xl font-bold text-green-800 mb-4">Your Contacts</h2>
          {loading ? (
            <p className="text-gray-500">Loading contacts...</p>
          ) : contacts.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200">
              <p className="text-gray-500">You have no emergency contacts saved.</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {contacts.map(contact => (
                <li key={contact.id} className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between border border-gray-200/80">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-900">{contact.name}</p>
                      <p className="text-sm text-gray-500">{contact.phone}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteContact(contact.id)}
                    className="p-2 rounded-full text-gray-400 hover:bg-red-100 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default EmergencyContactsPage;