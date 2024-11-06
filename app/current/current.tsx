// pages/connections.js
import { useState } from 'react';

const ConnectionsPage = () => {
  const [rows] = useState([
    {
      room: "1010",
      ip: "170.20.12.189",
      mac: "AC:92:32:C1:18:04",
      name: "Murat Tenil",
      email: "mail@gmail.com",
      date: "27.09.2024 - 10:30",
      birthday: "01.01.1999",
    },
    // Diğer veri satırları...
  ]);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">All Connections</h2>
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
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b text-sm text-gray-700">{row.room}</td>
                <td className="py-2 px-4 border-b text-sm text-gray-700">{row.ip}</td>
                <td className="py-2 px-4 border-b text-sm text-gray-700">{row.mac}</td>
                <td className="py-2 px-4 border-b text-sm text-gray-700">{row.name}</td>
                <td className="py-2 px-4 border-b text-sm text-gray-700">{row.email}</td>
                <td className="py-2 px-4 border-b text-sm text-gray-700">{row.date}</td>
                <td className="py-2 px-4 border-b text-sm text-gray-700">{row.birthday}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConnectionsPage;
