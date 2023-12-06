import React, { useState } from 'react';

export default function Settings() {
  const [isFormVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <div className="p-5">
      <button
        className="bg-gray-200 hover:bg-gray-300 ml-5 text-gray-800 font-semibold py-2 px-80 rounded mb-4 focus:outline-none"
        type="button"
        onClick={toggleForm}
      >
        <i className="fa fa-fw fa-id-card fa-sm mr-1"></i> VCard details
      </button>

      {isFormVisible && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <div className="mb-4 md:w-1/2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="first_name"
              >
                <i className="fa fa-fw fa-signature fa-sm mr-1"></i> First name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                className="form-input w-full"
                value=""
                maxLength="64"
              />
            </div>
            <div className="md:w-1/2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="last_name"
              >
                <i className="fa fa-fw fa-signature fa-sm mr-1"></i> Last name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                className="form-input w-full"
                value=""
                maxLength="64"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="company"
            >
              <i className="fa fa-fw fa-building fa-sm mr-1"></i> Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="form-input w-full"
              value=""
              maxLength="64"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="job_title"
            >
              <i className="fa fa-fw fa-user-tie fa-sm mr-1"></i> Job title
            </label>
            <input
              type="text"
              id="job_title"
              name="job_title"
              className="form-input w-full"
              value=""
              maxLength="64"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="birthday"
            >
              <i className="fa fa-fw fa-birthday-cake fa-sm mr-1"></i> Birthday
            </label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              className="form-input w-full"
              value=""
            />
          </div>
        </div>
      )}
    </div>
  );
}
