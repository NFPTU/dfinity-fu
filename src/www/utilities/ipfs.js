import { Web3Storage } from "web3.storage";
import { Buffer } from "buffer";

export const client = new Web3Storage({
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDZlQTA4OGRjZjBiNmYzQzIyMUNDQ0Y5YzYwYUNjMEE4YTEwN2NmNDQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDc2MjIzMzY0MTYsIm5hbWUiOiJJQ1AifQ.Zu8SEjSkth5bfhWaURGaSAxVN7VqcssiuOhk-ogvkFQ",
});

export const retrieveImageFromIPFS = async (cid, imageName) => {
  const res = await fetch(`https://${cid}.ipfs.dweb.link/${imageName}`);
  const imageBlob = await res.blob();
  const imageFromWeb3 = URL.createObjectURL(imageBlob);
  return imageFromWeb3;
};

export const retrieveImageFromWeb3Storage = async (cid) => {
  let res = await client.get(`${cid}`);
  if (!res?.ok) {
    throw new Error(
      `failed to get ${cid} - [${res?.status}] ${res?.statusText}`
    );
  }
  const file = await res?.files();
  const bufferArray = await file[0].arrayBuffer();
  return "data:image/png;base64," + Buffer.from(bufferArray).toString("base64");
};