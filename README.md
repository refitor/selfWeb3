# selfweb3

[简体中文][1]

### A web3 solution that provides privatization guarantees for high security and data ownership on the chain. Through mandatory dynamic authorization, one-to-one binding of user assets to itself instead of wallets, webAuthn + TOTP + zero-knowledge proof

## Contract

1. **Arbitrum Goerli, 421613: 0x7B6E05a55B1756f827F205BF454BF75288904ecF**

## Architecture

![/docs/selfweb3.png](/docs/selfweb3.png)

#### Explanation: The public-private key refers to the public-private key pair generated by the elliptic curve secp256k1, the key refers to a 32-bit plaintext string, and dhKey refers to the shared key dynamically calculated through the private key and public key

> - Contract: Decentralized storage, once registered and written, cannot be changed, supports wallet rebinding, relies on user private dynamic authorization, not wallet public and private keys

> - wasm: Provide key synthesis, TOTP verification and email verification services, support manual mode recovery of web2 private key, all operations need to rely on the decryption of web2 ciphertext

> - Backend: web2 service, providing webAuthn authentication, email sending and encrypted data storage and extraction services, no session, no state, only handles ciphertext data

> - TOTP: The TOTP key ciphertext is provided by the web2 service, and the web3 public key is partially decrypted by wasm, and the TOTP key is calculated and decrypted for dynamic verification

> - Email: Wasm is responsible for caching the dynamic verification code and completing the verification, and the web2 service is responsible for sending it

> - Frontend: web2, web3 interactive gateway, all web2 services and web3 dapp entry

## Features

### web3 privatization (selfWeb3)

1. Forcibly bind the operation right on the web3 chain to the user himself, and the ownership of web3 data truly belongs to the user himself

2. Through methods such as webAuthn, TOTP, and email verification, as well as on-chain verification generated by zero-knowledge proof off-chain, it is mandatory to improve the guarantee

3. Due to the mandatory binding of private dynamic authorization, the wallet is only used as a tool to interact with the web3 contract, but by default it also supports off-chain request signature and verification by the on-chain contract, and supports rebinding the wallet after private dynamic authorization

### Privatization of user data ownership (web3 contract)

1. The contract is responsible for storing key ciphertext for dynamic authorization verification, including recovery ID signature (signed with web3 private key, discarded with web3 private key), web3 key ciphertext (encrypted with dhKey), web3 public key ciphertext (web2 public key encryption)

2. Responsible for dynamically verifying user identity and operation legality to confirm rights, including wallet signature verification and zero-knowledge proof chain verification

3. Responsible for providing specific web3 services, including private treasury, private NFT collection and other web3 data of users, etc.

### Privacy and Security Computing (WebAssembly)

1. The wasm part, as a privacy and security computing node, is responsible for processing all plaintext computing tasks and dynamic verification logic. At the same time, all operations rely on the web2 service key that supports self-resetting to support user data privacy and security

2. The legality of the wasm file is temporarily guaranteed by the official, and the follow-up support is that web2 services and web3 contracts will cooperate to complete dynamic verification, including off-chain zero-knowledge proof generation and on-chain dynamic verification

3. The webAuthn data is encrypted and stored by the web2 service with a random key. The decryption of the random key depends on the web3 key on the chain. The key extraction needs to pass the dynamic verification on the chain

4. The web2 service and the wasm part use temporary asymmetric ecdsa key pair to calculate the shared key for point-to-point encrypted communication

### Zero trust web2 service

1. The core code is open source and supports private deployment of services

2. In order to ensure high-strength security, only stateless services related to ciphertext are provided, and there is no session

3. Only maintain web2-related ciphertext data, and cannot access web3 private key and self-set web2 service key

4. As a zero-trust centralized service, it only provides web2-related ciphertext data storage and extraction, webAuthn dynamic authorization, and directional business value-added services based on user ciphertext

## Core business process

### web2 read and write mode

1. Support data reading and writing to web3 contracts and web2 services, and the dynamic verification process needs to pass the associated verification, that is, email -> TOTP -> webAuthn

2. The web2 service key is a random key generated by the backend web2 service. At the same time, you can enter a 32-digit string as the web2 service key, but you need to enter it every time you load the web

3. The web3 public key is encrypted by the web2 public key and stored in the web3 contract, which is used to dynamically calculate and synthesize the dhKey with the web2 private key. Once registered and written into the contract, it cannot be changed

4. The web3 key is encrypted by dhKey and stored in the web3 contract, which is used to encrypt user data and store it in selfWeb3's web2 services, such as webAuthn related data

5. The web2 private key is randomly generated by the wasm part, and is used to dynamically calculate and synthesize the dhKey with the web3 public key, which is encrypted by the web2 service key and copied to the user's mailbox

6. The reset function includes TOTP, web2 service key and user wallet. All reset operations will enable a complete associated verification process to strengthen security protection

7. For dapp business, all related operations that need to be written into the web3 contract require TOTP and webAuthn dynamic verification, and sensitive operations will trigger email verification

### web3 read-only mode

1. The web3 mode is an emergency solution that supports activation when the web2 service is unavailable or there are security risks. It only supports TOTP verification and wallet signature verification of the web3 contract, and does not support all recovery and reset functions.

2. Since there is no web2 service support, users need to enter the web2 private key ciphertext and optional web2 service key (if the web2 service key has been reset by themselves)

3. All dapp services only support read-only web3 contract data

### Self-Host

```shell
git clone https://github.com/refitor/selfweb3.git

cd selfweb3

chmod +x ./build.sh

./build.sh
```

### Usage

```
./selfweb3
```

[1]: /docs/README-zh.md