import React from 'react'

const VotesList = ({ballot}) => {
  return (
    <div className="space-y-4 py-4">
      <div className="md:rounded-xl md:border bg-skin-block-bg border-skin-border text-base">
        <h4
          className="px-4 pt-3 block rounded-t-none md:rounded-t-lg border-y md:border-t-0 border-skin-border"
          style={{ paddingBottom: "12px" }}
        >
          Votes{" "}
          <div className="h-[20px] min-w-[20px] rounded-full leading-normal text-xs text-white bg-skin-text text-center px-1 ml-1 inline-block">
            445
          </div>
        </h4>
        <div className="leading-5 sm:leading-6">
          {ballot &&
            Object.keys(ballot).map((key) => (
              <VoteItem
                key={key}
                name={key}
                type={ballot[key]}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default VotesList