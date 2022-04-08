import moment from "moment";
import React from "react";
import Proposal from "./Proposal";

const ProposalsList = ({ proposals, dao }) => {

  const daysLeft = (date) => moment(date).diff(moment(), "days");
  const sortFunction = (a, b) => {
    return daysLeft(a.endDate) - daysLeft(b.endDate);
  };

  const sortProposals = () => {
    const closed = [];
    const open = [];
    proposals.forEach((proposal) =>
      moment(proposal.endDate).isBefore(moment())
        ? closed.push(proposal)
        : open.push(proposal)
    );
    closed.sort(sortFunction);
    open.sort(sortFunction);
    return [...open, ...closed];
  };
  const sortedProposals = sortProposals();

  return (
    <div
      className="w-full lg:w-3/4 float-right pl-0 lg:pl-5 relative"
      id="content-right"
    >
      <div className="px-3 md:px-0 mb-3 flex relative">
        <div className="flex-auto">
          <div className="flex items-center flex-auto">
            <h2 className="font-serif text-xl">Proposals</h2>
          </div>
        </div>
        <div
          className="relative inline-block text-left h-full"
          data-v-025c8f0a=""
        >
          <div
            className="inline-flex items-center w-full h-full cursor-pointer"
            data-v-025c8f0a=""
          >
            {/* //TODO: Filter List of proposals */}
            {/* <button
              type="button"
              className="button px-[24px] pr-3"
              data-v-1b931a55=""
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
      <div className="md:space-y-4 my-4">
        {sortedProposals.map((proposal) => (
          <Proposal proposal={proposal} dao={dao} />
        ))}
      </div>
      <div className="w-[10px] h-[10px] absolute bottom-0"></div>
    </div>
  );
};

export default ProposalsList;
