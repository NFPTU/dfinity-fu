import type { Principal } from '@dfinity/principal';
export type AccountIdentifier = string;
export type AccountIdentifier__1 = string;
export interface AntKingdoms {
  'acceptCycles' : () => Promise<undefined>,
  'allRegistry' : () => Promise<
      Array<[TokenIndex__1, Array<[AccountIdentifier, Balance]>]>
    >,
  'availableCycles' : () => Promise<bigint>,
  'balance' : (arg_0: BalanceRequest) => Promise<BalanceResponse>,
  'breedAntArmy' : (arg_0: TokenIndex__1) => Promise<Result>,
  'breedAntWorkder' : (arg_0: TokenIndex__1) => Promise<Result>,
  'buy' : (arg_0: bigint) => Promise<Result_12>,
  'cancelOrder' : (arg_0: bigint) => Promise<Result_12>,
  'changeAdmin' : (arg_0: Principal) => Promise<undefined>,
  'claimResourceInLand' : (
      arg_0: TokenIndex__1,
      arg_1: TokenIndex__1,
    ) => Promise<Result>,
  'claimWorkerEgg' : (arg_0: TokenIndex__1) => Promise<Result>,
  'claiming' : () => Promise<Result>,
  'claimingAdmin' : () => Promise<Result>,
  'createOrder' : (arg_0: TokenIndex__1, arg_1: bigint) => Promise<Result_12>,
  'extensions' : () => Promise<Array<Extension>>,
  'getAllOrders' : () => Promise<Result_11>,
  'getDataByLandId' : (arg_0: TokenIndex__1) => Promise<Result_10>,
  'getTokensMetadata' : () => Promise<Array<MetadataExt>>,
  'getUserAvailableWorker' : (arg_0: AccountIdentifier) => Promise<Result_8>,
  'getUserInfo' : (arg_0: AccountIdentifier) => Promise<UserInfoExt>,
  'getUserOrders' : (arg_0: AccountIdentifier) => Promise<Result_9>,
  'getUserTokens' : (arg_0: AccountIdentifier) => Promise<Result_8>,
  'metadata' : (arg_0: TokenIdentifier__1) => Promise<Result_7>,
  'numberOfTokenHolders' : (arg_0: TokenIdentifier__1) => Promise<Result_2>,
  'numberOfTokens' : () => Promise<bigint>,
  'registry' : (arg_0: TokenIdentifier__1) => Promise<Result_6>,
  'setLevelMetadata' : (arg_0: Array<LevelData>) => Promise<Result_5>,
  'setTokensMetadata' : (arg_0: Array<MetadataExt>) => Promise<Result>,
  'stakeLandToKingdom' : (
      arg_0: TokenIndex__1,
      arg_1: TokenIndex__1,
    ) => Promise<Result>,
  'stakeNestInLand' : (arg_0: TokenIndex__1, arg_1: TokenIndex__1) => Promise<
      Result_3
    >,
  'stakeQueenInNest' : (arg_0: TokenIndex__1, arg_1: TokenIndex__1) => Promise<
      Result_3
    >,
  'supply' : (arg_0: TokenIdentifier__1) => Promise<Result_4>,
  'swapGoldToToken' : (arg_0: bigint) => Promise<Result>,
  'transfer' : (arg_0: Principal, arg_1: TokenIndex__1) => Promise<Result>,
  'unStakeLandToKingdom' : (
      arg_0: TokenIndex__1,
      arg_1: TokenIndex__1,
    ) => Promise<Result>,
  'unStakeNestInLand' : (arg_0: TokenIndex__1, arg_1: TokenIndex__1) => Promise<
      Result_3
    >,
  'unStakeQueenInNest' : (
      arg_0: TokenIndex__1,
      arg_1: TokenIndex__1,
    ) => Promise<Result_3>,
  'updateUser' : (arg_0: string) => Promise<Result_2>,
  'upgradeLevelNest' : (arg_0: TokenIndex__1) => Promise<Result_1>,
  'upgradeLevelQueen' : (arg_0: TokenIndex__1) => Promise<Result_1>,
  'workerFarmInLand' : (
      arg_0: WorkerFarmRequest,
      arg_1: TokenIndex__1,
    ) => Promise<Result>,
}
export interface AttributeMeta {
  'max' : [] | [string],
  'min' : [] | [string],
  'trait_type' : string,
  'value' : string,
}
export type Balance = bigint;
export interface BalanceRequest { 'token' : TokenIdentifier, 'user' : User }
export type BalanceResponse = { 'ok' : Balance__1 } |
  { 'err' : CommonError__1 };
export type Balance__1 = bigint;
export interface ClaimResouceInfo {
  'id' : TokenIndex,
  'resource' : Resource,
  'claimTimeStamp' : Time,
  'workersFarmIds' : Array<TokenIndex>,
}
export type CommonError = { 'InvalidToken' : TokenIdentifier } |
  { 'Other' : string };
export type CommonError__1 = { 'InvalidToken' : TokenIdentifier } |
  { 'Other' : string };
export interface CostInfo {
  'nextLevel' : { 'nest' : { 'limit' : bigint } } |
    { 'queen' : { 'resourcePerWorker' : Resource, 'breedWorkerTime' : Time } } |
    { 'worker' : { 'farmPerTime' : Resource } },
  'costResource' : Resource,
  'level' : bigint,
}
export type DetailNFT = {
    'army' : {
      'antState' : bigint,
      'kingdomId' : TokenIndex,
      'queenId' : TokenIndex,
    }
  } |
  {
    'land' : {
      'resource' : Resource,
      'claimableResource' : Array<ClaimResouceInfo>,
      'info' : { 'farmingTime' : Time },
      'nestStaked' : [] | [TokenIndex],
      'inKingdom' : TokenIndex,
    }
  } |
  {
    'nest' : {
      'level' : bigint,
      'limit' : bigint,
      'inLand' : [] | [TokenIndex],
      'queenIn' : [] | [TokenIndex],
    }
  } |
  {
    'queen' : {
      'info' : { 'resourcePerWorker' : Resource, 'breedWorkerTime' : Time },
      'level' : bigint,
      'inNest' : [] | [TokenIndex],
      'breedingWorkerId' : TokenIndex,
    }
  } |
  {
    'worker' : {
      'antState' : bigint,
      'farmTimestamp' : Time,
      'info' : { 'farmingTime' : Time, 'farmPerTime' : Resource },
      'inNest' : [] | [TokenIndex],
      'queenId' : [] | [TokenIndex],
      'breedTimestamp' : Time,
    }
  } |
  { 'kingdom' : { 'landId' : Array<TokenIndex> } };
export type Extension = string;
export interface InfoLevel { 'info' : Array<CostInfo>, 'rarity' : string }
export interface LevelData { 'info' : Array<InfoLevel>, 'name' : string }
export interface MetadataExt {
  'tokenId' : [] | [TokenIndex],
  'name' : string,
  'description' : string,
  'detail' : DetailNFT,
  'attributes' : Array<AttributeMeta>,
  'image' : string,
}
export interface MetadataExt__1 {
  'tokenId' : [] | [TokenIndex],
  'name' : string,
  'description' : string,
  'detail' : DetailNFT,
  'attributes' : Array<AttributeMeta>,
  'image' : string,
}
export interface OrderExt {
  'token' : MetadataExt__1,
  'owner' : Principal,
  'index' : bigint,
  'price' : bigint,
}
export interface Resource {
  'food' : number,
  'gold' : number,
  'leaf' : number,
  'soil' : number,
}
export type Result = { 'ok' : boolean } |
  { 'err' : string };
export type Result_1 = { 'ok' : MetadataExt } |
  { 'err' : string };
export type Result_10 = { 'ok' : Array<MetadataExt> } |
  { 'err' : string };
export type Result_11 = { 'ok' : Array<OrderExt> } |
  { 'err' : string };
export type Result_12 = { 'ok' : bigint } |
  { 'err' : string };
export type Result_2 = { 'ok' : bigint } |
  { 'err' : CommonError };
export type Result_3 = { 'ok' : string } |
  { 'err' : string };
export type Result_4 = { 'ok' : Balance } |
  { 'err' : CommonError };
export type Result_5 = { 'ok' : Array<LevelData> } |
  { 'err' : string };
export type Result_6 = { 'ok' : Array<[AccountIdentifier, Balance]> } |
  { 'err' : CommonError };
export type Result_7 = { 'ok' : MetadataExt } |
  { 'err' : CommonError };
export type Result_8 = { 'ok' : Array<MetadataExt> } |
  { 'err' : CommonError };
export type Result_9 = { 'ok' : Array<OrderExt> } |
  { 'err' : CommonError };
export type Time = bigint;
export type TokenIdentifier = string;
export type TokenIdentifier__1 = string;
export type TokenIndex = number;
export type TokenIndex__1 = number;
export type User = { 'principal' : Principal } |
  { 'address' : AccountIdentifier__1 };
export interface UserInfoExt {
  'id' : string,
  'userState' : UserState,
  'name' : string,
  'tokens' : Array<TokenIndex>,
}
export interface UserState {
  'resource' : Resource,
  'limitAnt' : bigint,
  'kingdomId' : TokenIndex,
  'currentAnt' : bigint,
}
export interface WorkerFarmRequest {
  'food' : Array<TokenIndex>,
  'gold' : Array<TokenIndex>,
  'leaf' : Array<TokenIndex>,
  'soil' : Array<TokenIndex>,
  'countIds' : bigint,
}
export interface _SERVICE extends AntKingdoms {}
