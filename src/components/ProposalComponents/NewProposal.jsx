import React from "react";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";
import ConnectWallet from "../ConnectWallet";

const NewProposal = ({ dao }) => {
  // const { authenticate, isAuthenticated, logout, user } = useMoralis();

  const handleAuthenticate = () => {
    logout();
    authenticate({ signingMessage: "Verify your Wallet" });
  };
  return (
    <div className="lg:flex max-w-3xl justify-start lg:ml-72">
      <div className="xl:w-9/12 lg:pr-5 relative" id="content-left">
        <div className=" mb-3 flex relative">
          <div className="w-full px-5 md:px-0 flex justify-between items-center">
            <div className="flex items-center flex-auto">
              <h2 className="font-serif text-xl">New Proposals</h2>
            </div>
            <Link
              to={`/${dao.slug}/proposals`}
              className="flex items-center flex-auto justify-end"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-narrow-left"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="5" y1="12" x2="9" y2="16" />
                <line x1="5" y1="12" x2="9" y2="8" />
              </svg>
              <h2 className="text-sm">Back</h2>
            </Link>
          </div>
          <div className="relative inline-block text-left h-full">
            <div className="inline-flex items-center w-full h-full cursor-pointer">
              {/* //TODO: Filter List of proposals */}
              {/* <button
              type="button"
              className="button px-[24px] pr-3"
            >
              All{" "}
              <i
                className="iconfont iconarrow-down mt-1 mr-1"
                style={{ fontSize: "14px", lineHeight: "14px" }}
              ></i>
            </button> */}
            </div>
          </div>
        </div>

        <div className="md:rounded-xl md:border bg-skin-block-bg border-skin-border text-base text-skin-text !border-skin-link text-skin-link mb-8">
          <div className="p-4 leading-5 sm:leading-6">
            <i className="iconfont iconwarning mr-1 float-left"></i>
            <div className="leading-5">
              <span>
                You need to have a minimum of 1 Admin NFT in order to submit a
                proposal.
              </span>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-0">
          <div className="flex flex-col">
            <div className="mb-6">
              <label className="s-label">Title</label>
              <div>
                <div className="z-10 relative">
                  <input
                    maxLength="128"
                    // className="text-md font-semibold s-input w-full !rounded-full"
                    className="py-2 px-4 w-full min-h-[40px] border-gray-200 border focus:border !rounded-xl text-base h-full mt-0 mb-4 focus-visible:outline-none"
                  />
                </div>
                <div className="s-error -mt-[38px] opacity-0 h-6"> </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex justify-between">
                <label className="s-label">Description (optional)</label>
                <div className="text-xs">max 14,400</div>
              </div>
              <div>
                <div className="min-h-[240px] peer border rounded-t-xl overflow-hidden focus-within:border-skin-text">
                  <textarea
                    className="py-2 px-4 w-full min-h-[240px] border-none !rounded-xl text-base h-full mt-0 focus-visible:outline-none"
                    maxLength="14400"
                  ></textarea>
                </div>
                <label className="relative flex justify-between border border-skin-border rounded-b-xl py-1 px-2 items-center peer-focus-within:border-skin-text border-t-0">
                  <input
                    accept="image/jpg, image/jpeg, image/png"
                    type="file"
                    className="opacity-0 absolute p-[5px] top-0 right-0 bottom-0 left-0 w-full ml-0"
                  />
                  <span className="pointer-events-none relative pl-1 text-sm">
                    <span>
                      Attach images by dragging &amp; dropping, selecting or
                      pasting them.
                    </span>
                  </span>
                  <a
                    href="https://docs.github.com/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax"
                    target="_blank"
                    className="whitespace-nowrap relative inline"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="iconfont iconmarkdown text-skin-text"
                      style={{ fontSize: "16px", lineHeight: "16px" }}
                    ></i>
                  </a>
                </label>
              </div>
            </div>
            {/* <div className="flex flex-col mb-8">
              <label className="">Discussion (optional)</label>
              <input
                className="s-input w-full border-gray-200 border h-10 p-2 px-4 !rounded-full"
                placeholder="e.g. https://forum.balancer.fi/proposal..."
              />
            </div> */}

            <div className="">
              <div className="p-4 leading-5 flex flex-col justify-center sm:leading-6">
                <button
                  onClick={handleAuthenticate}
                  className="text-cadet bg-gold border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg mt-10 sm:mt-0"
                >
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProposal;
