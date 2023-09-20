//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

library SelfValidator {
    using ECDSA for bytes32;
    using SafeMath for uint256;

    struct VerifyParam {
        uint256[] kindList;         // 1: web2Address, 2: selfAddress
        bytes[] sigList;            // Signature list for on-chain verification.
        bytes[] msgList;            // Message list for on-chain verification, 0: message, 1: signature.
        bytes32[][] proofs;         // The proof list of merkleTree for on-chain associated validation.
    }

    /**
     * @dev _verify is used to verify the signature.
     * @param signature signature signed by the web3 user.
     * @param message random string dynamically generated by the front end.
     */
    function WalletVerify(bytes memory signature, bytes memory message) pure internal returns (address) {
        return _sigVerify(signature, message);
    }

    /**
     * @dev RelateVerify is used to the on-chain associated verification.
     * @param verifyRoot The root of merkleTree for on-chain associated validation.
     * @param vparam Used for on-chain signature verification.
     * @param sigAddrList signature address list, 0: selfAddress, 1: web2Address.
     */
    function RelateVerify(bytes32 verifyRoot, bytes memory vparam, address[] memory sigAddrList) pure internal returns (bytes32) {
        require(sigAddrList.length > 0, "invalid signature list for on-chain multi-party signature verification");
        
        // multi-party signature on-chain verification
        VerifyParam memory vp = abi.decode(vparam, (VerifyParam));
        if (vp.proofs.length > 0) {
            require(sigAddrList.length == vp.proofs.length, "On-chain associated verification failed: invalid merkleTree proofs size");
        }
        require(sigAddrList.length == vp.kindList.length, "on-chain multi-party signature verification failed: invalid kindList size");
        require(sigAddrList.length == vp.msgList.length, "on-chain multi-party signature verification failed: invalid msgList size");
        require(sigAddrList.length == vp.sigList.length, "on-chain multi-party signature verification failed: invalid sigList size");
        for (uint256 i = 0; i < sigAddrList.length; i++) {
            if (vp.kindList[i] == 1 ) require(_relateSigVerify(vp.sigList[i], vp.msgList[i]) == sigAddrList[i], "on-chain multi-party signature verification failed: selfAddress");
            if (vp.kindList[i] == 2) require(_relateSigVerify(vp.sigList[i], vp.msgList[i]) == sigAddrList[i], "on-chain multi-party signature verification failed: web2Address");

            // MerkleTree on-chain associated verificaiton
            if (i < vp.proofs.length) {
                bytes32 leaf = keccak256(bytes.concat(keccak256(abi.encode(vp.msgList[i]))));
                require(MerkleProof.verify(vp.proofs[i], verifyRoot, leaf) == false, "On-chain associated verification failed: permission denied");
                verifyRoot = MerkleProof.processProof(vp.proofs[i], verifyRoot);
            }
        }
        return verifyRoot;
    }

    /**
     * @dev _verify is used to verify the signature.
     * @param signature signature signed by the web3 user.
     * @param message random string dynamically generated by the front end.
     */
    function _sigVerify(bytes memory signature, bytes memory message) pure private returns (address) {
        // need to hardcode exactly how the types in the signTypedData are
        bytes32 typeHash = keccak256(abi.encodePacked('string Action'));
        bytes32 valueHash = keccak256(abi.encodePacked(message));
        return keccak256(abi.encode(typeHash, valueHash)).recover(signature);
    }


    /**
     * @dev _verify is used to verify the signature.
     * @param signature signature signed by the web3 user.
     * @param message random string dynamically generated by the front end.
     */
    function _relateSigVerify(bytes memory signature, bytes memory message) pure private returns (address) {
        return keccak256(abi.encodePacked(message)).recover(signature);
    }
}