import { useEffect, useRef, useState } from "react";
import { sloganAPI } from "../utils/sloganAPI";
import { Hr } from "./Hr";
import { Pagination } from "./Pagination";
import { SloganCard } from "./SloganCard";

export function SloganSection() {
  const searchQuery = useRef("cozy");
  const [slogans, setSlogans] = useState<string[]>([]);

  const fetchSlogan = async (pageNumber?: number) => {
    const fetchedSlogans = await sloganAPI(pageNumber);
    setSlogans(fetchedSlogans);
  };

  useEffect(() => {
    fetchSlogan();
  }, []);

  return (
    <div>
      <div>
        <input
          type={"search"}
          defaultValue={searchQuery.current}
          className="border py-2 px-4 w-80"
          onChange={(event) => (searchQuery.current = event.target.value)}
        />
      </div>
      <button
        className="bg-primary text-white py-2 px-6 rounded my-12"
        onClick={fetchSlogan.bind(null, 1)}
      >
        Generate slogans
      </button>
      <Hr />
      <div className="flex items-center mt-12">
        <div className="flex-grow">
          We have generated {Math.floor(Math.random() * 1e3)} slogans for “
          {searchQuery.current}”
        </div>
        <button className="border-primary border text-primary py-2 px-6 rounded-sm">
          Download all
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8 mb-12">
        {slogans.map((slogan, index) => (
          <SloganCard title={slogan} key={index} />
        ))}
      </div>

      <Hr />
      <Pagination onChange={fetchSlogan} />
    </div>
  );
}
