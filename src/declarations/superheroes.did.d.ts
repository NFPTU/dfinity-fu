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
  'changeAdmin' : (arg_0: Principal) => Promise<undefined>,
  'claiming' : () => Promise<Result_1>,
  'extensions' : () => Promise<Array<Extension>>,
  'getTokensMetadata' : () => Promise<Array<MetadataExt>>,
  'getUserInfo' : (arg_0: AccountIdentifier__1) => Promise<UserInfoExt>,
  'getUserTokens' : (arg_0: AccountIdentifier__1) => Promise<Result_5>,
  'metadata' : (arg_0: TokenIdentifier__1) => Promise<Result_4>,
  'numberOfTokenHolders' : (arg_0: TokenIdentifier__1) => Promise<Result_3>,
  'numberOfTokens' : () => Promise<bigint>,
  'registry' : (arg_0: TokenIdentifier__1) => Promise<Result_2>,
  'setTokensMetadata' : (arg_0: Array<MetadataExt>) => Promise<Result_1>,
  'supply' : (arg_0: TokenIdentifier__1) => Promise<Result>,
  'transfer' : (arg_0: TransferRequest) => Promise<TransferResponse>,
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
export type CommonError = { 'InvalidToken' : TokenIdentifier } |
  { 'Other' : string };
export type CommonError__1 = { 'InvalidToken' : TokenIdentifier } |
  { 'Other' : string };
export type DetailNFT = {
    'land' : {
      'gold' : number,
      'leaf' : number,
      'wood' : number,
      'nestStaked' : [] | [TokenIndex],
    }
  } |
  { 'nest' : { 'level' : bigint, 'queenIn' : [] | [TokenIndex] } } |
  { 'queen' : { 'level' : bigint } } |
  { 'worker' : { 'level' : bigint } };
export type Extension = string;
export type Memo = Array<number>;
export interface MetadataExt {
  'name' : string,
  'description' : string,
  'detail' : DetailNFT,
  'attributes' : Array<AttributeMeta>,
  'image' : string,
}
export type Result = { 'ok' : Balance__1 } |
  { 'err' : CommonError };
export type Result_1 = { 'ok' : boolean } |
  { 'err' : string };
export type Result_2 = { 'ok' : Array<[AccountIdentifier__1, Balance__1]> } |
  { 'err' : CommonError };
export type Result_3 = { 'ok' : bigint } |
  { 'err' : CommonError };
export type Result_4 = { 'ok' : MetadataExt } |
  { 'err' : CommonError };
export type Result_5 = { 'ok' : Array<MetadataExt> } |
  { 'err' : CommonError };
export type SubAccount = Array<number>;
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
  'name' : string,
  'tokens' : Array<TokenIndex>,
}
export interface _SERVICE extends AntKingdoms {}
