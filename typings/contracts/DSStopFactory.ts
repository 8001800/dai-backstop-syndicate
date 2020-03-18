/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { DSStop } from "./DSStop";

export class DSStopFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(): Promise<DSStop> {
    return super.deploy() as Promise<DSStop>;
  }
  getDeployTransaction(): UnsignedTransaction {
    return super.getDeployTransaction();
  }
  attach(address: string): DSStop {
    return super.attach(address) as DSStop;
  }
  connect(signer: Signer): DSStopFactory {
    return super.connect(signer) as DSStopFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DSStop {
    return new Contract(address, _abi, signerOrProvider) as DSStop;
  }
}

const _abi = [
  {
    anonymous: true,
    inputs: [
      {
        indexed: true,
        internalType: "bytes4",
        name: "sig",
        type: "bytes4"
      },
      {
        indexed: true,
        internalType: "address",
        name: "guy",
        type: "address"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "foo",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "bar",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "fax",
        type: "bytes"
      }
    ],
    name: "LogNote",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "authority",
        type: "address"
      }
    ],
    name: "LogSetAuthority",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "LogSetOwner",
    type: "event"
  },
  {
    constant: true,
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "contract DSAuthority",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "contract DSAuthority",
        name: "authority_",
        type: "address"
      }
    ],
    name: "setAuthority",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address"
      }
    ],
    name: "setOwner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "stopped",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "stop",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "start",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  }
];

const _bytecode =
  "0x60806040819052600180546001600160a01b03191633908117909155907fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a26104aa806100516000396000f3fe6080604052600436106100705760003560e01c80637a9e5e4b1161004e5780637a9e5e4b146100db5780638da5cb5b1461010e578063be9a65551461013f578063bf7e214f1461014757610070565b806307da68f51461007557806313af40351461007f57806375f12b21146100b2575b600080fd5b61007d61015c565b005b34801561008b57600080fd5b5061007d600480360360208110156100a257600080fd5b50356001600160a01b03166101f3565b3480156100be57600080fd5b506100c7610262565b604080519115158252519081900360200190f35b3480156100e757600080fd5b5061007d600480360360208110156100fe57600080fd5b50356001600160a01b0316610272565b34801561011a57600080fd5b506101236102dd565b604080516001600160a01b039092168252519081900360200190f35b61007d6102ec565b34801561015357600080fd5b5061012361037d565b610172336000356001600160e01b03191661038c565b61017b57600080fd5b604080513480825260208201838152369383018490526004359360243593849386933393600080356001600160e01b03191694909260608201848480828437600083820152604051601f909101601f1916909201829003965090945050505050a450506001805460ff60a01b1916600160a01b179055565b610209336000356001600160e01b03191661038c565b61021257600080fd5b600180546001600160a01b0319166001600160a01b0383811691909117918290556040519116907fce241d7ca1f669fee44b6fc00b8eba2df3bb514eed0f6f668f8f89096e81ed9490600090a250565b600154600160a01b900460ff1681565b610288336000356001600160e01b03191661038c565b61029157600080fd5b600080546001600160a01b0319166001600160a01b03838116919091178083556040519116917f1abebea81bfa2637f28358c371278fb15ede7ea8dd28d2e03b112ff6d936ada491a250565b6001546001600160a01b031681565b610302336000356001600160e01b03191661038c565b61030b57600080fd5b604080513480825260208201838152369383018490526004359360243593849386933393600080356001600160e01b03191694909260608201848480828437600083820152604051601f909101601f1916909201829003965090945050505050a450506001805460ff60a01b19169055565b6000546001600160a01b031681565b60006001600160a01b0383163014156103a75750600161046f565b6001546001600160a01b03848116911614156103c55750600161046f565b6000546001600160a01b03166103dd5750600061046f565b6000546040805163b700961360e01b81526001600160a01b0386811660048301523060248301526001600160e01b0319861660448301529151919092169163b7009613916064808301926020929190829003018186803b15801561044057600080fd5b505afa158015610454573d6000803e3d6000fd5b505050506040513d602081101561046a57600080fd5b505190505b9291505056fea265627a7a723158208d56e55b10ee04cad1a2ad7a0fc8d053c2e00c7b1d1a360e65feab1ccf70515164736f6c63430005100032";
