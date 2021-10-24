import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import LogoImg from "./images/Logo.png";
import BgPattern from "./images/BgPattern.png"

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "./candy-machine";

const ConnectButton = styled(WalletDialogButton)``;

const CounterText = styled.span`

`; // add your styles here

const MainWrapper = styled.div`
  display:flex;
  justify-content:flex-start;
  text-align:center;
  flex-direction:column;
  background-image: url(${BgPattern});
  background-color: #000;
  font-family: 'Press Start 2P', cursive;
  height: 100vh;
`; // add your styles here

const MainContainer = styled.div`
  margin-top: 25px;

`; // add your styles here

const MainH1 = styled.h1`
    color: #fff;
    font-size: 52px;
    text-align: center;
    padding-top: 0px;
    margin: 40px;
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 22px;
    }
`; // add your styles here

const MainH2 = styled.h2`
    color: #fff;
    font-size: 45px;
    text-align: center;
    padding-top: 0px;
    margin: 30px;
    @media screen and (max-width: 768px) {
        font-size: 35px;
    }

    @media screen and (max-width: 480px) {
        font-size: 17px;
    }
`; // add your styles here

const MainH3 = styled.h3``; // add your styles here

const LogoImage = styled.img`
    height: 250px;
    width: 250px;
    margin-bottom: 10px;
`; // add your styles here

const MintContainer = styled.div``; // add your styles here

const MintButton = styled(Button)`
  padding: 50px;

`; // add your styles here

const RoadmapContainer = styled.div`
    height: 5000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;
    background-image: url(${BgPattern});
    color: #000;
    font-family: 'Press Start 2P', cursive;

    @media screen and (max-width: 768px) {
        height: 5400px;
    }

    @media screen and (max-width: 480px) {
        height: 6400px;
    }
    `; // add your styles here

const RoadmapH1 = styled.div`
    font-size: 2.5rem;
    color: #fff;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
    `; // add your styles here
const RoadmapWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 16px;
    padding:0 50px;

    @media screen and (max-width: 1000px) {
    }

    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }

    @media screen and (max-width: 480px) {
      padding: 0 40px;
    }
    `; // add your styles here

const RoadmapTitleCard2 = styled.div`
 background: gray;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* max-height: 340px; */
    min-width: 250px;
    margin: 20px;
    margin-bottom: 0px;

    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
`; // add your styles here

const RoadmapH2 = styled.div`
    font-size: 1rem;
    margin: 10px;
    text-align: left;
    `; // add your styles here

const RoadmapCard2 = styled.div`
 background: gray;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* max-height: 340px; */
    min-width: 350px;
    padding: 30px;
    margin-bottom: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    `; // add your styles here

const RoadmapP = styled.div`
 font-size: 0.7rem;
    text-align: left;
    text-decoration: none;
    line-height: 20px
`; // add your styles here

const RoadmapTitleCard = styled.div`
background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* max-height: 340px; */
    min-width: 250px;
    margin: 20px;
    margin-bottom: 0px;

    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
    `; // add your styles here

const SiteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`; // add your styles here
    
const RoadmapCard = styled.div`
background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* max-height: 340px; */
    min-width: 350px;
    padding: 30px;
    margin-bottom: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
    `; // add your styles here

const FAQContainer = styled.div`
height: 3700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;
    background-image: url(${BgPattern});
    color: #000;
    font-family: 'Press Start 2P', cursive;

    @media screen and (max-width: 768px) {
        height: 4000px;
    }

    @media screen and (max-width: 480px) {
        height: 5400px;
    }
`; // add your styles here

const FAQH1 = styled.div`
    font-size: 2.5rem;
    color: #fff;
    margin-top: 100px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`; // add your styles here

const FAQWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    padding:0 50px;
    margin-top: 25px;

    @media screen and (max-width: 1000px) {
    }

    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }
`; // add your styles here

const FAQTitleCard = styled.div`
    background: #fff;
    display: flex;
    margin-bottom: 0px;
    padding: 20px;
    width: 850px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);

`; // add your styles here

const FAQH2 = styled.div`
    font-size: 1rem;
    margin: 10px;
    text-align: left;
`; // add your styles here

const FAQCard = styled.div`
    background: #fff;
    padding: 20px;
    margin-bottom: 20px;
    width: 850px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);

`; // add your styles here

const FAQP = styled.div`
    font-size: 0.7rem;
    text-align: left;
    text-decoration: none;
    line-height: 20px
`; // add your styles here

const FooterContainer = styled.div`
   bottom:0;
   width:100%;
   height:100px;
   background:#000;
   display:flex;
   justify-content: center;
   flex-direction: row;
`;

const SocialLink = styled.a`
    color: #fff;
    text-decoration: none;
    margin: 20px;
    padding: 5px;
    font-family: 'Press Start 2P', cursive;
    font-size: 1.2rem;

    &:hover{
      color: orange;
    }

    @media screen and (max-width: 768px) {
      font-size: 0.7rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 0.7rem;
    }
    
`;

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Home = (props: HomeProps) => {
  const [balance, setBalance] = useState<number>();
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  // compare start date and current date to decide display mint button or countdown
  const [startDate, setStartDate] = useState(new Date(props.startDate));
  const isLive = useMemo(() => startDate <= new Date(), [startDate]);

  const [itemsAvailable, setItemsAvailable] = useState(0);
  const [itemsRedeemed, setItemsRedeemed] = useState(0);
  const [itemsRemaining, setItemsRemaining] = useState(0);

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const wallet = useAnchorWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return;

      const {
        candyMachine,
        goLiveDate,
        itemsAvailable,
        itemsRemaining,
        itemsRedeemed,
      } = await getCandyMachineState(
        wallet as anchor.Wallet,
        props.candyMachineId,
        props.connection
      );

      setItemsAvailable(itemsAvailable);
      setItemsRemaining(itemsRemaining);
      setItemsRedeemed(itemsRedeemed);

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  };

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
      refreshCandyMachineState();
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(refreshCandyMachineState, [
    wallet,
    props.candyMachineId,
    props.connection,
  ]);

  return (
    <main>
    <SiteWrapper>
        <MainWrapper>
<MainH1>🎃 Sol O' Lanterns 🎃</MainH1>
<MainContainer>
<LogoImage src={LogoImg} />
<MainH2>Mint Price 0.2 SOL</MainH2>
<MainH3>{wallet && <p>{startDate.toUTCString()}</p>}</MainH3>

    {wallet && <p>{itemsRedeemed} / {itemsAvailable}</p>}

      <MintContainer>
        {!wallet ? (
          <ConnectButton>Connect Wallet</ConnectButton>
        ) : (
          <MintButton
            disabled={isSoldOut || isMinting || !isLive}
            onClick={onMint}
            variant="contained"
          >
            {isSoldOut ? (
              "SOLD OUT"
            ) : isLive ? (
              isMinting ? (
                <CircularProgress />
              ) : (
                "MINT"
              )
            ) : (
              <Countdown
                date={startDate}
                onComplete={() => refreshCandyMachineState()}
                renderer={renderCounter}
              />
            )}
          </MintButton>
        )}
        <MainH2>👇 RoadMap & FAQ 👇</MainH2>
      </MintContainer>
      </MainContainer>
      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
      </MainWrapper>
      <RoadmapContainer>
            <RoadmapH1>RoadMap</RoadmapH1>
            <RoadmapWrapper>
                <RoadmapTitleCard2><RoadmapH2>0% Introduction!</RoadmapH2></RoadmapTitleCard2>
            <RoadmapCard2>
                <RoadmapP>We are going to advertise our project on various media platforms and collaborate with various influencers to start the Sol O’ Lanterns hype! Get ready for spooktober!</RoadmapP>
            </RoadmapCard2>
                <RoadmapTitleCard2><RoadmapH2>25% Giveaways & Contests</RoadmapH2></RoadmapTitleCard2>
            <RoadmapCard2>
                <RoadmapP>We will be distributing some Sol O’ Lanterns NFT’s with giveaways, arrange contests and events on our social media channels. We are insistent on building a spooky family and creating a unique community where everybody is part of the Sol O’ Lanterns community whether they own NFT or not. Contest winners will be announced one week earlier from launch, Giveaway winners will be announced at the appointed times and get their NFT’s on launch day with everybody else for fair distribution.</RoadmapP>
            </RoadmapCard2>
            <RoadmapTitleCard2><RoadmapH2>35% PRESALE! [22.10.2021 7PM UTC]</RoadmapH2></RoadmapTitleCard2>
            <RoadmapCard2>
                <RoadmapP>We are going to reserve 333 Sol O' Lanterns for presale. It will be first come first served.
                <br />We will create a unique Horror House collection for presale buyers limited to 333 and airdrop them.</RoadmapP>
            </RoadmapCard2>
            <RoadmapTitleCard><RoadmapH2>40% Launch! [23.10.2021  7PM UTC]</RoadmapH2></RoadmapTitleCard>
            <RoadmapCard>
                <RoadmapP>We will be launching our NFT’s for sale on our website soon after you can buy/sell Sol O’ Lanterns NFT’s at Digital Eyes Marketplace. We are also working on partnering up with other marketplaces at the moment. We are willing to work continuously to make sure that our community succeeds!</RoadmapP>
            </RoadmapCard>
            <RoadmapTitleCard><RoadmapH2>45% 2310$ Giveaway</RoadmapH2></RoadmapTitleCard>
            <RoadmapCard>
                <RoadmapP>We want to giveaway 2310$ to 1 lucky Sol O' Lanterns minter, we want to make minting a Sol O' Lanterns NFT as rewarding as possible. Minters do not have to sign a form or join a special channel. Winner of the raffle will be announced as soon as the minting finishes.</RoadmapP>
            </RoadmapCard>
            <RoadmapTitleCard><RoadmapH2>50% Pumpkin carving event!</RoadmapH2></RoadmapTitleCard>
            <RoadmapCard>
                <RoadmapP>As Halloween approaches we would like to organize a pumpkin carving event and see the pumpkins that our community carves! Best pumpkins will get a NFT and more.</RoadmapP>
            </RoadmapCard>
            <RoadmapTitleCard><RoadmapH2>55% The best look on the metaverse!</RoadmapH2></RoadmapTitleCard>
            <RoadmapCard>
                <RoadmapP>We will throw a costume contest between 31.10.2021–1.11.2021. The best costume our team choses will get a 3SOL prize.</RoadmapP>
            </RoadmapCard>
            <RoadmapTitleCard><RoadmapH2>75% More NFT’s</RoadmapH2></RoadmapTitleCard>
            <RoadmapCard>
                <RoadmapP>This years trick or treat is nothing like you have seen before. We will be airdropping our NFT holders at 31.10.2021 some candy NFTs that has it’s own rarities they will drop randomly, for every Sol O’Lanterns NFT you hold, you will get a “Sol O’ Lanterns Candy” NFT.
                    <br />In addition to Sol O’ Lanterns we have plans to create other seasonal NFTs as a team. Our NFT holders will be airdropped these new NFTs so there is even more reason to hold Sol O’ Lanterns NFTs and be a part of the community.</RoadmapP>
            </RoadmapCard>
            <RoadmapTitleCard><RoadmapH2>90% PUMPKIN DAO CONSTRUCTION</RoadmapH2></RoadmapTitleCard>
            <RoadmapCard>
                <RoadmapP>We will create a "Decentralized Autonomous Organization" (DAO) and use the 5% of the sales income to buy Sol O' Lanterns, burn them and make the collection more valuable to every holder. All the money saved from royalties will stay at pumpkin patch and used with peoples votes.</RoadmapP>
            </RoadmapCard>
            <RoadmapTitleCard><RoadmapH2>100% Going on a trip!</RoadmapH2></RoadmapTitleCard>
            <RoadmapCard>
                <RoadmapP>We are taking 1 lucky holder on a Transylvania trip! 
                        <br />Have you wondered where did our golden boy COUNT DRACULA lived? If you have, now you have a chance to learn all about it and visit by yourself!
                        <br />By holding a Sol O' Lanterns NFT you get the chance to visit Romania/Transylvania ! 
                        <br />Winner will be choosen randomly with live proofs. All the main expanses (staying, transportation, insurance etc.) will be covered by our own team earnings. Winner can set the date of his/her vacation.
                        <br />Tour will include famous places like Castelul Corvinilor, movie festivals and many more events.
                        <br />Further info will be given at the time of event.
                            </RoadmapP>
            </RoadmapCard>
            </RoadmapWrapper>

            <FAQH1>FAQ</FAQH1>
            <FAQWrapper>
            <FAQTitleCard><FAQH2>How many Sol O' Lanterns NFTs will there be available to purchase? </FAQH2></FAQTitleCard>
            <FAQCard>
                <FAQP>3333!</FAQP>
            </FAQCard>
            </FAQWrapper>
            <FAQWrapper>
            <FAQTitleCard><FAQH2>How much will it cost to mint one Sol O' Lanterns NFT? </FAQH2></FAQTitleCard>
            <FAQCard>
                <FAQP>0.2SOL</FAQP>
            </FAQCard>
            </FAQWrapper>
            <FAQWrapper>
            <FAQTitleCard><FAQH2>When will I be able to mint Sol O' NFTs?  </FAQH2></FAQTitleCard>
            <FAQCard>
                <FAQP>Sol O' Lanterns are going to be available at 24.10.2021</FAQP>
            </FAQCard>
            </FAQWrapper>
            <FAQWrapper>
            <FAQTitleCard><FAQH2>Is there a limit to how many I can mint?  </FAQH2></FAQTitleCard>
            <FAQCard>
                <FAQP>1 per transaction.</FAQP>
            </FAQCard>
            </FAQWrapper>
            <FAQWrapper>
            <FAQTitleCard><FAQH2>Can I mint Sol O' Lanterns NFTs from my phone?  </FAQH2></FAQTitleCard>
            <FAQCard>
                <FAQP>Yes, you can! If you are using "Sollet".</FAQP>
            </FAQCard>
            </FAQWrapper>
            <FAQWrapper>
            <FAQTitleCard><FAQH2>Where can I sell my Sol O' Lanterns NFTs? </FAQH2></FAQTitleCard>
            <FAQCard>
                <FAQP>We are FTX approved you can sell your NFTs at FTX NFT Martketplace and also you can easily sell your NFTs at Digital Eyes Marketplace, Grail Marketplace and Magic Eden when our public mint ends.</FAQP>
            </FAQCard>
            </FAQWrapper>    
        </RoadmapContainer>
        <FooterContainer>
        <SocialLink href="https://discord.com/invite/mSyJt5FV3a">
        Discord
        </SocialLink>
        <SocialLink href="https://twitter.com/SolOLanterns">
        Twitter
        </SocialLink>
        </FooterContainer>
        </SiteWrapper> 
    </main>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CounterText>
      {hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};

export default Home;
