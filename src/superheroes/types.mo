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
        name: Text;
        description : Text;
        image: Text;
        // attributes: ?[AttributeMeta];
        // detail: ?[DetailNFT];
    };

    public type DetailNFT = {

    };

    public type MetadataExt = {
         name: Text;
        description : Text;
        image: Text;
        attributes: ?[AttributeMeta]
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
    };

    
    public type UserInfoExt = {
        name: Text;
        id: Text;
        tokens: [Nat];
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