import React, {useEffect} from 'react'
import { metadata } from './nft'
import { superheroes } from '../../../declarations';

function Admin() {

    useEffect(async () => {
        const res = await superheroes.getTokensMetadata();
        console.log(res);
    }, [])
    

    const onSubmit = async() => {
        try {
        console.log(process.env.SUPERHEROES_CANISTER_ID);
        const newArr = metadata.map(el => ({nonfungible: el}))
        console.log(metadata);
        const res = await superheroes.setTokensMetadata([metadata[0]])
        console.log(res);
        } catch(er) {
            console.log(er);
        }
    }

  return (
    <>
    change metadata list
      <div onClick={onSubmit}> Submit</div>
    </>
  )
}

export default Admin