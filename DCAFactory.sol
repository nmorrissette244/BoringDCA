// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import "./DCA.sol";

contract DCAFactory {
    // Array of all deployed DCA contracts
    DCA[] public deployedDCA;

    // Map each deployed DCA contract to its owner
    mapping(address => address) public dcaToOwner;

    function createDCA(
        address _token,
        uint256 _amount,
        uint256 _interval,
        uint256 _duration
    ) public {
        DCA newDCA = new DCA(
            _token,
            _amfount,
            _interval,
            _duration,
            msg.sender
        );
        deployedDCA.push(newDCA);
    }
}
