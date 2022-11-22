# Tribunals

Tribunals is a decentralized NFT-based voting system for DAOs. DAOs can issue NFTs to wallets based on what matters to their community and the holders of these NFTs can create proposals and vote on these proposals whilst they have the NFTs of that tribunal.
Users don't have to pay gas to participate in DAO governance.

During the **EthSafari hackathon** 
- Support for Metis Georli testnet was added.

During the **EthSafari hackathon** 
- Coinbase wallet signup was integrated. 
- Worldcoin human verification was added to the "Join a tribunal" page to allow only real humans mint NFTs and join Tribunals.
- Votes are uploaded to IPFS with the most recent vote linking to one before. This is done by storing the previous vote's CID in the file of the newest one. Therefore a chain of verifiable data is created.


## Tech Stack

The app was built with IPFS, Coinbase SDK, WorldCoin SDK, Moralis, Polygon Mainnet, Vercel, React, Web3.storage e.t.c


## How Tribunals work

 - DAOs or Organisations create a **tribunal** on the app. 
 - Users can join a tribunal by minting an NFT of that tribunal
 - Users that have a certain tribunal's NFT are eligible to create proposals and vote on them. 
 - Voting is gasless and the vote is stored on IPFS
 
