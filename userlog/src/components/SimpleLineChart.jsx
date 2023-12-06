import * as React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import VCard from '../pages/VCard';

export default function SimpleLineChart() {
  return (

    <div className=" items-center">
    <h1 className="text-24px">Create your voting card</h1>
    <Link to="/dashboard/vcard" className='flex justify-end'>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-3  rounded">
        Create Card <span>&#43;</span>
      </button>
    </Link>
  </div>

  );
}
