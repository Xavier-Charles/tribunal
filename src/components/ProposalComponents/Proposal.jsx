import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProposal } from "../../api/proposals";
import { truncateWithEllipsis } from "../../api/utils";
import CastVote from "../CastVote";
import Tag from "../Tag";
import ProposalSkeleton from "./ProposalSkeleton";
import VoteResults from "./VoteResults";

const Proposal = ({ _proposal, dao }) => {
  const { id } = useParams();
  const [proposal, setProposal] = useState({});
  const isClosed = (p) => moment(p).isBefore(moment());

  const handleProposal = (p) => setProposal(p);

  useEffect(() => {
    let isSubscribed = true;

    if (isSubscribed && !_proposal)
      (async () => {
        const data = await getProposal(id);
        if (data) handleProposal(data);
      })();
    return () => {
      isSubscribed = false;
    };
  }, []);

  const VoteItem = ({ name, type }) => (
    <div className="px-3 py-3 border-t flex">
      <span className="w-[110px] xs:w-[130px] min-w-[110px] xs:min-w-[130px]">
        <div>
          <a className="flex flex-nowrap">
            <span className="flex shrink-0 items-center justify-center mr-2">
              <img
                src={`https://i.pravatar.cc/36?img=${Math.floor(
                  Math.random() * 65
                )}`}
                className="rounded-full bg-[color:var(--border-color)]"
                style={{
                  width: "18px",
                  height: "18px",
                  minWidth: "18px",
                }}
              />
            </span>
            <span className="w-full">
              {truncateWithEllipsis(proposal.author, 8)}
            </span>
          </a>
        </div>
      </span>
      <div className="flex-auto text-center text-skin-link truncate px-2">
        <div className="text-center text-skin-link capitalize">{type}</div>
      </div>
    </div>
  );

  return (
    <div className="lg:flex px-2 sm:px-5 md:px-0 lg:ml-72">
      <div
        className="w-full lg:w-8/12 lg:pr-5 md:mt-3 relative"
        id="content-left"
      >
        <div className="w-full px-3 md:px-0 mb-2 flex justify-between items-center">
          <div className="flex items-center flex-auto">
            <h2 className="font-serif text-xl">Proposal</h2>
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

        {Object.keys(proposal).length > 0 ? (
          <>
            <div className="px-3 md:px-0">
              <h1 className="mb-3 break-words text-xl leading-8 sm:text-2xl">
                {proposal.title}
              </h1>
              <div className="flex flex-col sm:flex-row sm:space-x-1 mb-4">
                <div className="flex items-center mb-1 sm:mb-0">
                  <Tag
                    text={isClosed(proposal.endDate) ? "Closed" : "Open"}
                    bg={isClosed(proposal.endDate) ? "bg-cadet" : "bg-gold"}
                    noAbsolute
                  />
                  <a
                    href="#/ens.eth"
                    className="router-link-active text-skin-text group"
                  >
                    <div className="flex items-center">
                      <span className="inline-block align-middle leading-none">
                        <span className="flex shrink-0 items-center justify-center">
                          <img
                            src={dao.logo}
                            className="rounded-full bg-[color:var(--border-color)]"
                            alt="ENS"
                            style={{
                              width: "28px",
                              height: "28px",
                              minWidth: "28px",
                            }}
                          />
                        </span>
                      </span>
                      <span className="ml-2 group-hover:text-skin-link">
                        Proposal
                      </span>
                    </div>
                  </a>
                </div>
                <div className="flex grow items-center space-x-1">
                  <span>by </span>
                  <span>{truncateWithEllipsis(proposal.author, 8)}</span>

                  <div className="relative inline-block text-left h-full md:ml-2">
                    <div className="inline-flex items-center w-full h-full cursor-pointer">
                      <div className="pl-1">
                        <i
                          className="iconfont iconthreedots hover:text-skin-link"
                          style={{ fontSize: "25px", lineHeight: "25px" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">{proposal.desc}</div>
            </div>
            <CastVote proposal={proposal} handleProposal={handleProposal} />
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
                  {proposal.votes?.ballot &&
                    Object.keys(proposal.votes.ballot).map((key) => (
                      <VoteItem
                        key={key}
                        name={key}
                        type={proposal.votes?.ballot[key]}
                      />
                    ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <ProposalSkeleton />
        )}

        {/**
         *
         * Cast Vote
         *
         */}
        {/**
         *
         * Votes
         *
         */}
      </div>
      {proposal && <VoteResults proposal={proposal} />}
    </div>
  );
};

export default Proposal;
