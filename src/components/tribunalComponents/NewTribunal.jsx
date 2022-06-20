import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTribunal } from "../../api/tribunals";
import { authenticate } from "../../api/utils";
import FileUploader from "../Minter/uploadImage";

const NewTribunal = () => {
  const navigate = useNavigate()
  const [fileUrl, setFileUrl] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [values, setValues] = useState({
    tribunalName: "",
    email: "",
    walletAddress: "",
    mintFee: 0,
    about: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleValidate = () => {
    const { tribunalName, email, walletAddress, mintFee, about } = values;
    if (
      tribunalName &&
      email &&
      walletAddress &&
      about &&
      fileUrl !== "" &&
      mintFee >= 0
    ) {
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (!handleValidate()) return;
      const user = await authenticate(
        "Verify wallet address to start your Tribunal"
      );

      if (user) {
        const { tribunalName, email, walletAddress, mintFee, about } = values;
        const tribunal = {
          tribunalName,
          email,
          walletAddress,
          mintFee,
          about,
          fileUrl,
          creator: user.attributes.ethAddress,
        };
        const response = await createTribunal(tribunal);
        if (response) {
          setSuccess("Tribunal created successfully");
          setTimeout(() => {
            setSuccess(null);
            console.log(response);
            navigate(`/tribunal/${response._id}`);
          }, 5000);
        }
      } else {
        setError("Wallet authentication failed.");
        setTimeout(() => setError(null), 5000);
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
      setTimeout(() => setError(null), 5000);
    }

    setSubmitting(false);
  };

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
                      htmlFor="tribunalName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Tribunal name*
                    </label>
                    <input
                      type="text"
                      name="tribunalName"
                      id="tribunalName"
                      autoComplete="given-name"
                      value={values.tribunalName}
                      onChange={handleChange}
                      className="h-[38px] px-2 focus:outline-none mt-1 focus:ring-gold border focus:border-gold block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address*
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={handleChange}
                      className="h-[38px] px-2 focus:outline-none mt-1 focus:ring-gold border focus:border-gold block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="walletAddress"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Wallet address (Mint Fee is sent here)*
                    </label>
                    <input
                      type="text"
                      name="walletAddress"
                      id="walletAddress"
                      autoComplete="walletAddress"
                      value={values.walletAddress}
                      onChange={handleChange}
                      className="h-[38px] px-2 focus:outline-none mt-1 focus:ring-gold border focus:border-gold block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-2">
                    <label
                      htmlFor="mintFee"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Mint Fee (in MATIC)
                    </label>
                    <input
                      type="number"
                      name="mintFee"
                      id="mintFee"
                      min={0}
                      autoComplete="mintFee"
                      placeholder="Free"
                      value={values.mintFee}
                      onChange={handleChange}
                      className={`${
                        values.mintFee < 0 ? "border-red-500" : ""
                      } h-[38px] px-2 focus:outline-none mt-1 focus:ring-gold border focus:border-gold block w-full shadow-sm sm:text-sm border-gray-300 rounded-md`}
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      About this Tribunal*
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={4}
                        className="focus:outline-none px-2 py-2 shadow-sm focus:ring-gold focus:border-gold mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder=""
                        value={values.about}
                        onChange={handleChange}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for this Tribunal.
                    </p>
                  </div>{" "}
                  <div className="col-span-6">
                    <label
                      htmlFor="tribunalNftName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Tribunal NFT photo*
                    </label>
                    <FileUploader fileUrl={fileUrl} setFileUrl={setFileUrl} />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
                <button
                  type="submit"
                  className={`${
                    handleValidate() ? "" : "opacity-30"
                  } inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gold hover:bg-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold`}
                  onClick={handleSubmit}
                  disabled={!handleValidate()}
                >
                  {submitting ? "Creating..." : "Create"}
                </button>
                {(success || error) && (
                  <>
                    <p
                      className={`${
                        error ? "" : "hidden"
                      }text-center text-sm text-red-500 mt-2`}
                    >
                      {error}
                    </p>
                    <p
                      className={`${
                        success ? "" : "hidden"
                      }text-center text-sm text-green-500 mt-2`}
                    >
                      {success}
                    </p>
                  </>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewTribunal;
