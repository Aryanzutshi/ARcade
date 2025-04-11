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
