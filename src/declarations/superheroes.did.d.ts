import type { Principal } from '@dfinity/principal';
export type AccountIdentifier = string;
export type AccountIdentifier__1 = string;
export interface AntKingdoms {
  'acceptCycles' : () => Promise<undefined>,
  'allRegistry' : () => Promise<
      Array<[TokenIndex__1, Array<[AccountIdentifier__1, Balance__1]>]>
    >,
  'availableCycles' : () => Promise<bigint>,
  'balance' : (arg_0: BalanceRequest) => Promise<BalanceResponse>,
  'breedAntWorkder' : (arg_0: TokenIndex__1) => Promise<Result>,
  'changeAdmin' : (arg_0: Principal) => Promise<undefined>,
  'claimResourceInLand' : (
      arg_0: TokenIndex__1,
      arg_1: TokenIndex__1,
    ) => Promise<Result>,
  'claimWorkerEgg' : (arg_0: TokenIndex__1) => Promise<Result>,
  'claiming' : () => Promise<Result>,
  'extensions' : () => Promise<Array<Extension>>,
  'getDataByLandId' : (arg_0: TokenIndex__1) => Promise<Result_7>,
  'getTokensMetadata' : () => Promise<Array<MetadataExt>>,
  'getUserAvailableWorker' : (arg_0: AccountIdentifier__1) => Promise<Result_6>,
  'getUserInfo' : (arg_0: AccountIdentifier__1) => Promise<UserInfoExt>,
  'getUserTokens' : (arg_0: AccountIdentifier__1) => Promise<Result_6>,
  'metadata' : (arg_0: TokenIdentifier__1) => Promise<Result_5>,
  'numberOfTokenHolders' : (arg_0: TokenIdentifier__1) => Promise<Result_1>,
  'numberOfTokens' : () => Promise<bigint>,
  'registry' : (arg_0: TokenIdentifier__1) => Promise<Result_4>,
  'setTokensMetadata' : (arg_0: Array<MetadataExt>) => Promise<Result>,
  'stakeNestInLand' : (arg_0: TokenIndex__1, arg_1: TokenIndex__1) => Promise<
      Result_3
    >,
  'stakeQueenInNest' : (arg_0: TokenIndex__1, arg_1: TokenIndex__1) => Promise<
      Result_3
    >,
  'supply' : (arg_0: TokenIdentifier__1) => Promise<Result_2>,
  'transfer' : (arg_0: TransferRequest) => Promise<TransferResponse>,
  'updateUser' : (arg_0: string) => Promise<Result_1>,
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
export type BalanceResponse = { 'ok' : Balance } |
  { 'err' : CommonError__1 };
export type Balance__1 = bigint;
export interface ClaimResouceInfo {
  'id' : TokenIndex,
  'resource' : Resource,
  'claimTimeStamp' : Time,
}
export type CommonError = { 'InvalidToken' : TokenIdentifier } |
  { 'Other' : string };
export type CommonError__1 = { 'InvalidToken' : TokenIdentifier } |
  { 'Other' : string };
export type DetailNFT = {
    'land' : {
      'resource' : Resource,
      'claimableResource' : Array<ClaimResouceInfo>,
      'workersFarmIds' : Array<TokenIndex>,
      'nestStaked' : [] | [TokenIndex],
    }
  } |
  {
    'nest' : {
      'level' : bigint,
      'inLand' : [] | [TokenIndex],
      'queenIn' : [] | [TokenIndex],
    }
  } |
  {
    'queen' : {
      'info' : { 'foodPerWorker' : number, 'breedWorkerTime' : Time },
      'level' : bigint,
      'inNest' : [] | [TokenIndex],
    }
  } |
  {
    'worker' : {
      'antState' : bigint,
      'farmTimestamp' : Time,
      'info' : { 'farmingTime' : Time, 'farmPerTime' : Resource },
      'level' : bigint,
      'inNest' : [] | [TokenIndex],
      'queenId' : [] | [TokenIndex],
      'breedTimestamp' : Time,
    }
  };
export type Extension = string;
export type Memo = Array<number>;
export interface MetadataExt {
  'tokenId' : [] | [TokenIndex],
  'name' : string,
  'description' : string,
  'detail' : DetailNFT,
  'attributes' : Array<AttributeMeta>,
  'image' : string,
}
export interface Resource {
  'food' : number,
  'gold' : number,
  'leaf' : number,
  'soil' : number,
}
export type Result = { 'ok' : boolean } |
  { 'err' : string };
export type Result_1 = { 'ok' : bigint } |
  { 'err' : CommonError };
export type Result_2 = { 'ok' : Balance__1 } |
  { 'err' : CommonError };
export type Result_3 = { 'ok' : string } |
  { 'err' : string };
export type Result_4 = { 'ok' : Array<[AccountIdentifier__1, Balance__1]> } |
  { 'err' : CommonError };
export type Result_5 = { 'ok' : MetadataExt } |
  { 'err' : CommonError };
export type Result_6 = { 'ok' : Array<MetadataExt> } |
  { 'err' : CommonError };
export type Result_7 = { 'ok' : Array<MetadataExt> } |
  { 'err' : string };
export type SubAccount = Array<number>;
export type Time = bigint;
export type TokenIdentifier = string;
export type TokenIdentifier__1 = string;
export type TokenIndex = number;
export type TokenIndex__1 = number;
export interface TransferRequest {
  'to' : User,
  'token' : TokenIdentifier,
  'notify' : boolean,
  'from' : User,
  'memo' : Memo,
  'subaccount' : [] | [SubAccount],
  'amount' : Balance,
}
export type TransferResponse = { 'ok' : Balance } |
  {
    'err' : { 'CannotNotify' : AccountIdentifier } |
      { 'InsufficientBalance' : null } |
      { 'InvalidToken' : TokenIdentifier } |
      { 'Rejected' : null } |
      { 'Unauthorized' : AccountIdentifier } |
      { 'Other' : string }
  };
export type User = { 'principal' : Principal } |
  { 'address' : AccountIdentifier };
export interface UserInfoExt {
  'id' : string,
  'userState' : UserState,
  'name' : string,
  'tokens' : Array<TokenIndex>,
}
export interface UserState { 'resource' : Resource }
export interface WorkerFarmRequest {
  'food' : Array<TokenIndex>,
  'gold' : Array<TokenIndex>,
  'leaf' : Array<TokenIndex>,
  'soil' : Array<TokenIndex>,
  'countIds' : bigint,
}
export interface _SERVICE extends AntKingdoms {}
