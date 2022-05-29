export const idlFactory = ({ IDL }) => {
  const TokenIndex = IDL.Nat32;
  const AccountIdentifier__1 = IDL.Text;
  const Balance__1 = IDL.Nat;
  const TokenIdentifier = IDL.Text;
  const AccountIdentifier = IDL.Text;
  const User = IDL.Variant({
    'principal' : IDL.Principal,
    'address' : AccountIdentifier,
  });
  const BalanceRequest = IDL.Record({
    'token' : TokenIdentifier,
    'user' : User,
  });
  const Balance = IDL.Nat;
  const CommonError__1 = IDL.Variant({
    'InvalidToken' : TokenIdentifier,
    'Other' : IDL.Text,
  });
  const BalanceResponse = IDL.Variant({
    'ok' : Balance,
    'err' : CommonError__1,
  });
  const Result_2 = IDL.Variant({ 'ok' : IDL.Bool, 'err' : IDL.Text });
  const Extension = IDL.Text;
  const TokenIndex__1 = IDL.Nat32;
  const DetailNFT = IDL.Variant({
    'land' : IDL.Record({
      'gold' : IDL.Float64,
      'leaf' : IDL.Float64,
      'wood' : IDL.Float64,
      'nestStaked' : IDL.Opt(TokenIndex__1),
    }),
    'nest' : IDL.Record({
      'level' : IDL.Nat,
      'inLand' : IDL.Opt(TokenIndex__1),
      'queenIn' : IDL.Opt(TokenIndex__1),
    }),
    'queen' : IDL.Record({
      'level' : IDL.Nat,
      'inNest' : IDL.Opt(TokenIndex__1),
    }),
    'worker' : IDL.Record({ 'level' : IDL.Nat }),
  });
  const AttributeMeta = IDL.Record({
    'max' : IDL.Opt(IDL.Text),
    'min' : IDL.Opt(IDL.Text),
    'trait_type' : IDL.Text,
    'value' : IDL.Text,
  });
  const MetadataExt = IDL.Record({
    'tokenId' : IDL.Opt(TokenIndex__1),
    'name' : IDL.Text,
    'description' : IDL.Text,
    'detail' : DetailNFT,
    'attributes' : IDL.Vec(AttributeMeta),
    'image' : IDL.Text,
  });
  const UserInfoExt = IDL.Record({
    'id' : IDL.Text,
    'name' : IDL.Text,
    'tokens' : IDL.Vec(TokenIndex__1),
  });
  const CommonError = IDL.Variant({
    'InvalidToken' : TokenIdentifier,
    'Other' : IDL.Text,
  });
  const Result_6 = IDL.Variant({
    'ok' : IDL.Vec(MetadataExt),
    'err' : CommonError,
  });
  const TokenIdentifier__1 = IDL.Text;
  const Result_5 = IDL.Variant({ 'ok' : MetadataExt, 'err' : CommonError });
  const Result_4 = IDL.Variant({ 'ok' : IDL.Nat, 'err' : CommonError });
  const Result_3 = IDL.Variant({
    'ok' : IDL.Vec(IDL.Tuple(AccountIdentifier__1, Balance__1)),
    'err' : CommonError,
  });
  const Result_1 = IDL.Variant({ 'ok' : IDL.Text, 'err' : IDL.Text });
  const Result = IDL.Variant({ 'ok' : Balance__1, 'err' : CommonError });
  const Memo = IDL.Vec(IDL.Nat8);
  const SubAccount = IDL.Vec(IDL.Nat8);
  const TransferRequest = IDL.Record({
    'to' : User,
    'token' : TokenIdentifier,
    'notify' : IDL.Bool,
    'from' : User,
    'memo' : Memo,
    'subaccount' : IDL.Opt(SubAccount),
    'amount' : Balance,
  });
  const TransferResponse = IDL.Variant({
    'ok' : Balance,
    'err' : IDL.Variant({
      'CannotNotify' : AccountIdentifier,
      'InsufficientBalance' : IDL.Null,
      'InvalidToken' : TokenIdentifier,
      'Rejected' : IDL.Null,
      'Unauthorized' : AccountIdentifier,
      'Other' : IDL.Text,
    }),
  });
  const AntKingdoms = IDL.Service({
    'acceptCycles' : IDL.Func([], [], []),
    'allRegistry' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Tuple(
              TokenIndex,
              IDL.Vec(IDL.Tuple(AccountIdentifier__1, Balance__1)),
            )
          ),
        ],
        ['query'],
      ),
    'availableCycles' : IDL.Func([], [IDL.Nat], ['query']),
    'balance' : IDL.Func([BalanceRequest], [BalanceResponse], ['query']),
    'changeAdmin' : IDL.Func([IDL.Principal], [], []),
    'claiming' : IDL.Func([], [Result_2], []),
    'extensions' : IDL.Func([], [IDL.Vec(Extension)], ['query']),
    'getTokensMetadata' : IDL.Func([], [IDL.Vec(MetadataExt)], []),
    'getUserInfo' : IDL.Func([AccountIdentifier__1], [UserInfoExt], ['query']),
    'getUserTokens' : IDL.Func([AccountIdentifier__1], [Result_6], ['query']),
    'metadata' : IDL.Func([TokenIdentifier__1], [Result_5], ['query']),
    'numberOfTokenHolders' : IDL.Func(
        [TokenIdentifier__1],
        [Result_4],
        ['query'],
      ),
    'numberOfTokens' : IDL.Func([], [IDL.Nat], ['query']),
    'registry' : IDL.Func([TokenIdentifier__1], [Result_3], ['query']),
    'setTokensMetadata' : IDL.Func([IDL.Vec(MetadataExt)], [Result_2], []),
    'stakeNestInLand' : IDL.Func([TokenIndex, TokenIndex], [Result_1], []),
    'stakeQueenInNest' : IDL.Func([TokenIndex, TokenIndex], [Result_1], []),
    'supply' : IDL.Func([TokenIdentifier__1], [Result], ['query']),
    'transfer' : IDL.Func([TransferRequest], [TransferResponse], []),
  });
  return AntKingdoms;
};
export const init = ({ IDL }) => { return [IDL.Principal]; };
