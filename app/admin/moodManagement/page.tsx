import React from 'react'

export default function moodManagementPage() {;

  return (
    <><div className="ml-10 w-full">
      <div className="my-10">moodManagementPage</div>
      <div>
        <p>Mood Header</p>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text" />
      </div>
      <div>
        <p>Mood Title</p>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text" />
      </div>
    </div><div className='w-[80%] h-fit flex flex-col justify-center items-center'>
        <MoodObjectUpload title={"Mood 1"} />
        <MoodObjectUpload title={"Mood 2"} />
        <MoodObjectUpload title={"Mood 3"} />
        <MoodObjectUpload title={"Mood 4"} />
        <MoodObjectUpload title={"Mood 5"} />
      </div></>
  );
}

