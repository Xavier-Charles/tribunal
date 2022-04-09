import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import CastVote from "../CastVote";
import Tag from "../Tag";

const Proposal = ({ proposal, dao }) => {
  const isClosed = moment(proposal.endDate).isBefore(moment());

  return (
    <div className="lg:flex px-2 sm:px-5 md:px-0 lg:ml-72">
      <div className="w-full lg:w-8/12 lg:pr-5 md:mt-3 relative" id="content-left">
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
        <div className="px-3 md:px-0">
          <h1 className="mb-3 break-words text-xl leading-8 sm:text-2xl">
            {proposal.title}
          </h1>
          <div className="flex flex-col sm:flex-row sm:space-x-1 mb-4">
            <div className="flex items-center mb-1 sm:mb-0">
              <Tag
                text={isClosed ? "Closed" : "Open"}
                bg={isClosed ? "bg-cadet" : "bg-gold"}
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
              <span>{proposal.author}</span>

              {/* <div
                className="relative inline-block text-left h-full pl-3 !ml-auto"
                data-v-025c8f0a=""
              >
                <div
                  className="inline-flex items-center w-full h-full cursor-pointer"
                  data-v-025c8f0a=""
                >
                  <button className="pr-1 select-none flex cursor-pointer">
                    <i
                      className="iconfont iconupload"
                      style={{ fontSize: "25px", lineHeight: "25px" }}
                    ></i>
                    <span className="ml-1 hidden md:block">Share</span>
                  </button>
                </div>
              </div> */}
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

        {/**
         *
         * Cast Vote
         *
         */}
        <CastVote />
        {/**
         *
         * Votes
         *
         */}
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
              <div
                className="px-3 py-3 border-t flex"
                style={{ border: "0px !important" }}
              >
                <span className="w-[110px] xs:w-[130px] min-w-[110px] xs:min-w-[130px]">
                  <div>
                    <a className="flex flex-nowrap">
                      <span className="flex shrink-0 items-center justify-center mr-2">
                        <img
                          src="https://stamp.fyi/avatar/eth:0x983110309620D911731Ac0932219af06091b6744?s=36"
                          className="rounded-full bg-[color:var(--border-color)]"
                          style={{
                            width: "18px",
                            height: "18px",
                            minWidth: "18px",
                          }}
                        />
                      </span>
                      <span className="truncate w-full">brantly.eth</span>
                      <span className="border px-[7px] text-xs rounded-full text-skin-text ml-1">
                        Core
                      </span>
                    </a>
                  </div>
                  <div
                    className="z-50 min-w-[300px] bg-skin-header-bg border border-skin-border rounded-xl shadow-lg"
                    style={{
                      display: "none",
                      position: "absolute",
                      inset: "auto auto 0px 0px; margin: 0px",
                      transform: "translate3d(405.5px, 2755px, 0px)",
                    }}
                  >
                    <div className="m-4 mb-0 text-center">
                      <span className="flex shrink-0 items-center justify-center mb-4">
                        <img
                          src="https://stamp.fyi/avatar/eth:0x983110309620D911731Ac0932219af06091b6744?s=128"
                          className="rounded-full bg-[color:var(--border-color)]"
                          style={{
                            width: "64px",
                            height: "64px",
                            minWidth: "64px",
                          }}
                        />
                      </span>
                      <h3 className="mt-3">brantly.eth</h3>
                    </div>
                    <div className="m-4">
                      <a
                        href="https://etherscan.io/address/0x983110309620D911731Ac0932219af06091b6744"
                        target="_blank"
                        className="mb-2 block"
                      >
                        <button
                          type="button"
                          className="button px-[24px] button-outline w-full"
                        >
                          See on explorer{" "}
                          <i
                            className="iconfont iconexternal-link ml-1"
                            style={{ fontSize: "16px", lineHeight: "16px" }}
                          ></i>
                        </button>
                      </a>
                    </div>
                  </div>
                </span>
                <div className="flex-auto text-center text-skin-link truncate px-2">
                  <div className="text-center text-skin-link truncate">For</div>
                </div>
                <div className="min-w-[110px] xs:min-w-[130px] text-right text-skin-link whitespace-nowrap">
                  <span>352K ENS</span>
                  <a
                    target="_blank"
                    className="ml-2 text-skin-text"
                    title="Receipt"
                  >
                    <i
                      className="iconfont iconsignature"
                      style={{ fontSize: "16px", lineHeight: "16px" }}
                    ></i>
                  </a>
                </div>
              </div>
              <div className="px-3 py-3 border-t flex">
                <span className="w-[110px] xs:w-[130px] min-w-[110px] xs:min-w-[130px]">
                  <div>
                    <a className="flex flex-nowrap">
                      <span className="flex shrink-0 items-center justify-center mr-2">
                        <img
                          src="https://stamp.fyi/avatar/eth:0x81b287c0992B110ADEB5903Bf7E2d9350C80581a?s=36"
                          className="rounded-full bg-[color:var(--border-color)]"
                          style={{
                            width: "18px",
                            height: "18px",
                            minWidth: "18px",
                          }}
                        />
                      </span>
                      <span className="truncate w-full">coinbase.eth</span>
                    </a>
                  </div>
                  <div
                    className="z-50 min-w-[300px] bg-skin-header-bg border border-skin-border rounded-xl shadow-lg"
                    style={{
                      display: "none",
                      position: "absolute",
                      inset: "auto auto 0px 0px",
                      margin: "0px",
                      transform: "translate3d(405.5px, 2814px, 0px)",
                    }}
                  >
                    <div className="m-4 mb-0 text-center">
                      <span className="flex shrink-0 items-center justify-center mb-4">
                        <img
                          src="https://stamp.fyi/avatar/eth:0x81b287c0992B110ADEB5903Bf7E2d9350C80581a?s=128"
                          className="rounded-full bg-[color:var(--border-color)]"
                          style={{
                            width: "64px",
                            height: "64px",
                            minWidth: "64px",
                          }}
                        />
                      </span>
                      <h3 className="mt-3">coinbase.eth</h3>
                    </div>
                    <div className="m-4">
                      <a
                        href="https://etherscan.io/address/0x81b287c0992B110ADEB5903Bf7E2d9350C80581a"
                        target="_blank"
                        className="mb-2 block"
                      >
                        <button
                          type="button"
                          className="button px-[24px] button-outline w-full"
                        >
                          See on explorer{" "}
                          <i
                            className="iconfont iconexternal-link ml-1"
                            style={{ fontSize: "16px", lineHeight: "16px" }}
                          ></i>
                        </button>
                      </a>
                    </div>
                  </div>
                </span>
                <div className="flex-auto text-center text-skin-link truncate px-2">
                  <div className="text-center text-skin-link truncate">For</div>
                </div>
                <div className="min-w-[110px] xs:min-w-[130px] text-right text-skin-link whitespace-nowrap">
                  <span>289K ENS</span>
                  <a
                    target="_blank"
                    className="ml-2 text-skin-text"
                    title="Receipt"
                  >
                    <i
                      className="iconfont iconsignature"
                      style={{ fontSize: "16px", lineHeight: "16px" }}
                    ></i>
                  </a>
                </div>
              </div>
              <div className="px-3 py-3 border-t flex">
                <span className="w-[110px] xs:w-[130px] min-w-[110px] xs:min-w-[130px]">
                  <div>
                    <a className="flex flex-nowrap">
                      <span className="flex shrink-0 items-center justify-center mr-2">
                        <img
                          src="https://stamp.fyi/avatar/eth:0xBdB41BfF7E828E2DC2d15EB67257455db818F1DC?s=36"
                          className="rounded-full bg-[color:var(--border-color)]"
                          style={{
                            width: "18px",
                            height: "18px",
                            minWidth: "18px",
                          }}
                        />
                      </span>
                      <span className="truncate w-full">cory.eth</span>
                    </a>
                  </div>
                  <div
                    className="z-50 min-w-[300px] bg-skin-header-bg border border-skin-border rounded-xl shadow-lg"
                    style={{
                      display: "none",
                      position: "absolute",
                      inset: "auto auto 0px 0px",
                      margin: "0px",
                      transform: "translate3d(405.5px, 2871px, 0px)",
                    }}
                  >
                    <div className="m-4 mb-0 text-center">
                      <span className="flex shrink-0 items-center justify-center mb-4">
                        <img
                          src="https://stamp.fyi/avatar/eth:0xBdB41BfF7E828E2DC2d15EB67257455db818F1DC?s=128"
                          className="rounded-full bg-[color:var(--border-color)]"
                          style={{
                            width: "64px",
                            height: "64px",
                            minWidth: "64px",
                          }}
                        />
                      </span>
                      <h3 className="mt-3">cory.eth</h3>
                    </div>
                    <div className="m-4">
                      <a
                        href="https://etherscan.io/address/0xBdB41BfF7E828E2DC2d15EB67257455db818F1DC"
                        target="_blank"
                        className="mb-2 block"
                      >
                        <button
                          type="button"
                          className="button px-[24px] button-outline w-full"
                        >
                          See on explorer{" "}
                          <i
                            className="iconfont iconexternal-link ml-1"
                            style={{ fontSize: "16px", lineHeight: "16px" }}
                          ></i>
                        </button>
                      </a>
                    </div>
                  </div>
                </span>
                <div className="flex-auto text-center text-skin-link truncate px-2">
                  <div className="text-center text-skin-link truncate">For</div>
                </div>
                <div className="min-w-[110px] xs:min-w-[130px] text-right text-skin-link whitespace-nowrap">
                  <span>264K ENS</span>
                  <a
                    target="_blank"
                    className="ml-2 text-skin-text"
                    title="Receipt"
                  >
                    <i
                      className="iconfont iconsignature"
                      style={{ fontSize: "16px", lineHeight: "16px" }}
                    ></i>
                  </a>
                </div>
              </div>
              <div className="px-3 py-3 border-t flex">
                <span className="w-[110px] xs:w-[130px] min-w-[110px] xs:min-w-[130px]">
                  <div>
                    <a className="flex flex-nowrap">
                      <span className="flex shrink-0 items-center justify-center mr-2">
                        <img
                          src="https://stamp.fyi/avatar/eth:0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5?s=36"
                          className="rounded-full bg-[color:var(--border-color)]"
                          style={{
                            width: "18px",
                            height: "18px",
                            minWidth: "18px",
                          }}
                        />
                      </span>
                      <span className="truncate w-full">nick.eth</span>
                      <span className="border px-[7px] text-xs rounded-full text-skin-text ml-1">
                        Core
                      </span>
                    </a>
                  </div>
                  <div
                    className="z-50 min-w-[300px] bg-skin-header-bg border border-skin-border rounded-xl shadow-lg"
                    style={{
                      display: "none",
                      position: "absolute",
                      inset: "auto auto 0px 0px",
                      margin: "0px",
                      transform: "translate3d(405.5px, 2928px, 0px)",
                    }}
                  >
                    <div className="m-4 mb-0 text-center">
                      <span className="flex shrink-0 items-center justify-center mb-4">
                        <img
                          src="https://stamp.fyi/avatar/eth:0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5?s=128"
                          className="rounded-full bg-[color:var(--border-color)]"
                          style={{
                            width: "64px",
                            height: "64px",
                            minWidth: "64px",
                          }}
                        />
                      </span>
                      <h3 className="mt-3">nick.eth</h3>
                    </div>
                    <div className="m-4">
                      <a
                        href="https://etherscan.io/address/0xb8c2C29ee19D8307cb7255e1Cd9CbDE883A267d5"
                        target="_blank"
                        className="mb-2 block"
                      >
                        <button
                          type="button"
                          className="button px-[24px] button-outline w-full"
                        >
                          See on explorer{" "}
                          <i
                            className="iconfont iconexternal-link ml-1"
                            style={{ fontSize: "16px", lineHeight: "16px" }}
                          ></i>
                        </button>
                      </a>
                    </div>
                  </div>
                </span>
                <div className="flex-auto text-center text-skin-link truncate px-2">
                  <div className="text-center text-skin-link truncate">For</div>
                </div>
                <div className="min-w-[110px] xs:min-w-[130px] text-right text-skin-link whitespace-nowrap">
                  <span>246K ENS</span>
                  <a
                    target="_blank"
                    className="ml-2 text-skin-text"
                    title="Receipt"
                  >
                    <i
                      className="iconfont iconsignature"
                      style={{ fontSize: "16px", lineHeight: "16px" }}
                    ></i>
                  </a>
                </div>
              </div>
              <div className="px-3 py-3 border-t flex">
                <span className="w-[110px] xs:w-[130px] min-w-[110px] xs:min-w-[130px]">
                  <div>
                    <a className="flex flex-nowrap">
                      <span className="flex shrink-0 items-center justify-center mr-2">
                        <img
                          src="https://stamp.fyi/avatar/eth:0x2B888954421b424C5D3D9Ce9bB67c9bD47537d12?s=36"
                          className="rounded-full bg-[color:var(--border-color)]"
                          style={{
                            width: "18px",
                            height: "18px",
                            minWidth: "18px",
                          }}
                        />
                      </span>
                      <span className="truncate w-full">lefteris.eth</span>
                    </a>
                  </div>
                  <div
                    className="z-50 min-w-[300px] bg-skin-header-bg border border-skin-border rounded-xl shadow-lg"
                    style={{
                      display: "none",
                      position: "absolute",
                      inset: "auto auto 0px 0px",
                      margin: "0px",
                      transform: "translate3d(405.5px, 2987px, 0px)",
                    }}
                  >
                    <div className="m-4 mb-0 text-center">
                      <span className="flex shrink-0 items-center justify-center mb-4">
                        <img
                          src="https://stamp.fyi/avatar/eth:0x2B888954421b424C5D3D9Ce9bB67c9bD47537d12?s=128"
                          className="rounded-full bg-[color:var(--border-color)]"
                          style={{
                            width: "64px",
                            height: "64px",
                            minWidth: "64px",
                          }}
                        />
                      </span>
                      <h3 className="mt-3">lefteris.eth</h3>
                    </div>
                    <div className="m-4">
                      <a
                        href="https://etherscan.io/address/0x2B888954421b424C5D3D9Ce9bB67c9bD47537d12"
                        target="_blank"
                        className="mb-2 block"
                      >
                        <button
                          type="button"
                          className="button px-[24px] button-outline w-full"
                        >
                          See on explorer{" "}
                          <i
                            className="iconfont iconexternal-link ml-1"
                            style={{ fontSize: "16px", lineHeight: "16px" }}
                          ></i>
                        </button>
                      </a>
                    </div>
                  </div>
                </span>
                <div className="flex-auto text-center text-skin-link truncate px-2">
                  <div className="text-center text-skin-link truncate">For</div>
                </div>
                <div className="min-w-[110px] xs:min-w-[130px] text-right text-skin-link whitespace-nowrap">
                  <span>214K ENS</span>
                  <a
                    target="_blank"
                    className="ml-2 text-skin-text"
                    title="Receipt"
                  >
                    <i
                      className="iconfont iconsignature"
                      style={{ fontSize: "16px", lineHeight: "16px" }}
                    ></i>
                  </a>
                </div>
              </div>
              <div className="px-3 py-3 border-t flex">
                <span className="w-[110px] xs:w-[130px] min-w-[110px] xs:min-w-[130px]">
                  <div>
                    <a className="flex flex-nowrap">
                      <span className="flex shrink-0 items-center justify-center mr-2">
                        <img
                          src="https://stamp.fyi/avatar/eth:0x809FA673fe2ab515FaA168259cB14E2BeDeBF68e?s=36"
                          className="rounded-full bg-[color:var(--border-color)]"
                          style={{
                            width: "18px",
                            height: "18px",
                            minWidth: "18px",
                          }}
                        />
                      </span>
                      <span className="truncate w-full">avsa.eth</span>
                    </a>
                  </div>
                  <div
                    className="z-50 min-w-[300px] bg-skin-header-bg border border-skin-border rounded-xl shadow-lg"
                    style={{
                      display: "none",
                      position: "absolute",
                      inset: "auto auto 0px 0px",
                      margin: "0px",
                      transform: "translate3d(405.5px, 3044px, 0px)",
                    }}
                  >
                    <div className="m-4 mb-0 text-center">
                      <span className="flex shrink-0 items-center justify-center mb-4">
                        <img
                          src="https://stamp.fyi/avatar/eth:0x809FA673fe2ab515FaA168259cB14E2BeDeBF68e?s=128"
                          className="rounded-full bg-[color:var(--border-color)]"
                          style={{
                            width: "64px",
                            height: "64px",
                            minWidth: "64px",
                          }}
                        />
                      </span>
                      <h3 className="mt-3">avsa.eth</h3>
                    </div>
                    <div className="m-4">
                      <a
                        href="https://etherscan.io/address/0x809FA673fe2ab515FaA168259cB14E2BeDeBF68e"
                        target="_blank"
                        className="mb-2 block"
                      >
                        <button
                          type="button"
                          className="button px-[24px] button-outline w-full"
                        >
                          See on explorer{" "}
                          <i
                            className="iconfont iconexternal-link ml-1"
                            style={{ fontSize: "16px", lineHeight: "16px" }}
                          ></i>
                        </button>
                      </a>
                    </div>
                  </div>
                </span>
                <div className="flex-auto text-center text-skin-link truncate px-2">
                  <div className="text-center text-skin-link truncate">For</div>
                </div>
                <div className="min-w-[110px] xs:min-w-[130px] text-right text-skin-link whitespace-nowrap">
                  <span>214K ENS</span>
                  <a
                    target="_blank"
                    className="ml-2 text-skin-text"
                    title="Receipt"
                  >
                    <i
                      className="iconfont iconsignature"
                      style={{ fontSize: "16px", lineHeight: "16px" }}
                    ></i>
                  </a>
                </div>
              </div>
              <div className="px-3 py-3 border-t flex">
                <span className="w-[110px] xs:w-[130px] min-w-[110px] xs:min-w-[130px]">
                  <div>
                    <a className="flex flex-nowrap">
                      <span className="flex shrink-0 items-center justify-center mr-2">
                        <img
                          src="https://stamp.fyi/avatar/eth:0x7a3d05c70581bD345fe117c06e45f9669205384f?s=36"
                          className="rounded-full bg-[color:var(--border-color)]"
                          style={{
                            width: "18px",
                            height: "18px",
                            minWidth: "18px",
                          }}
                        />
                      </span>
                      <span className="truncate w-full">rainbowwallet.eth</span>
                    </a>
                  </div>
                  <div
                    className="z-50 min-w-[300px] bg-skin-header-bg border border-skin-border rounded-xl shadow-lg"
                    style={{
                      display: "none",
                      position: "absolute",
                      inset: "auto auto 0px 0px",
                      margin: "0px",
                      transform: "translate3d(405.5px, 3101px, 0px)",
                    }}
                  >
                    <div className="m-4 mb-0 text-center">
                      <span className="flex shrink-0 items-center justify-center mb-4">
                        <img
                          src="https://stamp.fyi/avatar/eth:0x7a3d05c70581bD345fe117c06e45f9669205384f?s=128"
                          className="rounded-full bg-[color:var(--border-color)]"
                          style={{
                            width: "64px",
                            height: "64px",
                            minWidth: "64px",
                          }}
                        />
                      </span>
                      <h3 className="mt-3">rainbowwallet.eth</h3>
                    </div>
                    <div className="m-4">
                      <a
                        href="https://etherscan.io/address/0x7a3d05c70581bD345fe117c06e45f9669205384f"
                        target="_blank"
                        className="mb-2 block"
                      >
                        <button
                          type="button"
                          className="button px-[24px] button-outline w-full"
                        >
                          See on explorer{" "}
                          <i
                            className="iconfont iconexternal-link ml-1"
                            style={{ fontSize: "16px", lineHeight: "16px" }}
                          ></i>
                        </button>
                      </a>
                    </div>
                  </div>
                </span>
                <div className="flex-auto text-center text-skin-link truncate px-2">
                  <div className="text-center text-skin-link truncate">For</div>
                </div>
                <div className="min-w-[110px] xs:min-w-[130px] text-right text-skin-link whitespace-nowrap">
                  <span>180K ENS</span>
                  <a
                    target="_blank"
                    className="ml-2 text-skin-text"
                    title="Receipt"
                  >
                    <i
                      className="iconfont iconsignature"
                      style={{ fontSize: "16px", lineHeight: "16px" }}
                    ></i>
                  </a>
                </div>
              </div>
              <div className="px-3 py-3 border-t flex">
                <span className="w-[110px] xs:w-[130px] min-w-[110px] xs:min-w-[130px]">
                  <div>
                    <a className="flex flex-nowrap">
                      <span className="flex shrink-0 items-center justify-center mr-2">
                        <img
                          src="https://stamp.fyi/avatar/eth:0xed11e5eA95a5A3440fbAadc4CC404C56D0a5bb04?s=36"
                          className="rounded-full bg-[color:var(--border-color)]"
                          style={{
                            width: "18px",
                            height: "18px",
                            minWidth: "18px",
                          }}
                        />
                      </span>
                      <span className="truncate w-full">she256.eth</span>
                    </a>
                  </div>
                  <div
                    className="z-50 min-w-[300px] bg-skin-header-bg border border-skin-border rounded-xl shadow-lg"
                    style={{
                      display: "none",
                      position: "absolute",
                      inset: "auto auto 0px 0px",
                      margin: "0px",
                      transform: "translate3d(405.5px, 3158px, 0px)",
                    }}
                  >
                    <div className="m-4 mb-0 text-center">
                      <span className="flex shrink-0 items-center justify-center mb-4">
                        <img
                          src="https://stamp.fyi/avatar/eth:0xed11e5eA95a5A3440fbAadc4CC404C56D0a5bb04?s=128"
                          className="rounded-full bg-[color:var(--border-color)]"
                          style={{
                            width: "64px",
                            height: "64px",
                            minWidth: "64px",
                          }}
                        />
                      </span>
                      <h3 className="mt-3">she256.eth</h3>
                    </div>
                    <div className="m-4">
                      <a
                        href="https://etherscan.io/address/0xed11e5eA95a5A3440fbAadc4CC404C56D0a5bb04"
                        target="_blank"
                        className="mb-2 block"
                      >
                        <button
                          type="button"
                          className="button px-[24px] button-outline w-full"
                        >
                          See on explorer{" "}
                          <i
                            className="iconfont iconexternal-link ml-1"
                            style={{ fontSize: "16px", lineHeight: "16px" }}
                          ></i>
                        </button>
                      </a>
                    </div>
                  </div>
                </span>
                <div className="flex-auto text-center text-skin-link truncate px-2">
                  <div className="text-center text-skin-link truncate">For</div>
                </div>
                <div className="min-w-[110px] xs:min-w-[130px] text-right text-skin-link whitespace-nowrap">
                  <span>170K ENS</span>
                  <a
                    target="_blank"
                    className="ml-2 text-skin-text"
                    title="Receipt"
                  >
                    <i
                      className="iconfont iconsignature"
                      style={{ fontSize: "16px", lineHeight: "16px" }}
                    ></i>
                  </a>
                </div>
              </div>
              <div className="px-3 py-3 border-t flex">
                <span className="w-[110px] xs:w-[130px] min-w-[110px] xs:min-w-[130px]">
                  <div>
                    <a className="flex flex-nowrap">
                      <span className="flex shrink-0 items-center justify-center mr-2">
                        <img
                          src="https://stamp.fyi/avatar/eth:0x839395e20bbB182fa440d08F850E6c7A8f6F0780?s=36"
                          className="rounded-full bg-[color:var(--border-color)]"
                          style={{
                            width: "18px",
                            height: "18px",
                            minWidth: "18px",
                          }}
                        />
                      </span>
                      <span className="truncate w-full">griff.eth</span>
                    </a>
                  </div>
                  <div
                    className="z-50 min-w-[300px] bg-skin-header-bg border border-skin-border rounded-xl shadow-lg"
                    style={{
                      display: "none",
                      position: "absolute",
                      inset: "auto auto 0px 0px",
                      margin: "0px",
                      transform: "translate3d(405.5px, 3215px, 0px)",
                    }}
                  >
                    <div className="m-4 mb-0 text-center">
                      <span className="flex shrink-0 items-center justify-center mb-4">
                        <img
                          src="https://stamp.fyi/avatar/eth:0x839395e20bbB182fa440d08F850E6c7A8f6F0780?s=128"
                          className="rounded-full bg-[color:var(--border-color)]"
                          style={{
                            width: "64px",
                            height: "64px",
                            minWidth: "64px",
                          }}
                        />
                      </span>
                      <h3 className="mt-3">griff.eth</h3>
                    </div>
                    <div className="m-4">
                      <a
                        href="https://etherscan.io/address/0x839395e20bbB182fa440d08F850E6c7A8f6F0780"
                        target="_blank"
                        className="mb-2 block"
                      >
                        <button
                          type="button"
                          className="button px-[24px] button-outline w-full"
                        >
                          See on explorer{" "}
                          <i
                            className="iconfont iconexternal-link ml-1"
                            style={{ fontSize: "16px", lineHeight: "16px" }}
                          ></i>
                        </button>
                      </a>
                    </div>
                  </div>
                </span>
                <div className="flex-auto text-center text-skin-link truncate px-2">
                  <div className="text-center text-skin-link truncate">For</div>
                </div>
                <div className="min-w-[110px] xs:min-w-[130px] text-right text-skin-link whitespace-nowrap">
                  <span>166K ENS</span>
                  <a
                    target="_blank"
                    className="ml-2 text-skin-text"
                    title="Receipt"
                  >
                    <i
                      className="iconfont iconsignature"
                      style={{ fontSize: "16px", lineHeight: "16px" }}
                    ></i>
                  </a>
                </div>
              </div>
              <div className="px-3 py-3 border-t flex">
                <span className="w-[110px] xs:w-[130px] min-w-[110px] xs:min-w-[130px]">
                  <div>
                    <a className="flex flex-nowrap">
                      <span className="flex shrink-0 items-center justify-center mr-2">
                        <img
                          src="https://stamp.fyi/avatar/eth:0xE5501BC2B0Df6D0D7daAFC18D2ef127D9e612963?s=36"
                          className="rounded-full bg-[color:var(--border-color)]"
                          style={{
                            width: "18px",
                            height: "18px",
                            minWidth: "18px",
                          }}
                        />
                      </span>
                      <span className="truncate w-full">mikedemarais.eth</span>
                    </a>
                  </div>
                  <div
                    className="z-50 min-w-[300px] bg-skin-header-bg border border-skin-border rounded-xl shadow-lg"
                    style={{
                      display: "none",
                      position: "absolute",
                      inset: "auto auto 0px 0px",
                      margin: "0px",
                      transform: "translate3d(405.5px, 3272px, 0px)",
                    }}
                  >
                    <div className="m-4 mb-0 text-center">
                      <span className="flex shrink-0 items-center justify-center mb-4">
                        <img
                          src="https://stamp.fyi/avatar/eth:0xE5501BC2B0Df6D0D7daAFC18D2ef127D9e612963?s=128"
                          className="rounded-full bg-[color:var(--border-color)]"
                          style={{
                            width: "64px",
                            height: "64px",
                            minWidth: "64px",
                          }}
                        />
                      </span>
                      <h3 className="mt-3">mikedemarais.eth</h3>
                    </div>
                    <div className="m-4">
                      <a
                        href="https://etherscan.io/address/0xE5501BC2B0Df6D0D7daAFC18D2ef127D9e612963"
                        target="_blank"
                        className="mb-2 block"
                      >
                        <button
                          type="button"
                          className="button px-[24px] button-outline w-full"
                        >
                          See on explorer{" "}
                          <i
                            className="iconfont iconexternal-link ml-1"
                            style={{ fontSize: "16px", lineHeight: "16px" }}
                          ></i>
                        </button>
                      </a>
                    </div>
                  </div>
                </span>
                <div className="flex-auto text-center text-skin-link truncate px-2">
                  <div className="text-center text-skin-link truncate">For</div>
                </div>
                <div className="min-w-[110px] xs:min-w-[130px] text-right text-skin-link whitespace-nowrap">
                  <span>155K ENS</span>
                  <a
                    target="_blank"
                    className="ml-2 text-skin-text"
                    title="Receipt"
                  >
                    <i
                      className="iconfont iconsignature"
                      style={{ fontSize: "16px", lineHeight: "16px" }}
                    ></i>
                  </a>
                </div>
              </div>
              <a className="px-4 py-3 border-t text-center block rounded-b-none md:rounded-b-md">
                <span>See more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-4/12 lg:min-w-[321px]" id="sidebar-right">
        <div className="space-y-4 mt-4 lg:mt-0">
          <div className="md:rounded-xl md:border bg-skin-block-bg border-skin-border text-base">
            <h4
              className="px-4 pt-3 block rounded-t-none md:rounded-t-lg border-y md:border-t-0 border-skin-border"
              style={{ paddingBottom: "12px" }}
            >
              Information{" "}
            </h4>
            <div className="p-4 leading-5 sm:leading-6">
              <div className="space-y-1">
                <div>
                  <b>IPFS</b>
                  <a
                    href="https://cloudflare-ipfs.com/ipfs/Qme6unqKYhKTymXjB8G8ZWyjNtrskqE8k44m16u1LLv85S"
                    target="_blank"
                    className="whitespace-nowrap float-right"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    #Qme6unq
                    <i
                      className="iconfont iconexternal-link ml-1"
                      style={{ fontSize: "16px", lineHeight: "16px" }}
                    ></i>
                  </a>
                </div>
                <div>
                  <b>Voting system</b>
                  <span className="float-right text-skin-link">
                    Basic voting
                  </span>
                </div>
                <div>
                  <b>Start date</b>
                  <span className="float-right text-skin-link">
                    {moment(proposal.startDate).format("MMM DD, YYYY, HH:mm")}
                  </span>
                </div>
                <div>
                  <b>End date</b>
                  <span className="text-skin-link float-right">
                    {moment(proposal.endDate).format("MMM DD, YYYY, HH:mm")}
                  </span>
                </div>
                <div>
                  <b>Snapshot</b>
                  <a
                    href="https://etherscan.io/block/14394206"
                    target="_blank"
                    className="whitespace-nowrap float-right"
                    rel="noopener noreferrer"
                  >
                    14,394,206
                    <i
                      className="iconfont iconexternal-link ml-1"
                      style={{ fontSize: "16px", lineHeight: "16px" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:rounded-xl md:border bg-skin-block-bg border-skin-border text-base">
            <h4
              className="px-4 pt-3 block rounded-t-none md:rounded-t-lg border-y md:border-t-0 border-skin-border"
              style={{ paddingBottom: "12px" }}
            >
              Results
            </h4>
            <div className="p-4 leading-5 sm:leading-6">
              <div className="space-y-3">
                <div>
                  <div className="text-skin-link mb-1 flex justify-between">
                    <div className="flex overflow-hidden">
                      <span className="mr-1 truncate">For</span>
                    </div>
                    <template className="flex justify-end space-x-2"></template>
                  </div>
                  <div className="h-2 relative overflow-hidden rounded-full flex">
                    <div className="w-full h-full bg-[color:var(--border-color)] absolute z-5"></div>
                    <div
                      className="bg-primary h-full z-10"
                      style={{ width: "4.881%" }}
                    ></div>
                    <div
                      className="bg-primary h-full z-10 opacity-80"
                      style={{ width: "94.001%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="text-skin-link mb-1 flex justify-between">
                    <div className="flex overflow-hidden">
                      <span className="mr-1 truncate">Against</span>
                    </div>
                    <template className="flex justify-end space-x-2"></template>
                  </div>
                  <div className="h-2 relative overflow-hidden rounded-full flex">
                    <div className="w-full h-full bg-[color:var(--border-color)] absolute z-5"></div>
                    <div
                      className="bg-primary h-full z-10"
                      style={{ width: "0.619%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="text-skin-link mb-1 flex justify-between">
                    <div className="flex overflow-hidden">
                      <span className="mr-1 truncate">Abstain</span>
                    </div>
                    <template className="flex justify-end space-x-2"></template>
                  </div>
                  <div className="h-2 relative overflow-hidden rounded-full flex">
                    <div className="w-full h-full bg-[color:var(--border-color)] absolute z-5"></div>
                    <div
                      className="bg-primary h-full z-10"
                      style={{ width: "0.499%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
