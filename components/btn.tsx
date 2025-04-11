"use client";

import { spawnProcess } from "@/utils/arKit";

export function StartChallengeButton() {
  async function spn() {
    const processId = await spawnProcess("Test1", [
      { name: "Action", value: "create-project" },
    ]);
    console.log(processId);
  }
  return (
    <button
      onClick={spn}
      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded"
    >
      Start Challenge
    </button>
  );
}
