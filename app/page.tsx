import Link from "next/link";

async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

function truncateString(str: string, maxLength: number) {
  return str.length > maxLength ? str.substring(0, maxLength - 3) + "..." : str;
}

export default async function Page() {
  const data = await getData();

  return (
    <main>
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold px-4">My Products</h1>
          <nav>
            <ul className="flex space-x-4 px-4">
              <li>
                <Link href="/">Products</Link>
              </li>
              <li>
                <Link href="/basket">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-6 grid-cols-3 xl:gap-x-8">
            {data.products?.map(
              (product: {
                images: (string | undefined)[];
                description: string | undefined;
                title: string;
                price: number;
              }) => (
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    src={product.images[0]}
                    alt={product.description}
                    className="w-full h-auto max-w-full max-h-20"
                  />

                  <div className="p-4">
                    <div className="text-gray-700 flex justify-between">
                      <div>
                        <h2 className="font-bold truncate text-xs">
                          {truncateString(product.title, 10)}
                        </h2>
                      </div>
                      <div>
                        <p className="text-xs">{product.price}₺</p>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 pb-4">
                    <button className="block w-full bg-gray-400 text-white font-bold rounded text-xs">
                      <Link href="/basket">Add To Cart</Link>
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
