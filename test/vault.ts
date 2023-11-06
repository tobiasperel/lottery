import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Vault", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployContract() {
    
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Vault = await ethers.getContractFactory("Vault");
    const vault = await Vault.deploy();
    return {vault, owner, otherAccount };
  }

  it("call random function", async function () {
    const { vault, owner, otherAccount } = await loadFixture(deployContract);
    console.log(await vault.connect(owner).random())
  } );

  it("play an ether", async function () {
    const { vault, owner, otherAccount } = await loadFixture(deployContract);
    console.log(await vault.connect(owner).makeMoney())
  } );

});