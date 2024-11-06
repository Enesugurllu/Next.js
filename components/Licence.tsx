// components/LicenseExpireList.js
import React from 'react';

const LicenseExpireList = () => {
  const users = [
    { name: 'Robert Fox', daysLeft: '2 Days Left', imgSrc: 'https://storage.googleapis.com/a1aa/image/qfQmiI89rRzfL0YcFGMP5JjlW5qw8Zdx5CNFuPIehwkVTzXnA.jpg', status: 'text-red-500' },
    { name: 'Jacob Jones', daysLeft: '3 Days Left', imgSrc: 'https://storage.googleapis.com/a1aa/image/qfQmiI89rRzfL0YcFGMP5JjlW5qw8Zdx5CNFuPIehwkVTzXnA.jpg', status: 'text-red-500' },
    { name: 'Esther Howard', daysLeft: '7 Days Left', imgSrc: 'https://storage.googleapis.com/a1aa/image/e5YdEZA8Gm2VOyg6h08fyGBnBe4w8IlC7glVXYbX6v1ITzXnA.jpg', status: 'text-red-500' },
    { name: 'Savannah Nguyen', daysLeft: '10 Days Left', imgSrc: 'https://storage.googleapis.com/a1aa/image/F1b2J66aEBoNKJKQHRzTdmXEjDxNCUFMWlmAnh5Zfs7w081JA.jpg', status: 'text-yellow-500' },
    { name: 'Courtney Henry', daysLeft: '16 Days Left', imgSrc: 'https://storage.googleapis.com/a1aa/image/9cghJhP8SfzsZCiD4y83h68jr98Auy2Tkll618UdZB2x081JA.jpg', status: 'text-yellow-500' },
    { name: 'Dianne Russell', daysLeft: '21 Days Left', imgSrc: 'https://storage.googleapis.com/a1aa/image/w6ja4S553SoHA5JCDM2G0CC4tEx0jeYIvfqbvabDptEmp5rTA.jpg', status: 'text-yellow-500' },
    { name: 'Eleanor Pena', daysLeft: '25 Days Left', imgSrc: 'https://storage.googleapis.com/a1aa/image/eBMgZ6WxHzxRASzvcfwWkHqw0PV0c2T3oD8sEXakfIcQTzXnA.jpg', status: 'text-yellow-500' },
    { name: 'Darrell Steward', daysLeft: '30 Days Left', imgSrc: 'https://storage.googleapis.com/a1aa/image/q7UdD1wAgf2iRyLT5843wq4nz5HDpEBCgsQM3sotHBvz081JA.jpg', status: 'text-yellow-500' },
  ];

  return (
    <>
    <div className="bg-white p-6 rounded-lg shadow -lg w-80">
      <h2 className="text-lg font-semibold mb-4">License Expire List</h2>
      <div className="space-y-4">
        {users.map((user, index) => (
          <div key={index} className="flex items-center justify-between pb-4 border-b border-gray-200">
            <div className="flex items-center">
              <img alt={`Profile picture of ${user.name}`} className="w-10 h-10 rounded-full mr-3" height="40" src={user.imgSrc} width="40" />
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500">{user.daysLeft}</p>
              </div>
            </div>
            <span className={user.status}>
              <i className="fas fa-circle" />
            </span>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default LicenseExpireList;