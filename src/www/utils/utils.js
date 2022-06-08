export const getRemainingTime = (time) => {
    const remainTime =  Number(time/BigInt(Math.pow(10, 9))) - (Date.now()/Math.pow(10,3)) 
   return remainTime >0 ?remainTime: 0
}