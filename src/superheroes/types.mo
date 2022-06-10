/**
 * Module     : types.mo
 * Copyright  : 2021 Rocklabs Team
 * License    : Apache 2.0 with LLVM Exception
 * Stability  : Experimental
 */

import Time "mo:base/Time";
import TrieSet "mo:base/TrieSet";
import ExtCore "/Lib/Ext/ext/Core";

module {

    type AccountIdentifier = ExtCore.AccountIdentifier;
     type TokenIndex = ExtCore.TokenIndex;

    public type Metadata = {
        var name: Text;
        var description : Text;
        var image: Text;
        var tokenId: TokenIndex;
        var attributes: [AttributeMeta];
        var detail: DetailNFT;
    };

      public type LevelData = {
        name: Text;
        info: [InfoLevel];
    };

    public type InfoLevel = {
        rarity: Text;
        info: [CostInfo];
    };

    public type CostInfo = {
        level: Nat;
        costResource: Resource;
        nextLevel : {
                #queen : {
                    foodPerWorker : Float;
                    breedWorkerTime: Time.Time;
                };
                #nest : {
                    limitAnt: Nat;
                };
                #worker: {
                    farmPerTime: Resource
                };
                };
    };

    public type DetailNFT = {
        #queen : {
            level: Nat;
            inNest: ?TokenIndex;
            breedingWorkerId : TokenIndex;
            info : {
            breedWorkerTime: Time.Time;
            foodPerWorker: Float;
            }
        };
        #nest : {
            level: Nat;
            queenIn: ?TokenIndex;
            inLand: ?TokenIndex;
            limitAnt: Nat;
        };
        #worker : {
            level: Nat;
            inNest: ?TokenIndex;
            queenId: ?TokenIndex;
            antState: Nat;
            breedTimestamp: Time.Time;
            farmTimestamp: Time.Time;
            info: {
                farmingTime: Time.Time;
                farmPerTime: Resource;
            }
        };
        #land:{
            resource: Resource;
            nestStaked: ?TokenIndex;
            claimableResource : [ClaimResouceInfo];
            info: {
                farmingTime: Time.Time;
            }
        }
    };

    public type ClaimResouceInfo = {
        resource: Resource;
        claimTimeStamp: Time.Time;
        id: TokenIndex;
            workersFarmIds: [TokenIndex];
    };

    public type Resource = {
             soil: Float;
             leaf: Float;
             gold: Float;
             food: Float;
    };

    public type ResourceInt = {
             var soil: Float;
             var leaf: Float;
             var gold: Float;
             var food: Float;
    };

    public type WorkerFarmRequest = {
        soil: [TokenIndex];
        leaf: [TokenIndex];
        gold: [TokenIndex];
        food: [TokenIndex];
        countIds: Nat;
    };


    public type MetadataExt = {
         name: Text;
        description : Text;
        image: Text;
        attributes: [AttributeMeta];
        detail: DetailNFT;
        tokenId: ?TokenIndex;
    };

    public type AttributeMeta = {
        trait_type: Text;
        value: Text;
        max: ?Text;
        min: ?Text;
    };

     public type UserInfo = {
        var name: Text;
        var id: AccountIdentifier;
        var tokens: TrieSet.Set<TokenIndex>;              // user's tokens
        var userState: UserState;
    };

    public type UserState = {
        resource: Resource;
    };

    
    public type UserInfoExt = {
        name: Text;
        id: Text;
        tokens: [TokenIndex];
        userState: UserState;
    };

    public type Location = {
        #InCanister: Blob; // NFT encoded data
        #AssetCanister: (Principal, Blob); // asset canister id, storage key
        #IPFS: Text; // IPFS content hash
        #Web: Text; // URL pointing to the file
    };
    public type Attribute = {
        key: Text;
        value: Text;
    };
    public type TokenMetadata = {
        tokenUri: Text;
    };

    public type TokenInfo = {
        index: Nat;
        var owner: Principal;
        var metadata: ?TokenMetadata;
        var operator: ?Principal;
        timestamp: Time.Time;
    };

    public type TokenInfoExt = {
        index: Nat;
        owner: Principal;
        metadata: ?TokenMetadata;
        operator: ?Principal;
        timestamp: Time.Time;
    };

     public type OrderInfo = {
         index: Nat;
         var price: Nat;
         owner: Principal;
         tokenId: Nat;
    };


    /// Update call operations
    public type Operation = {
        #mint: ?TokenMetadata;  
        #burn;
        #transfer;
        #transferFrom;
        #approve;
        #approveAll;
        #revokeAll; // revoke approvals
        #setMetadata;
        #createOrder
    };
    /// Update call operation record fields
    public type Record = {
        #user: Principal;
        #metadata: ?TokenMetadata; // op == #setMetadata
    };
    public type TxRecord = {
        caller: Principal;
        op: Operation;
        index: Nat;
        tokenIndex: ?Nat;
        from: Record;
        to: Record;
        timestamp: Time.Time;
    };
};