import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [serachParams, setSearchParam] = useSearchParams();
  const sortBy = serachParams.get("sortBy") || "";
  function handleChange(e) {
    serachParams.set("sortBy", e.target.value);
    setSearchParam(serachParams);
  }
  return (
    <Select
      options={options}
      type="white"
      value={sortBy}
      onChange={handleChange}
    />
  );
}

export default SortBy;
