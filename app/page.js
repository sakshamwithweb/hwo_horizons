import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">WELCOME TO HWO HORIZONS</h1>
      <h2 className="text-2xl text-gray-700 mb-8">Which version do you want to explore?</h2>
      <ul className="space-y-4">
        <li>
          <Link href="/simplified" className="block px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200">
            Simplified
          </Link>
        </li>
        <li>
          <Link href="/advanced" className="block px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200">
            Advanced
          </Link>
        </li>
      </ul>
    </div>
  );
}
