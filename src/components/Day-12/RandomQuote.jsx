import { useState } from "react";
import { set } from "react-hook-form";
import { useQuery } from "react-query";

function RandomQuote() {
  const [getRandomQuote, setGetRandomQuote] = useState(false);
  const { data, refetch } = useQuery({
    queryKey: ["quote"],
    queryFn: async () => {
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();
      return data;
    },
    enabled: getRandomQuote,
  });

  return (
    <div className=" p-[10rem] flex flex-col justify-center items-center h-[100vh] text-[5rem] text-[white] bg-[#61dafb]">
      <button
        onClick={() => {
          setGetRandomQuote(true);
          refetch();
        }}
        className="items-center bg-[#382323] px-5 py-8 rounded-md"
      >
        Get Random Quote
      </button>
      {data && <div>{data.quote}</div>}
    </div>
  );
}

export default RandomQuote;
