import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Template1 from "../components/Templates/Template1";
import { UserCircleIcon } from '@heroicons/react/24/solid';
import Phone from '../components/Phone';

export default function VCard() {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    photo: null,
  });
  const [selectedTemplateComponent, setSelectedTemplateComponent] = useState(null);
  const [uploadedPhotoUrl, setUploadedPhotoUrl] = useState(null); // State variable to store the uploaded photo URL

  const handleTemplateChange = (event) => {
    setSelectedTemplate(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file upload
  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });

    // Generate a URL for the uploaded photo and set it in state
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      setUploadedPhotoUrl(e.target.result);
    };
    fileReader.readAsDataURL(file);
  };

  const selectTemplateComponent = () => {
    switch (selectedTemplate) {
      case "template1":
        return <Template1 formData={formData} />;
      default:
        return null;
    }
  };

  const saveUserProfile = () => {
    fetch('/api/save-user-profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 200) {
          alert('Successfully saved your profile');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setSelectedTemplateComponent(selectTemplateComponent());
  }, [selectedTemplate, formData]);

  return (
    <form>
      <div className="space-y-12 mt-10 ml-20">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                    identisys.com/
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                  />
                </div>
              </div>
            </div>
             {/* 
            <div className="sm:col-span-2">
              <label htmlFor="template" className="block text-sm font-medium leading-6 text-gray-900">
                Page Templates
              </label>
              <select
                id="template"
                name="template"
                value={selectedTemplate}
                onChange={handleTemplateChange}
                className="mt-2 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select a Template</option>
                <option value="template1">Template 1</option>
                <option value="template2">Template 2</option>
             Add more template options as needed 
              </select>
             
            </div>
             */}
          </div>
        </div>
        <div className="col-span-full">
          <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
            Photo
          </label>
          <div className="mt-2 flex items-center gap-x-3">
            <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
            <input
              type="file"
              name="photo"
              id="photo"
              accept="image/*"
              className="hidden" // Hide the input field
              onChange={handlePhotoUpload}
            />
            <label
              htmlFor="photo"
              className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 cursor-pointer"
            >
              Upload
            </label>
          </div>
          {uploadedPhotoUrl && ( // Display the uploaded photo if available
            <img
              src={uploadedPhotoUrl}
              alt="Uploaded Photo"
              className="h-12 w-12 rounded-full"
            />
          )}
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstName"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="John"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Second name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastName"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Smith"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
             Location
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Highridge"
                value={formData.company}
                onChange={handleInputChange}
              />

          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Division
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastName"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Highridge"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
             Sub Location
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastName"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Parklands"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
             County
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastName"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="County"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            
          </div>
          </div>
        
            </div>
          </div>
        </div>
    {/* 
        <Link to="/template1"> 
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Go to Template 1
          </button>
        </Link>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={saveUserProfile}>
          Save
        </button>
      </div>
 
      <div className="mt-10 ml-10 mr-10"> Adjust margin to move content to the right 
        {selectedTemplateComponent && selectedTemplateComponent}
      </div>
      */}
      </div>
    </form>
  );
}
