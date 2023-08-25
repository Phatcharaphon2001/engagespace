import React from "react";

type Props = {};

export default function moodManagementPage({}: Props) {
  return (
    <div className="ml-10 w-full">
      <div className="my-10">moodManagementPage</div>
      <div>
        <p>Mood Header</p>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
        />
      </div>
      <div>
        <p>Mood Title</p>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
        />
      </div>
    </div>
  );
}
