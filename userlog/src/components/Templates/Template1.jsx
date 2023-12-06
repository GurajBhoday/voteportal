import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';

export default function Template1({ formData }) {
  const divStyle = {
    backgroundImage: `url("/bg1.png")`, // Update the image path
  };

  // Check if a photo has been uploaded
  const hasUploadedPhoto = formData?.photo;

  return (
    <div className="bg-cover bg-no-repeat bg-center w-screen h-screen flex items-center justify-center" style={divStyle}>
      {/* Profile pic */}
      <div
        className="h-20 w-20 relative"
        style={{
          background: hasUploadedPhoto
            ? `url(${URL.createObjectURL(formData.photo)})`
            : 'url(placeholder.jpg)', // Use a placeholder image or a default image
        }}
      >
        {hasUploadedPhoto ? null : <UserCircleIcon className="h-full w-full text-gray-200" aria-hidden="true" />}
      </div>

      <div className="block rounded-lg bg-white text-center shadow-lg dark:bg-neutral-700">
        <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark.text-neutral-50">
          Contact
        </div>

        <div className="p-6">
          <p className="mb-4 text-base text-neutral-600 dark.text-neutral-200">
            First Name: <br />
            {formData?.firstName}
          </p>
          <p className="mb-4 text-base text-neutral-600 dark.text-neutral-200">
            Last Name: <br />
            {formData?.lastName}
          </p>
          <p className="mb-4 text-base text-neutral-600 dark.text-neutral-200">
            Company Name: <br />
            {formData?.company}
          </p>
        </div>
      </div>
    </div>
  );
}
