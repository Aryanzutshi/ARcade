import { spawn, createDataItemSigner, connect } from "@permaweb/aoconnect";

const AOModule = "Do_Uc2Sju_ffp6Ev0AnLVdPtot15rvMjP-a9VVaA5fM";
const AOScheduler = "_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA";
const CommonTags = [
  { name: "App-Name", value: "ARcade" },
  { name: "App-Version", value: "1.0.0" },
  { name: "Platform", value: "Web" },
  { name: "Authority", value: "fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY" },
];

export const spawnProcess = async (name, tags = []) => {
  try {
    const allTags = [...CommonTags, ...tags];
    if (name) {
      allTags.push({ name: "Name", value: name });
    }
    console.log(allTags);
    const processId = await spawn({
      module: AOModule,
      scheduler: AOScheduler,
      signer: createDataItemSigner(globalThis.arweaveWallet),
      tags: allTags,
    });

    console.log("inside Arkit", processId);
    return processId;
  } catch (error) {
    console.error("Error spawning process:", error);
    throw error;
  }
};

export async function runLua({ code, process, tags = [] }) {
  const ao = connect();

  if (tags) {
    tags = [...CommonTags, ...tags];
  } else {
    tags = CommonTags;
  }
  tags = [...tags, { name: "Action", value: "Eval" }];

  const message = await ao.message({
    process,
    data: code,
    signer: createDataItemSigner(globalThis.arweaveWallet),
    tags,
  });

  const result = await ao.result({ process, message });
  result.id = message;
  return result;
}

export async function readHandler({ process, action, tags, data }) {
  const ao = connect();
  const basetags = [{ name: "Action", value: action }];
  if (tags) basetags.push(...tags);
  newData = JSON.stringify(data || {});

  const response = await ao.dryrun({
    process,
    data: newData,
    tags: tags,
  });

  if (response.Messages && response.Messages.length) {
    if (response.Messages[0].Data) {
      return JSON.parse(response.Messages[0].Data);
    } else {
      if (response.Messages[0].Tags) {
        return response.Messages[0].Tags.reduce((acc, item) => {
          acc[item.name] = item.value;
          return acc;
        }, {});
      }
    }
  }
}

export async function connectWallet() {
  try {
    if (!window.arweaveWallet) {
      alert("No Arconnect detected");
      return;
    }
    await window.arweaveWallet.connect(
      ["ACCESS_ADDRESS", "SIGN_TRANSACTION", "ACCESS_TOKENS"],
      {
        name: "ARcade",
        logo: "https://pbs.twimg.com/media/GZiY1bHaAAgMnGQ.jpg",
      },
      {
        host: "g8way.io",
        port: 443,
        protocol: "https",
      }
    );
    console.log("connected");
    return "connected wallet successfully";
  } catch (error) {
    console.error(error);
  } finally {
    console.log("connection finished execution");
  }
}

export async function disconnectWallet() {
  return await window.arweaveWallet.disconnect();
}

export async function getWalletDetails() {
  const walletAddress = await window.arweaveWallet.getActiveAddress();
  const tokens = await window.arweaveWallet.userTokens();
  const tokenId = tokens[0].processId;
  const balance = await window.arweaveWallet.tokenBalance(tokenId);
  return { walletAddress, balance };
}
