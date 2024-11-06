"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Router import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const ConnectionsTable = () => {
  const router = useRouter(); // Router tanımlama
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [connectionCount, setConnectionCount] = useState(0);
  const [rows, setRows] = useState([
    {
      room: "1010",
      ip: "170.20.12.189",
      mac: "AC:92:32:C1:18:04",
      name: "Murat Tenil",
      email: "mail@gmail.com",
      date: "27.09.2024 - 10:30",
      birthday: "01.01.1999",
      isEditing: false,
    },
    // Diğer veri satırları...
  ]);

  useEffect(() => {
    setConnectionCount(rows.length);
  }, [rows]);

  const handleShowAll = () => {
    router.push('/current'); // Yönlendirme işlemi
  };

  const displayedRows = rows.slice(0, 6);

  return (
    <div className="bg-white shadow-md rounded-lg p-6" onClick={() => setDropdownOpen(null)}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
          Current Connections{' '}
          <span
            id="connection-count"
            className="bg-blue-100 text-blue-800 text-xs font-semibold ml-2 px-2.5 py-0.5 rounded"
          >
            {connectionCount}
          </span>
        </h2>
        <button 
          className="text-black border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100" 
          onClick={handleShowAll}
        >
          See All Connections
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">Room</th>
              <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">IP Address</th>
              <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">MAC</th>
              <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">Full Name</th>
              <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">Email</th>
              <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">Date</th>
              <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">Birthday</th>
              <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedRows.map((row, index) => (
              <tr key={index}>
                {Object.keys(row).slice(0, 7).map((key) => (
                  <td key={key} className="py-2 px-4 border-b text-sm text-gray-700">
                    {row.isEditing ? (
                      <input
                        type="text"
                        defaultValue={row[key]}
                        className="border rounded px-2 py-1 w-full"
                        onChange={(e) =>
                          setRows(rows.map((r, i) => (i === index ? { ...r, [key]: e.target.value } : r)))
                        }
                      />
                    ) : (
                      row[key]
                    )}
                  </td>
                ))}
                <td className="py-2 px-4 border-b text-sm text-gray-700">
                  <div className="relative">
                    <FontAwesomeIcon
                      icon={faEllipsisH}
                      className="cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDropdownOpen(dropdownOpen === index ? null : index);
                      }}
                    />
                    {dropdownOpen === index && (
                      <div className="absolute right-0 mt-2 py-2 bg-white rounded-md shadow-xl z-10">
                        {row.isEditing ? (
                          <button
                            onClick={() => setRows(rows.map((r, i) => (i === index ? { ...r, isEditing: false } : r)))}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            Save
                          </button>
                        ) : (
                          <button
                            onClick={() => setRows(rows.map((r, i) => (i === index ? { ...r, isEditing: true } : r)))}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            Edit
                          </button>
                        )}
                        <button
                          onClick={() => setRows(rows.filter((_, i) => i !== index))}
                          className="block px-4 py-2 text-sm text-red-700 hover:bg-gray-100 w-full text-left"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConnectionsTable;
