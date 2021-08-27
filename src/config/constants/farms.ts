import { ChainId } from '@lydiafinance/sdk'

import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 3,
    lpSymbol: 'USDT-LYD LP',
    lpAddresses: {
      [ChainId.FUJI]: '0xca3953bb2011aa6a5af2a584562277bde65fa020',
      [ChainId.AVALANCHE]: '0x752c59f22faaa861108649f4596034796c69bc3f',
    },
    token: tokens.usdt,
    quoteToken: tokens.lyd,
    isFinished: false,
  },
  {
    pid: 16,
    lpSymbol: 'LYD-USDT.e LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x1718309E2AD61A945FCD242F28Dc83339b5d6192',
      [ChainId.AVALANCHE]: '0x1718309E2AD61A945FCD242F28Dc83339b5d6192',
    },
    token: tokens.usdt_e,
    quoteToken: tokens.lyd,
    isFinished: false,
  },
  {
    pid: 4,
    lpSymbol: 'AVAX-LYD LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x21A735A9c3f00EF3099D6a945F71d148840F4918',
      [ChainId.AVALANCHE]: '0xfba4edaad3248b03f1a3261ad06ad846a8e50765',
    },
    token: tokens.lyd,
    quoteToken: tokens.wavax,
    tokenSymbol: 'LYD',
    quoteTokenAdresses: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 7,
    lpSymbol: 'PNG-LYD LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x4570BD3910c64095F6C0f5e6405BE7Cb30E2bdd7',
      [ChainId.AVALANCHE]: '0x161f750b753c7120599d07c352607F458ecB918e',
    },
    token: tokens.png,
    quoteToken: tokens.lyd,
    isFinished: false,
  },
  {
    pid: 9,
    lpSymbol: 'ETH-LYD LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x4570BD3910c64095F6C0f5e6405BE7Cb30E2bdd7',
      [ChainId.AVALANCHE]: '0xEAC3778e5658667B72aEbe8C71F97ed8b3b5887b',
    },
    token: tokens.eth,
    quoteToken: tokens.lyd,
    isFinished: false,
  },
  {
    pid: 19,
    lpSymbol: 'ETH.e-LYD LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x7Be2c5B9dEE94102cF3920BF7192010Be04D806B',
      [ChainId.AVALANCHE]: '0x7Be2c5B9dEE94102cF3920BF7192010Be04D806B',
    },
    token: tokens.eth_e,
    quoteToken: tokens.lyd,
    isFinished: false,
  },
  {
    pid: 10,
    lpSymbol: 'SNOB-LYD LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x1ccd24def23a742d56a976810ca5bda37b43744d',
      [ChainId.AVALANCHE]: '0x805B7d20e92893FF4b68c83E40c1Fc9A7a6162Fa',
    },
    token: tokens.snob,
    quoteToken: tokens.lyd,
    isFinished: false,
  },
  {
    pid: 11,
    lpSymbol: 'XAVA-LYD LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x5BC783079e9A04c67436D6E712D5e73099c08f16',
      [ChainId.AVALANCHE]: '0x5BC783079e9A04c67436D6E712D5e73099c08f16',
    },
    token: tokens.xava,
    quoteToken: tokens.lyd,
    isFinished: true,
  },
  {
    pid: 1,
    lpSymbol: 'USDT-AVAX LP',
    lpAddresses: {
      [ChainId.FUJI]: '0xb239eafea4e312f9409f96493a5f24bb4a23af18',
      [ChainId.AVALANCHE]: '0xe22a65204726f102d9e3539b85d3999dee2e421f',
    },
    token: tokens.usdt,
    quoteToken: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 17,
    lpSymbol: 'USDT.e-AVAX LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x5Fc70cF6A4A858Cf4124013047e408367EBa1ace',
      [ChainId.AVALANCHE]: '0x5Fc70cF6A4A858Cf4124013047e408367EBa1ace',
    },
    token: tokens.usdt_e,
    quoteToken: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 2,
    lpSymbol: 'ETH-AVAX LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x1ccd24def23a742d56a976810ca5bda37b43744d',
      [ChainId.AVALANCHE]: '0x58128ab3ecbf703682ede72f341944bffe3524b9',
    },
    token: tokens.eth,
    quoteToken: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 18,
    lpSymbol: 'ETH.e-AVAX LP',
    lpAddresses: {
      [ChainId.FUJI]: '0xb74791cc65479132b52043b764bbB540439fdf02',
      [ChainId.AVALANCHE]: '0xb74791cc65479132b52043b764bbB540439fdf02',
    },
    token: tokens.eth_e,
    quoteToken: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 6,
    lpSymbol: 'SUSHI-AVAX LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x1ccd24def23a742d56a976810ca5bda37b43744d',
      [ChainId.AVALANCHE]: '0xF1d9d971ab9231759d952B22223B4D76D8b181E5',
    },
    token: tokens.sushi,
    quoteToken: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 20,
    lpSymbol: 'SUSHI.e-AVAX LP',
    lpAddresses: {
      [ChainId.FUJI]: '0xb4C629d453769835c2c4C6211AD0F67364D02770',
      [ChainId.AVALANCHE]: '0xb4C629d453769835c2c4C6211AD0F67364D02770',
    },
    token: tokens.sushi_e,
    quoteToken: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 8,
    lpSymbol: 'WBTC-AVAX LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x1ccd24def23a742d56a976810ca5bda37b43744d',
      [ChainId.AVALANCHE]: '0x9cfb46d0b92ac83aaa9ed0913f3f01cdbe22176d',
    },
    token: tokens.wbtc,
    quoteToken: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 21,
    lpSymbol: 'WBTC.e-AVAX LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x67edA35115D7Fd6930f95513472629211D827feE',
      [ChainId.AVALANCHE]: '0x67edA35115D7Fd6930f95513472629211D827feE',
    },
    token: tokens.wbtc_e,
    quoteToken: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 12,
    lpSymbol: 'USDT-DAI LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x1ccd24def23a742d56a976810ca5bda37b43744d',
      [ChainId.AVALANCHE]: '0x3cebc2b0febf521494f06318bbe202ae7ee799c9',
    },
    token: tokens.dai,
    quoteToken: tokens.usdt,
    isFinished: false,
  },
  {
    pid: 22,
    lpSymbol: 'USDT.e-DAI.e LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x7AbaB5474385918820dfBC7f35712084a91B583a',
      [ChainId.AVALANCHE]: '0x7AbaB5474385918820dfBC7f35712084a91B583a',
    },
    token: tokens.dai_e,
    quoteToken: tokens.usdt_e,
    isFinished: false,
  },
  {
    pid: 13,
    lpSymbol: 'YAK-AVAX LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x590673007Ff2839818cB1155926758E5F969d821',
      [ChainId.AVALANCHE]: '0x590673007Ff2839818cB1155926758E5F969d821',
    },
    token: tokens.yak,
    quoteToken: tokens.wavax,
    tokenSymbol: 'YAK',
    quoteTokenAdresses: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 14,
    lpSymbol: 'LINK-AVAX LP',
    lpAddresses: {
      [ChainId.FUJI]: '0xF8FbB3c62Feb73E10914D03E5524093955E702CA',
      [ChainId.AVALANCHE]: '0xF8FbB3c62Feb73E10914D03E5524093955E702CA',
    },
    token: tokens.link,
    quoteToken: tokens.wavax,
    tokenSymbol: 'LINK',
    quoteTokenAdresses: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 23,
    lpSymbol: 'LINK.e-AVAX LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x2d560eEe40979368162ca4Ac7Ec39c8421cc732B',
      [ChainId.AVALANCHE]: '0x2d560eEe40979368162ca4Ac7Ec39c8421cc732B',
    },
    token: tokens.link_e,
    quoteToken: tokens.wavax,
    tokenSymbol: 'LINK.e',
    quoteTokenAdresses: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 15,
    lpSymbol: 'QI-AVAX LP',
    lpAddresses: {
      [ChainId.FUJI]: '0xF8FbB3c62Feb73E10914D03E5524093955E702CA',
      [ChainId.AVALANCHE]: '0x983E459d81f83D57757E1dDfB1318deF8A82c001',
    },
    token: tokens.qi,
    quoteToken: tokens.wavax,
    tokenSymbol: 'QI',
    quoteTokenAdresses: tokens.qi,
    isFinished: false,
  },
  {
    pid: 24,
    lpSymbol: 'XAVA-AVAX LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x8cE7dF6508a2783480db7063809c3dabB01893f5',
      [ChainId.AVALANCHE]: '0x8cE7dF6508a2783480db7063809c3dabB01893f5',
    },
    token: tokens.xava,
    quoteToken: tokens.wavax,
    tokenSymbol: 'XAVA',
    quoteTokenAdresses: tokens.wavax,
    isFinished: false,
  },
  {
    pid: 25,
    lpSymbol: 'VSO-AVAX LP',
    lpAddresses: {
      [ChainId.FUJI]: '0x4c9b23dfff6a15cad84008ecf5b424b715d8e82c',
      [ChainId.AVALANCHE]: '0x4c9b23dfff6a15cad84008ecf5b424b715d8e82c',
    },
    token: tokens.vso,
    quoteToken: tokens.wavax,
    tokenSymbol: 'VSO',
    quoteTokenAdresses: tokens.wavax,
    isFinished: false,
  },
]

export default farms
