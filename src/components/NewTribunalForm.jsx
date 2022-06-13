import React from "react";

const NewTribunalForm = () => {
  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Tribunal Information
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Use a wallet address where you can receive mail. ## Change text
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="tribunal-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Tribunal name
                    </label>
                    <input
                      type="text"
                      name="tribunal-name"
                      id="tribunal-name"
                      autoComplete="given-name"
                      className="h-[38px] px-2 focus:outline-none mt-1 focus:ring-gold border focus:border-gold block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Tribunal NFT name (5 characters max.)
                    </label>
                    <input
                      type="text"
                      name="token-name"
                      id="token-name"
                      autoComplete="tribunal-name"
                      className="h-[38px] px-2 focus:outline-none mt-1 focus:ring-gold border focus:border-gold block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      className="h-[38px] px-2 focus:outline-none mt-1 focus:ring-gold border focus:border-gold block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-5">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Wallet address
                    </label>
                    <input
                      type="text"
                      name="wallet-address"
                      id="wallet-address"
                      autoComplete="wallet-address"
                      className="h-[38px] px-2 focus:outline-none mt-1 focus:ring-gold border focus:border-gold block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      About this Tribunal
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={5}
                        className="focus:outline-none px-2 py-2 shadow-sm focus:ring-gold focus:border-gold mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder=""
                        defaultValue={""}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for this Tribunal.
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gold hover:bg-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewTribunalForm;
