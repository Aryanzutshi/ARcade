import { useEffect, useState } from 'react';

function WalletConnect() {
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    try {
      await window.arweaveWallet.connect(['ACCESS_ADDRESS', 'SIGN_TRANSACTION']);
      const address = await window.arweaveWallet.getActiveAddress();
      setWalletAddress(address);
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  useEffect(() => {
    if (window.arweaveWallet) {
      connectWallet();
    } else {
      console.warn('ArConnect wallet not found');
    }
  }, []);

  return (
    <div>
      {walletAddress ? (
        <p>Connected: {walletAddress}</p>
      ) : (
        <button onClick={connectWallet}>Connect Arweave Wallet</button>
      )}
    </div>
  );
}

export default WalletConnect;