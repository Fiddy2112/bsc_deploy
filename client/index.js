const Web3 = require("web3");
const tokenABI = require("./Token.json");

const init = async () => {
  const web3 = new Web3(Web3.givenProvider);

  const contract = new Contract(tokenABI, "address");
  //   use call() No gas costs
  const name = await contract.methods.name().call();
  //   use call() No gas costs
  const symbol = await contract.methods.symbol().call();

  const BeforeBalanceOf = await balanceOf.methods
    .balanceOf("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199")
    .call();

  const transferToken = await transfer(
    "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",
    10000
  )
    .sendTransaction({
      from: "0x2A0142e2133B0cd47cFa6c6FbddA80582152900c",
      value: 10000,
    })
    .then(console.log);

  const AfterBalanceOf = await balanceOf.methods
    .balanceOf("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199")
    .call();

  console.log(name, symbol, BeforeBalanceOf, transferToken, AfterBalanceOf);
  console.log(contract);
};

init();
