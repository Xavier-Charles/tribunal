import moment from "moment";
import React from "react";
import ProposalCard from "./ProposalCard";

const ProposalsList = ({ proposals, dao }) => {
  const daysLeft = (date) => moment(date).diff(moment(), "days");
  const sortFunction = (a, b) => {
    return daysLeft(a.endDate) - daysLeft(b.endDate);
  };
  const truncateLongNames = (name) => {
    if (name.length > 20) return `${name.slice(0, 6)}...${name.slice(-5)}`;
    return name;
  };

  const sortProposals = () => {
    const closed = [];
    const open = [];
    proposals.forEach((proposal) => {
      moment(proposal.endDate).isBefore(moment())
        ? closed.push(proposal)
        : open.push(proposal);
      proposal.author = truncateLongNames(proposal.author)
    });
    closed.sort(sortFunction);
    open.sort(sortFunction);
    return [...open, ...closed];
  };
  const sortedProposals = sortProposals();

  return (
    <div
      className="w-full lg:w-3/4 lg:ml-72 relative"
      id="content-right"
    >
      <div className="px-5 lg:px-0 mb-3 flex relative">
        <div className="flex-auto">
          <div className="flex items-center flex-auto">
            <h2 className="font-serif text-xl">Proposals</h2>
          </div>
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
      <div className="space-y-4 px-5 lg:px-0 my-4 lg:w-11/12 w-full">
        {sortedProposals.map((proposal) => (
          <ProposalCard key={proposal._id} proposal={proposal} dao={dao} />
        ))}
      </div>
      <div className="w-[10px] h-[10px] absolute bottom-0"></div>
    </div>
  );
};

export default ProposalsList;
