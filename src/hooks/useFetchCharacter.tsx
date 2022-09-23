import { useEffect, useState } from "react";
import axios from "axios";

interface  Character {
  created:string;
  episode: string[];
  gender: string;
  id:number;
  image: string;
  location: {
    name:string;
    url:string;
  };
  name:string;
  origin: {
    name:string;
    url:string;
  };
  species:string;
  status:string;
  type:string;
  url:string;
}
const useFetchCharacter = (id?: number) => {
  const [character, setCharacter] = useState<Character| {}>({});

  useEffect(() => {
    async function fetchCharacter() {
      const response = await axios(
        `https://rickandmortyapi.com/api/character/${id} `
      );
      console.log(
        "🚀 ~ file: CharacterModal.tsx ~ line 30 ~ fetchCharacter ~ response",
        response.data
      );
      setCharacter(response.data);
    }
    fetchCharacter();
  }, []);

  return { character };
};

export default useFetchCharacter;