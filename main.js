var account = null;
        var merkleProof = null;

        var contract = null;
        const abi = [
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "ApprovalForAll",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "burnToken",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "bool",
                        "name": "shouldPause",
                        "type": "bool"
                    }
                ],
                "name": "pause",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    }
                ],
                "name": "publicMintAlpha",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    }
                ],
                "name": "publicMintObsidian",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "ids",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "amounts",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "name": "safeBatchTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "setApprovalForAll",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "newURI",
                        "type": "string"
                    }
                ],
                "name": "setBaseURI",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bool",
                        "name": "shouldStartPublicSale",
                        "type": "bool"
                    }
                ],
                "name": "setPublicSale",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "merkleRoot",
                        "type": "bytes32"
                    }
                ],
                "name": "setWhitelistMerkleRoot",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bool",
                        "name": "shouldStartWhiteListSale",
                        "type": "bool"
                    }
                ],
                "name": "setWhiteListSale",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256[]",
                        "name": "ids",
                        "type": "uint256[]"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256[]",
                        "name": "values",
                        "type": "uint256[]"
                    }
                ],
                "name": "TransferBatch",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "TransferSingle",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "value",
                        "type": "string"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "name": "URI",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32[]",
                        "name": "merkleProof",
                        "type": "bytes32[]"
                    }
                ],
                "name": "whiteListMintAlpha",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32[]",
                        "name": "merkleProof",
                        "type": "bytes32[]"
                    }
                ],
                "name": "whiteListMintObsidian",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "withdraw",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "name": "_numberMinted",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address[]",
                        "name": "accounts",
                        "type": "address[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "ids",
                        "type": "uint256[]"
                    }
                ],
                "name": "balanceOfBatch",
                "outputs": [
                    {
                        "internalType": "uint256[]",
                        "name": "",
                        "type": "uint256[]"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "baseURI",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    }
                ],
                "name": "isApprovedForAll",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "isPublicSale",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "isWhiteListSale",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "mintRate_Alpha",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "mintRate_Obsidian",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "paused",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes4",
                        "name": "interfaceId",
                        "type": "bytes4"
                    }
                ],
                "name": "supportsInterface",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "totalSupply",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "uri",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "whitelistMerkleRoot",
                "outputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ];
        const address = "0x1C3A98a37591f2351960a324c6b439b2AF6e9D8D";

        let WL = [
            "0xF6c7Db82Bb7e6E0CEa903689552DeEEe7cfF3493",
            "0xF6c7Db82Bb7e6E0CEa903689552DeEEe7cfF3493",
            "0xF6c7Db82Bb7e6E0CEa903689552DeEEe7cfF3493", // etc
            "0x2dA86faB578Cf39DEF9903e814a71992c5D0db27",
            "0x2dA86faB578Cf39DEF9903e814a71992c5D0db27",
            "0xeBb8Fe08C21A21FE789764ea005C746267c1c78D"
        ];


        let isPublic = true;
        let isAlpha = true;
        let publicPaused = false;
        let wlPaused = false;    

        let amount = 1;

        let maxAlphaSupply = 5000;
        let maxObsidianSupply = 500;

        const initialise = async () =>{
            console.log("initialised");

            const connectButton = document.getElementById("connectButton");
            const mintButton = document.getElementById("mintButton");
            const mintButton2 = document.getElementById("mintButton2");

            connectButton.addEventListener('click', (e) =>{
                connectWallet();
            });
            connectButton.addEventListener('mouseover', (e) =>{
                connectButton.style.transition = "color 0.5s ease";
                connectButton.style.color = "black";
            });
            connectButton.addEventListener('mouseleave', (e) =>{
                connectButton.style.transition = "color 0.5s ease";
                connectButton.style.color = "white";
            });

            mintButton.addEventListener('mouseover', (e) =>{
                mintButton.style.transition = "color 0.5s ease";
                mintButton.style.color = "black";
            });
            mintButton.addEventListener('mouseleave', (e) =>{
                mintButton.style.transition = "color 0.5s ease";
                mintButton.style.color = "white";
            });
            mintButton2.addEventListener('mouseover', (e) =>{
                mintButton2.style.transition = "color 0.5s ease";
                mintButton2.style.color = "black";
            });
            mintButton2.addEventListener('mouseleave', (e) =>{
                mintButton2.style.transition = "color 0.5s ease";
                mintButton2.style.color = "white";
            });
        }

        const connectWallet = async () =>{
        if(window.ethereum){
            await ethereum.request({method: "eth_requestAccounts"});
            window.web3 = new Web3(window.ethereum);

            var accounts = await web3.eth.getAccounts();
            account = accounts[0];

            contract = new web3.eth.Contract(abi, address);

            connectButton.style.visibility = 'hidden';
            document.getElementById("slogan").style.visibility = "visible";
            document.getElementById("parent").style.visibility = "visible";

            checkIfWL();
			await checkIfPublic();
            await setMintedbar();

            const salesButton = document.getElementById("saleButton");
            const saleType = document.getElementById("saleType");
            salesButton.style.visibility = "visible";
            saleType.style.visibility = "visible";
			if(!wlPaused){
                salesButton.textContent = "Whitelist Sale";
                saleType.textContent = "Whitelist sale is open!";
                isPublic = false;
            }
            if(!publicPaused){
                isPublic = true;
                salesButton.textContent = "Public Sale";
                saleType.textContent = "Public sale is open!";
            }

            if(publicPaused && wlPaused){
                toggleOffButton();
            }
        }
    }

    const increase = () =>{
        amount = 2;
        document.getElementById("amount").textContent = "2X";
        document.getElementById("price").textContent = "0.20";
    }

    const decrease = () =>{
        amount = 1;
        document.getElementById("amount").textContent = "1X";
        document.getElementById("price").textContent = "0.10";
    }


        const findMerkleProof = () =>{
            const leaves = WL.map(x => keccak256(x));
		    const tree = new MerkleTree(leaves, keccak256, {sortPairs: true});
		    const buf2hex = x => '0x' + x.toString('hex');

		    console.log(buf2hex(tree.getRoot()));
		
		    const leaf = keccak256(account);
		    proof = tree.getProof(leaf).map(x => buf2hex(x.data));
        }

        const mintAlpha = async () =>{
            if(isPublic){
                await contract.methods.publicMintAlpha(amount).send({from: account, value: (0.1 * amount * (10**18))});
            }
            else{
                await contract.methods.whiteListMintAlpha(amount, proof).send({from: account, value: (0.1 * amount * (10**18))});
            }
        }

        const mintObsidian = async () =>{
            if(isPublic){
                await contract.methods.publicMintObsidian(1).send({from: account, value: (0.2 * (10**18))});
            }
            else{
                await contract.methods.whiteListMintObsidian(1, proof).send({from: account, value: (0.2 * (10**18))});
            }
        }

        const checkIfWL = async () =>{
            findMerkleProof();

            const wlIsntPaused = await contract.methods.isWhiteListSale().call({from: account});
            const paused = await contract.methods.paused().call({from: account});

            if(proof === null || !wlIsntPaused || paused){
                wlPaused = true;
            }
        }

        const checkIfPublic = async () =>{
            const publicIsntPaused = await contract.methods.isPublicSale().call({from: account});
            const paused = await contract.methods.paused().call({from: account});

            if(paused || !publicIsntPaused){
                publicPaused = true;
            }
        }

        const toggleOffButton = () =>{
            const mintButton = document.getElementById("mintButton");

            mintButton.textContent = "MINT NOT LIVE";
        }

        const toggleOnButton = () =>{
            const mintButton = document.getElementById("mintButton");

            mintButton.textContent = "MINT";
        }

        const configureMintedMessage = async () =>{
            let current;
            let current2;
            let maxSupply;
            let maxSupply2;

                maxSupply = maxAlphaSupply;
                current = await contract.methods.totalSupply(0).call({from: account});

                maxSupply2 = maxObsidianSupply;
                current2 = await contract.methods.totalSupply(1).call({from: account});

            document.getElementById("totalMinted").textContent = `MINTED: ${current}`;
            document.getElementById("remainingMinted").textContent = `REMAINING: ${maxSupply - current}`;
            document.getElementById("totalMinted2").textContent = `MINTED: ${current2}`;
            document.getElementById("remainingMinted2").textContent = `REMAINING: ${maxSupply2 - current2}`;
        }

        const setMintedbar = async() =>{
            let current;
            let current2;
            let maxSupply;
            let maxSupply2;

                maxSupply = maxAlphaSupply;
                current = await contract.methods.totalSupply(0).call({from: account});

                maxSupply2 = maxObsidianSupply;
                current2 = await contract.methods.totalSupply(1).call({from: account});

            let percent = (current / maxSupply) * 100;
            if(percent < 7.5){
                percent = 7.5;
            }
            let percent2 = (current2 / maxSupply2) * 100;
            if(percent2 < 7.5){
                percent2 = 7.5;
            }

            document.getElementById("totalMintedBar").style.width = percent.toString().concat("%");
            document.getElementById("totalMintedBar2").style.width = percent2.toString().concat("%");
            configureMintedMessage();
        }
