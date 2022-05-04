import { useState, useReducer } from 'react'
import Context from './Context'
import reducer, { initState } from './reducer'
import { superheroes } from "../../declarations";
import { customAxios } from "../utils/custom-axios";

function Provider({ children }) {
    const [prinpId, setPrinpId] = useState();
    const [state, dispatch] = useReducer(reducer, initState)

    useEffect(async () => {
        const connected = await window.ic.plug.isConnected();
        getListAll()
        console.log(connected, "connected");
        if (connected) {
            const principalId = await window?.ic?.plug?.agent?.getPrincipal();
            setPrinpId(principalId);
            console.log(principalId);
        }
    }, []);

    const getListAll = async  () => {
        const res = await superheroes.getAllTokens();
        const promise4all = Promise.all(
            res.map(function (el) {
                return customAxios(el.metadata[0]?.tokenUri);
            })
        );
        const resu = await promise4all;
        console.log(resu);
        setListAllNFt(resu);
    };

    const value = {
        prinpId
    }


    return (
        <Context.Provider value={value}>
            { children }
        </Context.Provider>
    )
}

export default Provider