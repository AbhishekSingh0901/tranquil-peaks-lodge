import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort By name (A-Z)" },
          { value: "name-desc", label: "Sort By name (Z-A)" },
          {
            value: "regualarPrice-asc",
            label: "Sort By name Price (low first)",
          },
          {
            value: "regualarPrice-desc",
            label: "Sort By name Price (high first)",
          },
          {
            value: "maxCapacity-asc",
            label: "Sort By name Capacity (low first)",
          },
          {
            value: "maxCapacity-desc",
            label: "Sort By name Capacity (high first)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
