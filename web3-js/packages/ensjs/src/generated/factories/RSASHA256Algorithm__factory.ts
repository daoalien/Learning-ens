/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Interface } from '@ethersproject/abi'
import { Signer } from '@ethersproject/abstract-signer'
import { Contract } from '@ethersproject/contracts'
import type { Provider } from '@ethersproject/providers'
import type {
  RSASHA256Algorithm,
  RSASHA256AlgorithmInterface,
} from '../RSASHA256Algorithm'

const _abi = [
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'key',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'sig',
        type: 'bytes',
      },
    ],
    name: 'verify',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

export class RSASHA256Algorithm__factory {
  static readonly abi = _abi
  static createInterface(): RSASHA256AlgorithmInterface {
    return new Interface(_abi) as RSASHA256AlgorithmInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): RSASHA256Algorithm {
    return new Contract(address, _abi, signerOrProvider) as RSASHA256Algorithm
  }
}