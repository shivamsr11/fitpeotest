import * as React from "react";
import { CompactTable } from "@table-library/react-table-library/compact";

const nodes = [
  {
    id: '0',
    name: 'Abstract 3D',
    image: "https://cdn-icons-png.flaticon.com/512/189/189715.png",

    type: '$42.99',
    isComplete: '30 in stock',
    nodes: 23,
  },
  {
    id: '1',
    name: 'Sarphens Illustration',
    image: "https://cdn-icons-png.flaticon.com/512/189/189715.png",
    type: '$45.99',
    isComplete: '32 in stock',
    nodes: 20,
  },
];

const COLUMNS = [
  {
    label: 'Product Name', renderCell: (item) => item.name
  },
  {
    label: 'Stock',
    renderCell: (item) => item.isComplete.toString(),
  },
  { label: 'Price', renderCell: (item) => item.type },

  { label: 'Total Sales', renderCell: (item) => item.nodes },
];
const options = [
  {
    label: "last 30 days",
    value: "last 30 days",
  },
  {
    label: "last 25 days",
    value: "last 25 days",
  }
];

const List = () => {
  let data = { nodes };
  const [search, setSearch] = React.useState("");
  const [filter, setFilter] = React.useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  data = {
    nodes: data.nodes.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    ),
  };
  const handleChange = (e) => {
    console.log("Fruit Selected!!", e.target.value);
    setFilter(e.target.value);
  }
  return (
    <div className="bg-gray-100 bg-white h-[20h] rounded-lg">
      <div className="flex justify-between pt-1">
        <div className="font-bold pl-2">Product Sell</div>
        <div>
          <input id="search" type="text" className="border border-gray-400  rounded-lg mr-2 mt-1" value={search} onChange={handleSearch} placeholder="🔎 Search" />
          <select className="mr-2 mt-1 rounded-lg" name="cars" id="cars" value={filter} onChange={handleChange}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>

            ))}
          </select>
        </div>
      </div  >
      <div className="bg-white pl-2 pt-1 pb-6 rounded-lg"><CompactTable columns={COLUMNS} data={data} />
      </div>
    </div>);
};

export default List;
