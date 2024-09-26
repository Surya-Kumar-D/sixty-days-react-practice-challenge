import { useQuery } from "react-query";
import { useStore } from "./store";
import { useEffect, useMemo, useState } from "react";

function Day11() {
  const [filters, setFilters] = useState([]);
  const { filter, setFilter } = useStore();
  const { data } = useQuery({
    queryKey: ["users", { filters }],
    queryFn: async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      return await res.json();
    },
  });

  useMemo(
    function () {
      if (data) {
        const city = data.map((user) => user.address.city);

        setFilters(city);
      }
    },
    [data]
  );
  return (
    <div>
      <select
        name=""
        id=""
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        {filters.map((filter) => (
          <option key={filter}>{filter}</option>
        ))}
      </select>

      {data
        ? data.map((user) =>
            user.address.city === filter ? <div>{user.name}</div> : null
          )
        : null}
    </div>
  );
}

export default Day11;
