// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Vault {
    uint8 public count = 0;

    function random() private view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.prevrandao, block.timestamp, count)));        
    }

    function makeMoney() payable public returns (uint){
        uint id = random();
        if (count < 5) {
            count++;
            payable(msg.sender).transfer((msg.value*11)/10);
        }
        else {
            if (id % 8 != 0) {
                payable(msg.sender).transfer((msg.value*11)/10);
            }
        }
        return id;
    }
}
