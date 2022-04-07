import React from 'react'

const Proposal = () => {
  return (
    <div className="md:rounded-xl md:border bg-skin-block-bg border-skin-border text-base transition-colors md:hover:border-skin-text border-b first:border-t">
      <div className="leading-5 sm:leading-6">
        <a
          href="#/ens.eth/proposal/0xfe73d1b06675d6bc1cc074f440c347274d13c55b513ea02ec950efe639adbbb0"
          className="p-3 sm:p-4 block text-skin-text"
        >
          <div>
            <div className="mb-2 flex justify-between items-center">
              <div className="flex items-center space-x-1">
                <span className="inline-block align-middle leading-none">
                  <span className="flex shrink-0 items-center justify-center">
                    <img
                      src="https://worker.snapshot.org/mirror?img=https%3A%2F%2Fcloudflare-ipfs.com%2Fipfs%2FQmSL2X1h1uk26ahSALTw2qKyc61VaySRRstueVMm1Aym3e"
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
                <span className="!ml-2 hidden xs:block">ENS</span>
                <span>by </span>
                <span>
                  <div>
                    <a className="flex flex-nowrap">
                      <span className="truncate w-full">fireeyesdao.eth</span>
                    </a>
                  </div>
                  <div
                    className="z-50 min-w-[300px] bg-skin-header-bg border border-skin-border rounded-xl shadow-lg"
                    data-popper-placement="top-start"
                    data-popper-reference-hidden=""
                    data-popper-escaped=""
                    style={{
                      display: "none",
                      position: "absolute",
                      inset: "auto auto 0px 0px",
                      margin: "0px",
                      transform: "translate3d(531px, 3752px, 0px",
                    }}
                  >
                    <div className="m-4 mb-0 text-center">
                      <span className="flex shrink-0 items-center justify-center mb-4">
                        <img
                          src="https://stamp.fyi/avatar/eth:0x5BFCB4BE4d7B43437d5A0c57E908c048a4418390?s=128"
                          className="rounded-full bg-[color:var(--border-color)]"
                          style={{
                            width: "64px",
                            height: "64px",
                            minWidth: "64px",
                          }}
                        />
                      </span>
                      <h3 className="mt-3">fireeyesdao.eth</h3>
                    </div>
                    <div className="m-4">
                      <a
                        href="https://etherscan.io/address/0x5BFCB4BE4d7B43437d5A0c57E908c048a4418390"
                        target="_blank"
                        className="mb-2 block"
                      >
                        <button
                          type="button"
                          className="button px-[24px] button-outline w-full"
                          data-v-1b931a55=""
                        >
                          See on explorer{" "}
                          <i
                            className="iconfont iconexternal-link ml-1"
                            style={{
                              fontSize: "16px",
                              lineHeight: "16px",
                            }}
                          ></i>
                        </button>
                      </a>
                    </div>
                  </div>
                </span>
              </div>
              <span
                className="bg-violet-600 State text-white"
                data-v-3f2f3e1e=""
              >
                Closed
              </span>
            </div>
            <h3 className="my-1 leading-7 break-words">
              [Social] Proposal: Transfer ENS Treasury and Contract Ownership
            </h3>
            <p className="break-words mb-2 sm:text-md">
              Summary Transfer ENS treasury and contract ownership from the ENS
              Multisig to ENS DAO. Abstract With the recent launch of the ENS
              DAO and $...
            </p>
            <div>
              <span className="mt-2 flex space-x-1 items-center">
                <i
                  className="iconfont iconcheck1 text-green"
                  style={{ fontSize: "20px", lineHeight: "20px" }}
                ></i>
                <span>1. Transfer Treasury - 4.8M ENS</span>
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Proposal