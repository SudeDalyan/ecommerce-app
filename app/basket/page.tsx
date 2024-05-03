import Link from "next/link";

export default async function Basket() {
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
      <div className="bg-white px-20 py-10">
        <form
          action="#"
          className="mx-auto max-w-screen-xl p-4 dark:bg-gray-800 rounded overflow-hidden shadow-lg"
        >
          <div className="mx-auto">
            <h2 className="text-white py-2">Order summary</h2>
            <div className="border-b border-t border-gray-200 py-4 dark:border-gray-700">
              <h4 className="text-white text-xs">Billing &amp; Delivery information</h4>
              <dl>
                <dt className="text-white text-xs">Individual</dt>
                <dd className="text-gray-400 text-xs">
                  Bonnie Green - +1 234 567 890, San Francisco, California,
                  United States, 3454, Scott Street
                </dd>
              </dl>
            </div>
            <div className="mt-4">
              <div className="relative overflow-x-auto border-b border-gray-200 dark:border-gray-800">
                <table className="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    <tr>
                      <td className="whitespace-nowrap md:w-[200px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex items-center aspect-square w-8 h-8 shrink-0"
                          >
                            <img
                              className="h-auto w-full max-h-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                              alt="imac image"
                            />
                            <img
                              className="hidden h-auto w-full max-h-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                              alt="imac image"
                            />
                          </a>
                          <a href="#" className="hover:underline text-xs">
                            Apple iMac 27”
                          </a>
                        </div>
                      </td>
                      <td className="p-4 text-white text-xs">x1</td>
                      <td className="p-4 text-right text-white text-xs">$1,499</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 md:w-[384px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex items-center aspect-square w-8 h-8 shrink-0"
                          >
                            <img
                              className="h-auto w-full max-h-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg"
                              alt="imac image"
                            />
                            <img
                              className="hidden h-auto w-full max-h-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg"
                              alt="imac image"
                            />
                          </a>
                          <a href="#" className="hover:underline text-xs">
                            Apple iPhone 14
                          </a>
                        </div>
                      </td>
                      <td className="p-4 text-white text-xs">x2</td>
                      <td className="p-4 text-right text-white text-xs">$1,998</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 md:w-[384px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex items-center aspect-square w-8 h-8 shrink-0"
                          >
                            <img
                              className="h-auto w-full max-h-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg"
                              alt="ipad image"
                            />
                            <img
                              className="hidden h-auto w-full max-h-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg"
                              alt="ipad image"
                            />
                          </a>
                          <a href="#" className="hover:underline text-xs">
                            Apple iPad Air
                          </a>
                        </div>
                      </td>
                      <td className="p-4 text-white text-xs">x1</td>
                      <td className="p-4 text-right text-white text-xs">$898</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 md:w-[384px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex items-center aspect-square w-8 h-8 shrink-0"
                          >
                            <img
                              className="h-auto w-full max-h-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-light.svg"
                              alt="xbox image"
                            />
                            <img
                              className="hidden h-auto w-full max-h-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-dark.svg"
                              alt="xbox image"
                            />
                          </a>
                          <a href="#" className="hover:underline text-xs">
                            Xbox Series X
                          </a>
                        </div>
                      </td>
                      <td className="p-4 text-white text-xs">x4</td>
                      <td className="p-4 text-right text-white text-xs">$4,499</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 md:w-[384px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex items-center aspect-square w-8 h-8 shrink-0"
                          >
                            <img
                              className="h-auto w-full max-h-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg"
                              alt="playstation image"
                            />
                            <img
                              className="hidden h-auto w-full max-h-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg"
                              alt="playstation image"
                            />
                          </a>
                          <a href="#" className="hover:underline text-xs">
                            PlayStation 5
                          </a>
                        </div>
                      </td>
                      <td className="p-4 text-white text-xs">x1</td>
                      <td className="p-4 text-right text-white text-xs">$499</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 md:w-[384px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex items-center aspect-square w-8 h-8 shrink-0"
                          >
                            <img
                              className="h-auto w-full max-h-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg"
                              alt="macbook image"
                            />
                            <img
                              className="hidden h-auto w-full max-h-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg"
                              alt="macbook image"
                            />
                          </a>
                          <a href="#" className="hover:underline text-xs">
                            MacBook Pro 16"
                          </a>
                        </div>
                      </td>
                      <td className="p-4 text-white text-xs">x1</td>
                      <td className="p-4 text-right text-white text-xs">$499</td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 md:w-[384px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex items-center aspect-square w-8 h-8 shrink-0"
                          >
                            <img
                              className="h-auto w-full max-h-full dark:hidden"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg"
                              alt="watch image"
                            />
                            <img
                              className="hidden h-auto w-full max-h-full dark:block"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg"
                              alt="watch image"
                            />
                          </a>
                          <a href="#" className="hover:underline text-xs">
                            Apple Watch SE
                          </a>
                        </div>
                      </td>
                      <td className="p-4 text-white text-xs">x2</td>
                      <td className="p-4 text-right text-white text-xs">$799</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 space-y-6">
                <h4 className="text-sm text-gray-900 dark:text-white">
                  Order summary
                </h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400 text-xs">
                        Original price
                      </dt>
                      <dd className="text-gray-900 dark:text-white text-xs">
                        $6,592.00
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400 text-xs">
                        Savings
                      </dt>
                      <dd className="text-xs text-green-500">
                        -$299.00
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400 text-xs">
                        Store Pickup
                      </dt>
                      <dd className="text-xs text-gray-900 dark:text-white">
                        $99
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400 text-xs">Tax</dt>
                      <dd className="text-xs text-gray-900 dark:text-white">
                        $799
                      </dd>
                    </dl>
                  </div>
                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-sm text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-sm text-gray-900 dark:text-white">
                      $7,191.00
                    </dd>
                  </dl>
                </div>
                <div className="gap-4 sm:flex sm:items-center">
                  <button
                    type="button"
                    className="w-full rounded-lg  border border-gray-200 px-5  py-2.5 text-white m-2 text-xs"
                  >
                    <Link href="/">Return to Shopping</Link>
                  </button>
                  <button
                    type="submit"
                    className="w-full rounded-lg  border border-gray-200 px-5  py-2.5 text-gray-800 bg-white m-2 text-xs"
                  >
                    <Link href="/">Send the order</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
