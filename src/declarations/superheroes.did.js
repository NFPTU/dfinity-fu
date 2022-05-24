export const idlFactory = ({ IDL }) => {
  const TokenIndex = IDL.Nat32;
  const AttributeMeta = IDL.Record({
    'max' : IDL.Opt(IDL.Text),
    'min' : IDL.Opt(IDL.Text),
    'trait_type' : IDL.Text,
    'value' : IDL.Text,
  });
  const Metadata = IDL.Record({
    'name' : IDL.Text,
    'description' : IDL.Text,
    'attributes' : IDL.Vec(AttributeMeta),
    'image' : IDL.Text,
  });
  const Balance__1 = IDL.Nat;
  const AccountIdentifier__1 = IDL.Text;
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
  const Result_6 = IDL.Variant({ 'ok' : TokenIndex, 'err' : IDL.Text });
  const Extension = IDL.Text;
  const MetadataExt = IDL.Record({
    'name' : IDL.Text,
    'description' : IDL.Text,
    'attributes' : IDL.Vec(AttributeMeta),
    'image' : IDL.Text,
  });
  const CommonError = IDL.Variant({
    'InvalidToken' : TokenIdentifier,
    'Other' : IDL.Text,
  });
  const Result_5 = IDL.Variant({
    'ok' : IDL.Vec(Metadata),
    'err' : CommonError,
  });
  const TokenIdentifier__1 = IDL.Text;
  const Result_4 = IDL.Variant({ 'ok' : Metadata, 'err' : CommonError });
  const Result_3 = IDL.Variant({ 'ok' : IDL.Nat, 'err' : CommonError });
  const Result_2 = IDL.Variant({
    'ok' : IDL.Vec(IDL.Tuple(AccountIdentifier__1, Balance__1)),
    'err' : CommonError,
  });
  const Result_1 = IDL.Variant({ 'ok' : IDL.Bool, 'err' : IDL.Text });
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
    'allMetadata' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(TokenIndex, IDL.Tuple(Metadata, Balance__1)))],
        ['query'],
      ),
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
    'claiming' : IDL.Func([], [Result_6], []),
    'extensions' : IDL.Func([], [IDL.Vec(Extension)], ['query']),
    'getTokensMetadata' : IDL.Func([], [IDL.Vec(MetadataExt)], []),
    'getUserTokens' : IDL.Func([AccountIdentifier__1], [Result_5], ['query']),
    'metadata' : IDL.Func([TokenIdentifier__1], [Result_4], ['query']),
    'numberOfTokenHolders' : IDL.Func(
        [TokenIdentifier__1],
        [Result_3],
        ['query'],
      ),
    'numberOfTokens' : IDL.Func([], [IDL.Nat], ['query']),
    'registry' : IDL.Func([TokenIdentifier__1], [Result_2], ['query']),
    'setTokensMetadata' : IDL.Func([IDL.Vec(MetadataExt)], [Result_1], []),
    'supply' : IDL.Func([TokenIdentifier__1], [Result], ['query']),
    'transfer' : IDL.Func([TransferRequest], [TransferResponse], []),
  });
  return AntKingdoms;
};
export const init = ({ IDL }) => { return [IDL.Principal]; };
