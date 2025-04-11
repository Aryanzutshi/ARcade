'use client';

import { spawnProcess } from "@/utils/arKit"

export function StartChallengeButton() {
  return (
    <button
      onClick={spawnProcess}
      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded"
    >
      Start Challenge
    </button>
  );
}
