import React from "react";

const CastVote = () => {
  return (
    <div className="md:rounded-xl md:border bg-skin-block-bg border-skin-border text-base my-4">
      <h4
        className="px-4 pt-3 block rounded-t-none md:rounded-t-lg border-y md:border-t-0 border-skin-border"
        style={{ paddingBottom: "12px" }}
      >
        Cast your vote{" "}
      </h4>
      <div className="p-4 leading-5 sm:leading-6">
        <div className="mb-3">
          <div className="mb-3">
            <button
              type="button"
              className="button px-[24px] block w-full mb-2"
              data-v-1b931a55=""
            >
              For
            </button>
            <button
              type="button"
              className="button px-[24px] block w-full mb-2"
              data-v-1b931a55=""
            >
              Against
            </button>
          </div>
        </div>
        <button
          type="button"
          className="button px-[24px] button--primary hover:brightness-95 block w-full"
          disabled=""
          data-v-1b931a55=""
        >
          Vote
        </button>
      </div>
    </div>
  );
};

export default CastVote;
