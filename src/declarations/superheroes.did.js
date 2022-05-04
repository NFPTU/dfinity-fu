export const idlFactory = ({ IDL }) => {
  const Errors = IDL.Variant({
    'Unauthorized' : IDL.Null,
    'TokenNotExist' : IDL.Null,
    'InvalidOperator' : IDL.Null,
  });
  const TxReceipt = IDL.Variant({ 'Ok' : IDL.Nat, 'Err' : Errors });
  const TokenMetadata = IDL.Record({ 'tokenUri' : IDL.Text });
  const MintResult = IDL.Variant({
    'Ok' : IDL.Tuple(IDL.Nat, IDL.Nat),
    'Err' : Errors,
  });
  const Result_1 = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const Result = IDL.Variant({
    'ok' : IDL.Tuple(IDL.Bool, IDL.Bool),
    'err' : IDL.Text,
  });
  const TokenMetadata__1 = IDL.Record({ 'tokenUri' : IDL.Text });
  const Time = IDL.Int;
  const TokenInfoExt = IDL.Record({
    'owner' : IDL.Principal,
    'metadata' : IDL.Opt(TokenMetadata__1),
    'operator' : IDL.Opt(IDL.Principal),
    'timestamp' : Time,
    'index' : IDL.Nat,
  });
  const Metadata = IDL.Record({
    'owner' : IDL.Principal,
    'desc' : IDL.Text,
    'logo' : IDL.Text,
    'name' : IDL.Text,
    'totalSupply' : IDL.Nat,
    'cycles' : IDL.Nat,
    'symbol' : IDL.Text,
  });
  const SaleInfoExt = IDL.Record({
    'startTime' : IDL.Int,
    'whitelist' : IDL.Opt(IDL.Principal),
    'endTime' : IDL.Int,
    'minPerUser' : IDL.Nat,
    'fundClaimed' : IDL.Bool,
    'devFee' : IDL.Nat,
    'amountLeft' : IDL.Nat,
    'feeClaimed' : IDL.Bool,
    'devAddr' : IDL.Principal,
    'fundRaised' : IDL.Nat,
    'paymentToken' : IDL.Principal,
    'price' : IDL.Nat,
    'amount' : IDL.Nat,
    'maxPerUser' : IDL.Nat,
  });
  const Operation = IDL.Variant({
    'transferFrom' : IDL.Null,
    'burn' : IDL.Null,
    'approveAll' : IDL.Null,
    'mint' : IDL.Opt(TokenMetadata__1),
    'approve' : IDL.Null,
    'setMetadata' : IDL.Null,
    'transfer' : IDL.Null,
    'revokeAll' : IDL.Null,
  });
  const Record = IDL.Variant({
    'metadata' : IDL.Opt(TokenMetadata__1),
    'user' : IDL.Principal,
  });
  const TxRecord = IDL.Record({
    'op' : Operation,
    'to' : Record,
    'tokenIndex' : IDL.Opt(IDL.Nat),
    'from' : Record,
    'timestamp' : Time,
    'caller' : IDL.Principal,
    'index' : IDL.Nat,
  });
  const UserInfoExt = IDL.Record({
    'allowedTokens' : IDL.Vec(IDL.Nat),
    'tokens' : IDL.Vec(IDL.Nat),
    'operators' : IDL.Vec(IDL.Principal),
    'allowedBy' : IDL.Vec(IDL.Principal),
  });
  const NFTSale = IDL.Service({
    'approve' : IDL.Func([IDL.Nat, IDL.Principal], [TxReceipt], []),
    'balanceOf' : IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
    'batchMint' : IDL.Func(
        [IDL.Principal, IDL.Vec(IDL.Opt(TokenMetadata))],
        [MintResult],
        [],
      ),
    'batchSetTokenMetadata' : IDL.Func(
        [IDL.Vec(IDL.Tuple(IDL.Nat, TokenMetadata))],
        [TxReceipt],
        [],
      ),
    'batchTransferFrom' : IDL.Func(
        [IDL.Principal, IDL.Principal, IDL.Vec(IDL.Nat)],
        [TxReceipt],
        [],
      ),
    'burn' : IDL.Func([IDL.Nat], [TxReceipt], []),
    'buy' : IDL.Func([IDL.Nat], [Result_1], []),
    'claimFunds' : IDL.Func([], [Result], []),
    'desc' : IDL.Func([], [IDL.Text], ['query']),
    'getAllTokens' : IDL.Func([], [IDL.Vec(TokenInfoExt)], ['query']),
    'getMetadata' : IDL.Func([], [Metadata], ['query']),
    'getOperator' : IDL.Func([IDL.Nat], [IDL.Principal], ['query']),
    'getSaleInfo' : IDL.Func([], [IDL.Opt(SaleInfoExt)], ['query']),
    'getTokenInfo' : IDL.Func([IDL.Nat], [TokenInfoExt], ['query']),
    'getTransaction' : IDL.Func([IDL.Nat], [TxRecord], ['query']),
    'getTransactions' : IDL.Func(
        [IDL.Nat, IDL.Nat],
        [IDL.Vec(TxRecord)],
        ['query'],
      ),
    'getUserInfo' : IDL.Func([IDL.Principal], [UserInfoExt], ['query']),
    'getUserTokens' : IDL.Func(
        [IDL.Principal],
        [IDL.Vec(TokenInfoExt)],
        ['query'],
      ),
    'getUserTransactionAmount' : IDL.Func(
        [IDL.Principal],
        [IDL.Nat],
        ['query'],
      ),
    'getUserTransactions' : IDL.Func(
        [IDL.Principal, IDL.Nat, IDL.Nat],
        [IDL.Vec(TxRecord)],
        ['query'],
      ),
    'historySize' : IDL.Func([], [IDL.Nat], ['query']),
    'isApprovedForAll' : IDL.Func(
        [IDL.Principal, IDL.Principal],
        [IDL.Bool],
        ['query'],
      ),
    'logo' : IDL.Func([], [IDL.Text], ['query']),
    'mint' : IDL.Func(
        [IDL.Principal, IDL.Opt(TokenMetadata)],
        [MintResult],
        [],
      ),
    'name' : IDL.Func([], [IDL.Text], ['query']),
    'ownerOf' : IDL.Func([IDL.Nat], [IDL.Principal], ['query']),
    'setApprovalForAll' : IDL.Func([IDL.Principal, IDL.Bool], [TxReceipt], []),
    'setOwner' : IDL.Func([IDL.Principal], [IDL.Principal], []),
    'setSaleInfo' : IDL.Func(
        [IDL.Opt(SaleInfoExt)],
        [IDL.Opt(SaleInfoExt)],
        [],
      ),
    'setTokenMetadata' : IDL.Func([IDL.Nat, TokenMetadata], [TxReceipt], []),
    'symbol' : IDL.Func([], [IDL.Text], ['query']),
    'totalSupply' : IDL.Func([], [IDL.Nat], ['query']),
    'transfer' : IDL.Func([IDL.Principal, IDL.Nat], [TxReceipt], []),
    'transferFrom' : IDL.Func(
        [IDL.Principal, IDL.Principal, IDL.Nat],
        [TxReceipt],
        [],
      ),
  });
  return NFTSale;
};
export const init = ({ IDL }) => {
  return [
    IDL.Text,
    IDL.Text,
    IDL.Text,
    IDL.Text,
    IDL.Principal,
    IDL.Int,
    IDL.Int,
    IDL.Nat,
    IDL.Nat,
    IDL.Nat,
    IDL.Nat,
    IDL.Principal,
    IDL.Nat,
    IDL.Principal,
    IDL.Opt(IDL.Principal),
  ];
};
