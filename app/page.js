import Image from 'next/image'

// pages/index.js
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-light-pink p-16 h-screen">
      <div className="mb-10 w-4/5 bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-5xl text-pink-custom mb-6">Mrs. G&apos;s Good Eats // Recipe of the Month</h1>
        <h2 className="text-3xl text-black font-bold mb-5">Cozy October Beef Stew</h2>
        <ul className="list-disc list-inside text-lg text-gray-600 mb-5 space-y-2">
          <li>1 pound beef chuck</li>
          <li>Two large organic carrots</li>
          <li>Two large organic celery stalks</li>
          <li>1 large white onion</li>
          <li>2 cloves garlic</li>
          <li>4 cups beef broth</li>
          <li>Heat oil and cook beef chuck until browned</li>
          <li>Remove beef and add in onion, cook until transparent</li>
          <li>Add celery and carrots to pot</li>
          <li>Cook until all veggies are tender</li>
          <li>Add the beef back in and add the broth</li>
          <li>Simmer</li>
        </ul>
        <a href="#" className="text-pink-custom">made with &hearts;</a>
      </div>
    </div>
  );
}
