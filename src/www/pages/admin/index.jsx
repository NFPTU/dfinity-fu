import React, {useEffect} from 'react'
import { metadata } from './nft'
import { useCanister, useConnect } from "@connect2ic/react"


function Admin() {
  const [superheroes, { loading, error }] = useCanister("superheroes")
  const { principal, isConnected, disconnect } = useConnect();

    const onSubmit = async() => {
        try {
        console.log(process.env.SUPERHEROES_CANISTER_ID);
        const newArr = metadata.map(el => ({nonfungible: el}))
        console.log(metadata);
        const res = await superheroes.setTokensMetadata(metadata)
        console.log(res);
        const response = await superheroes.getTokensMetadata();
        console.log(response);
        } catch(er) {
            console.log(er);
        }
    }

    const onClaim= async () => {
      try {
        const res = await superheroes.claiming()
        console.log(res,);
        } catch(er) {
            console.log(er);
        }
    }

    const onGetData = async () => {
      console.log(superheroes, principal.toString());
      const response = await superheroes.getTokensMetadata();
      const resp = await superheroes.getUserTokens(principal.toString())
        console.log(response, resp);
    }

  return (
    <>
    <div onClick={onGetData}> get Data</div>
      <div onClick={onSubmit}> Submit</div>
      <div onClick={onClaim}> Claiming NFT</div>
    </>
  )
}

export default Admin