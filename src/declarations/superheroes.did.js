export const idlFactory = ({ IDL }) => {
  const TokenIndex__1 = IDL.Nat32;
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
  const Result = IDL.Variant({ 'ok' : IDL.Bool, 'err' : IDL.Text });
  const Extension = IDL.Text;
  const TokenIndex = IDL.Nat32;
  const Resource = IDL.Record({
    'food' : IDL.Float64,
    'gold' : IDL.Float64,
    'leaf' : IDL.Float64,
    'soil' : IDL.Float64,
  });
  const Time = IDL.Int;
  const ClaimResouceInfo = IDL.Record({
    'id' : TokenIndex,
    'resource' : Resource,
    'claimTimeStamp' : Time,
  });
  const DetailNFT = IDL.Variant({
    'land' : IDL.Record({
      'resource' : Resource,
      'claimableResource' : IDL.Vec(ClaimResouceInfo),
      'workersFarmIds' : IDL.Vec(TokenIndex),
      'nestStaked' : IDL.Opt(TokenIndex),
    }),
    'nest' : IDL.Record({
      'level' : IDL.Nat,
      'inLand' : IDL.Opt(TokenIndex),
      'queenIn' : IDL.Opt(TokenIndex),
    }),
    'queen' : IDL.Record({
      'info' : IDL.Record({
        'foodPerWorker' : IDL.Float64,
        'breedWorkerTime' : Time,
      }),
      'level' : IDL.Nat,
      'inNest' : IDL.Opt(TokenIndex),
    }),
    'worker' : IDL.Record({
      'antState' : IDL.Nat,
      'farmTimestamp' : Time,
      'info' : IDL.Record({ 'farmingTime' : Time, 'farmPerTime' : Resource }),
      'level' : IDL.Nat,
      'inNest' : IDL.Opt(TokenIndex),
      'queenId' : IDL.Opt(TokenIndex),
      'breedTimestamp' : Time,
    }),
  });
  const AttributeMeta = IDL.Record({
    'max' : IDL.Opt(IDL.Text),
    'min' : IDL.Opt(IDL.Text),
    'trait_type' : IDL.Text,
    'value' : IDL.Text,
  });
  const MetadataExt = IDL.Record({
    'tokenId' : IDL.Opt(TokenIndex),
    'name' : IDL.Text,
    'description' : IDL.Text,
    'detail' : DetailNFT,
    'attributes' : IDL.Vec(AttributeMeta),
    'image' : IDL.Text,
  });
  const Result_7 = IDL.Variant({
    'ok' : IDL.Vec(MetadataExt),
    'err' : IDL.Text,
  });
  const CommonError = IDL.Variant({
    'InvalidToken' : TokenIdentifier,
    'Other' : IDL.Text,
  });
  const Result_6 = IDL.Variant({
    'ok' : IDL.Vec(MetadataExt),
    'err' : CommonError,
  });
  const UserState = IDL.Record({ 'resource' : Resource });
  const UserInfoExt = IDL.Record({
    'id' : IDL.Text,
    'userState' : UserState,
    'name' : IDL.Text,
    'tokens' : IDL.Vec(TokenIndex),
  });
  const TokenIdentifier__1 = IDL.Text;
  const Result_5 = IDL.Variant({ 'ok' : MetadataExt, 'err' : CommonError });
  const Result_1 = IDL.Variant({ 'ok' : IDL.Nat, 'err' : CommonError });
  const Result_4 = IDL.Variant({
    'ok' : IDL.Vec(IDL.Tuple(AccountIdentifier__1, Balance__1)),
    'err' : CommonError,
  });
  const Result_3 = IDL.Variant({ 'ok' : IDL.Text, 'err' : IDL.Text });
  const Result_2 = IDL.Variant({ 'ok' : Balance__1, 'err' : CommonError });
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
  const WorkerFarmRequest = IDL.Record({
    'food' : IDL.Vec(TokenIndex),
    'gold' : IDL.Vec(TokenIndex),
    'leaf' : IDL.Vec(TokenIndex),
    'soil' : IDL.Vec(TokenIndex),
    'countIds' : IDL.Nat,
  });
  const AntKingdoms = IDL.Service({
    'acceptCycles' : IDL.Func([], [], []),
    'allRegistry' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Tuple(
              TokenIndex__1,
              IDL.Vec(IDL.Tuple(AccountIdentifier__1, Balance__1)),
            )
          ),
        ],
        ['query'],
      ),
    'availableCycles' : IDL.Func([], [IDL.Nat], ['query']),
    'balance' : IDL.Func([BalanceRequest], [BalanceResponse], ['query']),
    'breedAntWorkder' : IDL.Func([TokenIndex__1], [Result], []),
    'changeAdmin' : IDL.Func([IDL.Principal], [], []),
    'claimResourceInLand' : IDL.Func(
        [TokenIndex__1, TokenIndex__1],
        [Result],
        [],
      ),
    'claimWorkerEgg' : IDL.Func([TokenIndex__1], [Result], []),
    'claiming' : IDL.Func([], [Result], []),
    'extensions' : IDL.Func([], [IDL.Vec(Extension)], ['query']),
    'getDataByLandId' : IDL.Func([TokenIndex__1], [Result_7], []),
    'getTokensMetadata' : IDL.Func([], [IDL.Vec(MetadataExt)], []),
    'getUserAvailableWorker' : IDL.Func(
        [AccountIdentifier__1],
        [Result_6],
        ['query'],
      ),
    'getUserInfo' : IDL.Func([AccountIdentifier__1], [UserInfoExt], ['query']),
    'getUserTokens' : IDL.Func([AccountIdentifier__1], [Result_6], ['query']),
    'metadata' : IDL.Func([TokenIdentifier__1], [Result_5], ['query']),
    'numberOfTokenHolders' : IDL.Func(
        [TokenIdentifier__1],
        [Result_1],
        ['query'],
      ),
    'numberOfTokens' : IDL.Func([], [IDL.Nat], ['query']),
    'registry' : IDL.Func([TokenIdentifier__1], [Result_4], ['query']),
    'setTokensMetadata' : IDL.Func([IDL.Vec(MetadataExt)], [Result], []),
    'stakeNestInLand' : IDL.Func(
        [TokenIndex__1, TokenIndex__1],
        [Result_3],
        [],
      ),
    'stakeQueenInNest' : IDL.Func(
        [TokenIndex__1, TokenIndex__1],
        [Result_3],
        [],
      ),
    'supply' : IDL.Func([TokenIdentifier__1], [Result_2], ['query']),
    'transfer' : IDL.Func([TransferRequest], [TransferResponse], []),
    'updateUser' : IDL.Func([IDL.Text], [Result_1], []),
    'workerFarmInLand' : IDL.Func(
        [WorkerFarmRequest, TokenIndex__1],
        [Result],
        [],
      ),
  });
  return AntKingdoms;
};
export const init = ({ IDL }) => { return [IDL.Principal]; };
