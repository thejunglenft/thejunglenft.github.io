import { Button, Tag, TagLabel } from "@chakra-ui/react";
import { ConnectWalletButton } from "@gokiprotocol/walletkit";
import { useSolana } from "@saberhq/use-solana";
import { shortAddress } from "utils";

import useCollection from "../../hooks/useJungle";
import constants from "../../constants";


const WalletButton: React.FC = () => {
  const { connected, publicKey, disconnect } = useSolana()
  const { userAccount } = useCollection();

  return (
    <>
      {connected ? (
        <>
          {userAccount && (
            <Tag size="lg" variant="subtle" colorScheme="cyan">
              <TagLabel>
                {(userAccount.amount.toNumber() / 10 ** 9).toFixed(2)} ${constants.ticker}
              </TagLabel>
            </Tag>
          )}
          <Button onClick={disconnect}>
            {shortAddress(publicKey?.toString())}
          </Button>
        </>
      ) : (
        <ConnectWalletButton />
      )}
    </>
  );
};

export default WalletButton;
