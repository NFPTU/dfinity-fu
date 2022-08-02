export const idlFactory = ({ IDL }) => {
  const TokenIndex__1 = IDL.Nat32;
  const AccountIdentifier = IDL.Text;
  const Balance = IDL.Nat;
  const TokenIdentifier = IDL.Text;
  const AccountIdentifier__1 = IDL.Text;
  const User = IDL.Variant({
    'principal' : IDL.Principal,
    'address' : AccountIdentifier__1,
  });
  const BalanceRequest = IDL.Record({
    'token' : TokenIdentifier,
    'user' : User,
  });
  const Balance__1 = IDL.Nat;
  const CommonError__1 = IDL.Variant({
    'InvalidToken' : TokenIdentifier,
    'Other' : IDL.Text,
  });
  const BalanceResponse = IDL.Variant({
    'ok' : Balance__1,
    'err' : CommonError__1,
  });
  const Result = IDL.Variant({ 'ok' : IDL.Bool, 'err' : IDL.Text });
  const Result_10 = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
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
    'workersFarmIds' : IDL.Vec(TokenIndex),
  });
  const DetailNFT = IDL.Variant({
    'army' : IDL.Record({
      'antState' : IDL.Nat,
      'kingdomId' : TokenIndex,
      'queenId' : TokenIndex,
    }),
    'land' : IDL.Record({
      'resource' : Resource,
      'claimableResource' : IDL.Vec(ClaimResouceInfo),
      'info' : IDL.Record({ 'farmingTime' : Time }),
      'nestStaked' : IDL.Opt(TokenIndex),
      'inKingdom' : TokenIndex,
    }),
    'nest' : IDL.Record({
      'level' : IDL.Nat,
      'limit' : IDL.Nat,
      'inLand' : IDL.Opt(TokenIndex),
      'queenIn' : IDL.Opt(TokenIndex),
    }),
    'queen' : IDL.Record({
      'info' : IDL.Record({
        'resourcePerWorker' : Resource,
        'breedWorkerTime' : Time,
      }),
      'level' : IDL.Nat,
      'inNest' : IDL.Opt(TokenIndex),
      'breedingWorkerId' : TokenIndex,
    }),
    'worker' : IDL.Record({
      'antState' : IDL.Nat,
      'farmTimestamp' : Time,
      'info' : IDL.Record({ 'farmingTime' : Time, 'farmPerTime' : Resource }),
      'inNest' : IDL.Opt(TokenIndex),
      'queenId' : IDL.Opt(TokenIndex),
      'breedTimestamp' : Time,
    }),
    'kingdom' : IDL.Record({ 'landId' : IDL.Vec(TokenIndex) }),
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
  const Result_9 = IDL.Variant({
    'ok' : IDL.Vec(MetadataExt),
    'err' : IDL.Text,
  });
  const CommonError = IDL.Variant({
    'InvalidToken' : TokenIdentifier,
    'Other' : IDL.Text,
  });
  const Result_8 = IDL.Variant({
    'ok' : IDL.Vec(MetadataExt),
    'err' : CommonError,
  });
  const UserState = IDL.Record({
    'resource' : Resource,
    'limitAnt' : IDL.Nat,
    'kingdomId' : TokenIndex,
    'currentAnt' : IDL.Nat,
  });
  const UserInfoExt = IDL.Record({
    'id' : IDL.Text,
    'userState' : UserState,
    'name' : IDL.Text,
    'tokens' : IDL.Vec(TokenIndex),
  });
  const TokenIdentifier__1 = IDL.Text;
  const Result_7 = IDL.Variant({ 'ok' : MetadataExt, 'err' : CommonError });
  const Result_2 = IDL.Variant({ 'ok' : IDL.Nat, 'err' : CommonError });
  const Result_6 = IDL.Variant({
    'ok' : IDL.Vec(IDL.Tuple(AccountIdentifier, Balance)),
    'err' : CommonError,
  });
  const CostInfo = IDL.Record({
    'nextLevel' : IDL.Variant({
      'nest' : IDL.Record({ 'limit' : IDL.Nat }),
      'queen' : IDL.Record({
        'resourcePerWorker' : Resource,
        'breedWorkerTime' : Time,
      }),
      'worker' : IDL.Record({ 'farmPerTime' : Resource }),
    }),
    'costResource' : Resource,
    'level' : IDL.Nat,
  });
  const InfoLevel = IDL.Record({
    'info' : IDL.Vec(CostInfo),
    'rarity' : IDL.Text,
  });
  const LevelData = IDL.Record({
    'info' : IDL.Vec(InfoLevel),
    'name' : IDL.Text,
  });
  const Result_5 = IDL.Variant({ 'ok' : IDL.Vec(LevelData), 'err' : IDL.Text });
  const Result_3 = IDL.Variant({ 'ok' : IDL.Text, 'err' : IDL.Text });
  const Result_4 = IDL.Variant({ 'ok' : Balance, 'err' : CommonError });
  const Result_1 = IDL.Variant({ 'ok' : MetadataExt, 'err' : IDL.Text });
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
              IDL.Vec(IDL.Tuple(AccountIdentifier, Balance)),
            )
          ),
        ],
        ['query'],
      ),
    'availableCycles' : IDL.Func([], [IDL.Nat], ['query']),
    'balance' : IDL.Func([BalanceRequest], [BalanceResponse], ['query']),
    'breedAntArmy' : IDL.Func([TokenIndex__1], [Result], []),
    'breedAntWorkder' : IDL.Func([TokenIndex__1], [Result], []),
    'buy' : IDL.Func([IDL.Nat], [Result_10], []),
    'cancelOrder' : IDL.Func([IDL.Nat], [Result_10], []),
    'changeAdmin' : IDL.Func([IDL.Principal], [], []),
    'claimResourceInLand' : IDL.Func(
        [TokenIndex__1, TokenIndex__1],
        [Result],
        [],
      ),
    'claimWorkerEgg' : IDL.Func([TokenIndex__1], [Result], []),
    'claiming' : IDL.Func([], [Result], []),
    'createOrder' : IDL.Func([TokenIndex__1, IDL.Nat], [Result_10], []),
    'extensions' : IDL.Func([], [IDL.Vec(Extension)], ['query']),
    'getDataByLandId' : IDL.Func([TokenIndex__1], [Result_9], []),
    'getTokensMetadata' : IDL.Func([], [IDL.Vec(MetadataExt)], []),
    'getUserAvailableWorker' : IDL.Func(
        [AccountIdentifier],
        [Result_8],
        ['query'],
      ),
    'getUserInfo' : IDL.Func([AccountIdentifier], [UserInfoExt], ['query']),
    'getUserOrders' : IDL.Func([AccountIdentifier], [Result_8], ['query']),
    'getUserTokens' : IDL.Func([AccountIdentifier], [Result_8], ['query']),
    'metadata' : IDL.Func([TokenIdentifier__1], [Result_7], ['query']),
    'numberOfTokenHolders' : IDL.Func(
        [TokenIdentifier__1],
        [Result_2],
        ['query'],
      ),
    'numberOfTokens' : IDL.Func([], [IDL.Nat], ['query']),
    'registry' : IDL.Func([TokenIdentifier__1], [Result_6], ['query']),
    'setLevelMetadata' : IDL.Func([IDL.Vec(LevelData)], [Result_5], []),
    'setTokensMetadata' : IDL.Func([IDL.Vec(MetadataExt)], [Result], []),
    'stakeLandToKingdom' : IDL.Func(
        [TokenIndex__1, TokenIndex__1],
        [Result],
        [],
      ),
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
    'supply' : IDL.Func([TokenIdentifier__1], [Result_4], ['query']),
    'transfer' : IDL.Func([IDL.Principal, TokenIndex__1], [Result], []),
    'unStakeLandToKingdom' : IDL.Func(
        [TokenIndex__1, TokenIndex__1],
        [Result],
        [],
      ),
    'unStakeNestInLand' : IDL.Func(
        [TokenIndex__1, TokenIndex__1],
        [Result_3],
        [],
      ),
    'unStakeQueenInNest' : IDL.Func(
        [TokenIndex__1, TokenIndex__1],
        [Result_3],
        [],
      ),
    'updateUser' : IDL.Func([IDL.Text], [Result_2], []),
    'upgradeLevelNest' : IDL.Func([TokenIndex__1], [Result_1], []),
    'upgradeLevelQueen' : IDL.Func([TokenIndex__1], [Result_1], []),
    'workerFarmInLand' : IDL.Func(
        [WorkerFarmRequest, TokenIndex__1],
        [Result],
        [],
      ),
  });
  return AntKingdoms;
};
export const init = ({ IDL }) => {
  return [IDL.Principal, IDL.Principal, IDL.Nat];
};
