module.exports = {
  apps: [{
    name: 'fuse-liquidator-bot',
    script: 'index.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    // args: 'one two',
    // instances: 1,
    // autorestart: true,
    // watch: false,
    // max_memory_restart: '1G',
    time: true,
    env: {
      NODE_ENV: 'development',
      ETHEREUM_ADMIN_ACCOUNT: '',
      ETHEREUM_ADMIN_PRIVATE_KEY: '',
      FUSE_POOL_DIRECTORY_CONTRACT_ADDRESS: '0x835482FE0532f169024d5E9410199369aAD5C77E',
      FUSE_POOL_LENS_CONTRACT_ADDRESS: '0x8dA38681826f4ABBe089643D2B3fE4C6e4730493',
      FUSE_SAFE_LIQUIDATOR_CONTRACT_ADDRESS: '0x1bbf310c8707bc2248c0b46a2cd073c81f2cd76c',
      LIQUIDATION_STRATEGY: 'uniswap', // "" for safe liquidation using your own capital or "uniswap" for safe liquidation using Uniswap/Sushiswap flash swaps
      SUPPORT_ALL_PUBLIC_POOLS: true, // Set to true to perform liquidations for all public Fuse pools (not a security risk as FuseSafeLiquidator makes sure you seize at least X or profit at least X)
      SUPPORTED_POOL_COMPTROLLERS: '', // Supported pool Comptroller proxy (Unitroller) addresses; if SUPPORT_ALL_PUBLIC_POOLS is true, supports these pools as well as all public Fuse pools
      SUPPORTED_INPUT_CURRENCIES: 'ETH,0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // Separate by commas--if using your own capital for liquidations, supported currencies to repay; use "ETH" for ETH and contract addresses for tokens
      SUPPORTED_OUTPUT_CURRENCIES: 'ETH,0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // Separate by commas--supported currencies to receieve as seized collateral (other seized currencies will be exchanged to EXCHANGE_TO_TOKEN_ADDRESS); use "ETH" for ETH and contract addresses for tokens
      EXCHANGE_TO_TOKEN_ADDRESS: "ETH", // Leave blank to always keep seized collateral as is; set to "ETH" for ETH
      MINIMUM_PROFIT_ETH: 0, // 0 = break even in worst case scenario
      WEB3_HTTP_PROVIDER_URL: "http://localhost:8546",
      LIQUIDATION_INTERVAL_SECONDS: 60,
      GAS_LIMIT_MULTIPLIER: 1.1
    },
    env_production: {
      NODE_ENV: 'production',
      ETHEREUM_ADMIN_ACCOUNT: '',
      ETHEREUM_ADMIN_PRIVATE_KEY: '',
      FUSE_POOL_DIRECTORY_CONTRACT_ADDRESS: '0x835482FE0532f169024d5E9410199369aAD5C77E',
      FUSE_POOL_LENS_CONTRACT_ADDRESS: '0x8dA38681826f4ABBe089643D2B3fE4C6e4730493',
      FUSE_SAFE_LIQUIDATOR_CONTRACT_ADDRESS: '0x1bbf310c8707bc2248c0b46a2cd073c81f2cd76c',
      LIQUIDATION_STRATEGY: 'uniswap', // "" for safe liquidation using your own capital or "uniswap" for safe liquidation using Uniswap/Sushiswap flash swaps
      SUPPORT_ALL_PUBLIC_POOLS: true, // Set to true to perform liquidations for all public Fuse pools (not a security risk as FuseSafeLiquidator makes sure you seize at least X or profit at least X)
      SUPPORTED_POOL_COMPTROLLERS: '', // Supported pool Comptroller proxy (Unitroller) addresses; if SUPPORT_ALL_PUBLIC_POOLS is true, supports these pools as well as all public Fuse pools
      SUPPORTED_INPUT_CURRENCIES: 'ETH,0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // Separate by commas--if using your own capital for liquidations, supported currencies to repay; use "ETH" for ETH and contract addresses for tokens
      SUPPORTED_OUTPUT_CURRENCIES: 'ETH,0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // Separate by commas--supported currencies to receieve as seized collateral (other seized currencies will be exchanged to EXCHANGE_TO_TOKEN_ADDRESS); use "ETH" for ETH and contract addresses for tokens
      EXCHANGE_TO_TOKEN_ADDRESS: "ETH", // Leave blank to always keep seized collateral as is; set to "ETH" for ETH
      MINIMUM_PROFIT_ETH: 0, // 0 = break even in worst case scenario
      WEB3_HTTP_PROVIDER_URL: "http://localhost:8545",
      LIQUIDATION_INTERVAL_SECONDS: 15,
      GAS_LIMIT_MULTIPLIER: 1.1
    }
  }]
};
