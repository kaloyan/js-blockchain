import { Blockchain, Transaction } from "./blockchain/blockchain.js";
import Elliptic from "elliptic";
import "./App.css";

// elliptic curve function
const ec = new Elliptic.ec("secp256k1");

const myKey = ec.keyFromPrivate(
  "b5427839607c42d9791ebde44b61bc9f8c8ce296e009a625e865cd0e168576ce"
);
const myWalletAddress = myKey.getPublic("hex");

const randomWallet =
  "04995c542f4d00f2ac48595be67e42817d964836c0da4bc046a56c49f3dc655647f70951eff4a3ef91e15c47ab7f79a26694f54b64f15f3e120b9567bfa02fc906";

const myCoin = new Blockchain();

function App() {
  return (
    <div className="App">
      <span>wallet: {myWalletAddress}</span>
    </div>
  );
}

export default App;
