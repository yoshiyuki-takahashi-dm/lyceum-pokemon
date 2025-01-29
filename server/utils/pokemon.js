import { ProxyAgent } from "proxy-agent";
import { ofetch } from "ofetch";
import fs from 'fs';

// export HTTP_PROXY="~~~~"に設定しているものを見に行く
const agent = new ProxyAgent({});


/** ポケモンの取得 */
export const findPokemon = async (name) => {
  console.log(name)
  try
  {
    const pokemon = await ofetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      agent,
      timeout: 3000
    });
    return pokemon;
  }catch (error){
    console.error('FetchError:', error.message);
    console.error('ErrorDetail:', error);
  }

};
