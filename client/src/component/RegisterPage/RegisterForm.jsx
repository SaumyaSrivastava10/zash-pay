import React, { useState } from 'react';
import { CountryDropdown } from 'react-country-region-selector';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    about: '',
    photo: null,
    coverPhoto: null,
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    aadharNumber: '',
    walletAddress: '',
    notifications: {
      email: {
        comments: false,
        candidates: false,
        offers: false,
      },
      sms: {
        everything: false,
        none: true,
      }
    }
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const [method, category] = name.split('.');
      setFormData(prevState => ({
        ...prevState,
        notifications: {
          ...prevState.notifications,
          [method]: {
            ...prevState.notifications[method],
            [category]: checked
          }
        }
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-md lg:mt-10">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Profile</h2>
          <p className="text-gray-600">This information will be displayed publicly so be careful what you share.</p>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="janesmith"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">About</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Write a few sentences about yourself."
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Photo</label>
          <input
            type="file"
            name="photo"
            onChange={handleFileChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Cover Photo</label>
          <input
            type="file"
            name="coverPhoto"
            onChange={handleFileChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          <p className="text-gray-600">PNG, JPG, GIF up to 10MB</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <p className="text-gray-600">Use a permanent address where you can receive mail.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Country</label>
          <CountryDropdown
            value={formData.country}
            onChange={(val) => setFormData({ ...formData, country: val })}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Street Address</label>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-gray-700">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label className="block text-gray-700">State / Province</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label className="block text-gray-700">ZIP / Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Aadhar Number</label>
          <input
            type="text"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Wallet Address</label>
          <input
            type="text"
            name="walletAddress"
            value={formData.walletAddress}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">Notifications</h2>
          <p className="text-gray-600">We'll always let you know about important changes, but you pick what else you want to hear about.</p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-700">By Email</h3>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="email.comments"
              checked={formData.notifications.email.comments}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label>Comments</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="email.candidates"
              checked={formData.notifications.email.candidates}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label>Candidates</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="email.offers"
              checked={formData.notifications.email.offers}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label>Offers</label>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-700">Push Notifications</h3>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="sms.everything"
              checked={formData.notifications.sms.everything}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label>Everything</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="sms.none"
              checked={formData.notifications.sms.none}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label>No push notifications</label>
          </div>
        </div>

        <div className="mt-6">
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
