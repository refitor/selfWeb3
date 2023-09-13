#selfweb3

[简体中文][1]

### A web3 solution that provides privatized guarantees for high security and data ownership on the chain. By forcing dynamic authorization, user assets are bound to themselves one-to-one instead of wallets, zero-knowledge proof + webAuthn + TOTP + Associated verification

![/docs/selfweb3.png](/docs/selfweb3.png)

## Contract

1. **Arbitrum Goerli, 421613: 0x7B6E05a55B1756f827F205BF454BF75288904ecF**

## Architecture

### Principle: The web3 contract, the wasm part and the web2 service are each responsible for specific tasks. The three parties restrict each other to ensure decentralized operation while providing highly secure privacy protection.

![/docs/selfweb3-arch.png](/docs/selfweb3-arch.png)

#### Description: The public and private key refers to the public and private key pair generated by elliptic curve secp256k1, the key refers to the 32-bit plaintext string, and dhKey refers to the shared key dynamically calculated through the private key and public key.

> - Contract: decentralized storage. Once registered and written, it cannot be changed. It supports wallet rebinding and relies on user private dynamic authorization instead of wallet public and private keys.

> - wasm: Provides key synthesis, TOTP verification and email verification services, and supports off-chain implementation of the associated verification mechanism. All operations need to rely on the decrypted wasm ciphertext.

> - Backend: web2 service, providing directed value-added services such as web2 request forwarding, correlation management, and encrypted data storage and retrieval, no session, stateless, only processing ciphertext data

> - TOTP: The web2 service provides the TOTP key ciphertext, the web3 contract provides the web3 public key ciphertext, and the wasm part calculates and decrypts the TOTP key for dynamic verification.

> - WebAuthn: The web2 service provides the WebAuthn key ciphertext. The web3 contract provides the web3 key ciphertext. After the wasm part is decrypted, the web2 service completes the authorization verification.

> - Email: The wasm part is responsible for caching the dynamic verification code and completing the verification, and the web2 service is responsible for sending it.

> - Front end: web2, web3 interactive gateway, all web2 services and web3 dapp entrance

## Features

### Associated verification (off-chain associated verification path generation + off-chain signature generation + on-chain dynamic verification):

1. Implementation purpose: Mandatory verification of the validity of associated dynamic authorization on the chain. Sensitive operations can be completed on the chain only if all signatures are verified. At the same time, the validity of leaf nodes is verified through the Merkel tree to prevent replay attacks.
2. Implementation method: The web2 service manages the Merkle tree for dynamic verification on the chain and dynamically generates signatures for guarantee. The wasm part generates random numbers and signatures through private keys to ensure private operations. The web3 contract is responsible for verifying all signatures and Merkle Repeatability of tree leaf nodes
3. Implementation principle: The web2 service and the wasm part generate dynamic random numbers respectively, add the existing Merkle tree and generate the corresponding proof. At the same time, the two parts use their respective private keys to sign the random numbers, and all parameters are packaged and sent. The contract performs signature verification and random number validity verification
4. Replay attacks: In order to prevent replay attacks, all random numbers are generated in the wasm part and are incremented at each verification. At the same time, verify whether the leaf node is valid in the web3 contract to prove whether the verification is repeated. After the verification is passed Rebuild the Merkle tree and update the root node hash value

### web3 privatization (selfWeb3)

1. Forcibly bind the operation rights on the web3 chain to the users themselves, and the ownership of web3 data truly belongs to the users themselves.

2. Improve mandatory protection through methods such as webAuthn, TOTP and email verification, as well as the associated verification mechanism that generates on-chain verification from off-chain

3. Due to the mandatory binding of private dynamic authorization, the wallet only serves as a tool to interact with web3 contracts, but by default it also supports off-chain request signatures and is verified by on-chain contracts, and supports rebinding the wallet after private dynamic authorization.

### Privatization of user data ownership (web3 contract)

1. The contract is responsible for storing the key ciphertext used for dynamic authorization verification, including recovery ID signature (web3 private key signature, web3 private key discard), web3 key ciphertext (dhKey encryption), web3 public key ciphertext (web2 public key encryption)

2. Responsible for dynamically verifying user identity and operation legality to confirm authority, including wallet signature verification, wasm signature verification, web2 service signature verification, etc.

3. Responsible for providing specific web3 services, including private vaults, private NFT sets and other user web3 data, etc.

### Privacy and Security Computing (WebAssembly)

1. The wasm part serves as a privacy and security computing node, responsible for processing all plaintext computing tasks and dynamic verification logic. At the same time, all operations rely on the web2 service key that supports self-reset to support user data privacy and security.

2. The legality of the wasm file is guaranteed by the on-chain contract, including the wasm partial plaintext storage file hash value and the corresponding signature, providing the wasm address when deploying, and requesting the on-chain contract to verify the legality of the signature when loading.

3. The webAuthn data is encrypted and stored by the wasm part using a random key. The random key decryption relies on the web3 key on the chain. The key extraction requires TOTP dynamic authorization and associated verification.

4. The web2 service and the wasm part use a temporary asymmetric ecdsa key pair to calculate the shared key for point-to-point encrypted communication.

### Zero trust web2 service

1. The core code is open source and supports private deployment of services.

2. In order to ensure high-strength security, only stateless services related to ciphertext are provided, without sessions.

3. Only acts as a centralized node to improve user experience. After the user ciphertext data is stored in IPFS, it is also stored in the web2 service for fast retrieval.

4. As a zero-trust centralized service, it provides targeted value-added services such as web2 request forwarding (such as email sending), authorization correlation management, and encrypted data storage and retrieval.

## Privatized dynamic authorization

> - web3 SSO: Powered by Sismo Connect, does not participate in associated verification, and generates zero-knowledge proof off-chain to verify user identity legitimacy on-chain.

> - WebAuthn: Provides credential ciphertext support by web2 services and ceramic stores, participates in associated verification, and verifies the validity of dynamic authorization on the chain

> - Email: wasm is responsible for caching the dynamic verification code and completing the verification, the web2 service is responsible for sending it, participating in the associated verification, and the dynamic authorization validity is verified on the chain

> - TOTP: The web3 public key is partially decrypted by wasm, the TOTP key is calculated and decrypted, and then dynamically verified, participates in associated verification, and verifies the validity of dynamic authorization on the chain.

## Associated verification process

> - Deployment process: web2 service generates public and private keys, deploys web3 contract and provides web2 service address

> - Registration process: wasm partial initialization random number and step size -> web requests web2 service to initialize Merkel tree

> - Dapp operation (on-chain query): web starts the dynamic authorization process -> wasm part completes dynamic verification -> wasm part encrypts random numbers and signs -> web requests web2 service for signature (optional) -> web requests on-chain contract Verify the signature -> wasm partially obtains the ciphertext and decrypt it using the private key -> wasm partially decrypts and performs off-chain data matching verification

> - dapp operation (on-chain update): web starts the dynamic authorization process -> wasm part completes dynamic verification -> wasm part generates random numbers and signs -> web requests web2 service to obtain signature and Merkel tree certificate -> web request The contract on the chain verifies signatures and certificates -> the contract verifies whether all signatures are legal, and then verifies whether the random numbers are legal through the Merkle tree -> verification is successful, updates the hash of the Merkle tree -> updates the contract status

> - Process description: If web3 mode is turned on, dynamic signatures cannot be obtained due to the lack of web2 service support. In order to ensure the high security of sensitive operations on the chain, the web3 contract will mandatoryly verify the signatures of the two parts for the updated operations on the chain. The validity of the Merkel tree leaf nodes, the signature verification of the web2 service is introduced to strengthen the security of the associated verification through the signatures of the web2 service and the wasm part. At the same time, only the wasm part can obtain the user's private key and data. , prevent illegal passage of associated verification by generating dynamic random numbers and signing them.

## Core business process

> - Supports privatized web3 business process operations after all dynamic verifications such as wallet signature, private dynamic authorization, associated verification, etc.

### web2 mode

1. The initialization process needs to first complete the signature verification of the web2 service on the chain contract and the decryption of the wasm file, otherwise no data in the contract can be queried and updated.

2. Support data reading and writing to web3 contracts and web2 services. The private dynamic authorization process requires associated verification, that is, web3 SSO -> email -> TOTP -> webAuthn

3. The web2 service key is a random key generated by the back-end web2 service. It also supports inputting a 32-bit string as the web2 service key, but it needs to be entered every time the web is loaded.

4. The web3 public key is encrypted by the web2 public key and stored in the web3 contract. It is used to dynamically calculate and synthesize dhKey with the web2 private key. Once registered and written into the contract, it cannot be changed.

5. The web3 key is encrypted by dhKey and stored in the web3 contract. It is used to encrypt user data and store it in IPFS and web2 services, such as webAuthn related data.

6. The web2 private key is randomly generated by the wasm part and used to dynamically calculate and synthesize the dhKey with the web3 public key. It is encrypted by the web2 service key and copied to the user's mailbox.

7. The reset function includes TOTP, web2 service keys and user wallets. All reset operations will enable a complete associated verification process to strengthen security protection.

8. For dapp business, all related operations that need to be written into the web3 contract require TOTP and webAuthn dynamic verification. Sensitive operations will trigger email verification.

### web3 mode

1. The initialization process needs to first complete the signature verification of the web2 service on the chain contract and the decryption of the wasm file, otherwise no data in the contract can be queried and updated.

2. Supports reading and writing data to web3 contracts and ceramic stores. The private dynamic authorization process requires associated verification, that is, web3 SSO -> TOTP -> webAuthn

3. The web2 service only serves as a centralized node to improve user experience. If the user chooses not to use it or the service fails, the user's ciphertext will be extracted from the ceramic stor.

4. Since there is no web2 service support, you need to enter the web2 private key ciphertext and web2 service key by yourself (if you have reset the web2 service key by yourself)

5. Since there is no support for the web2 service, the email verification function will be temporarily limited, but it will not affect the normal operation of the web3 business.

6. Registration, associated verification for sensitive operations, and all recovery reset functions are not supported

### Private deployment

```shell
git clone https://github.com/refitor/selfweb3.git

cd selfweb3

chmod +x ./build.sh

./build.sh
```

### use

```
./selfweb3
```

[1]: /docs/README-zh.md