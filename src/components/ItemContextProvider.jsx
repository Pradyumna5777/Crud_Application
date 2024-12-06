import React, { useState } from "react";
import ItemContext from "./itemContext";

const ItemContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [form, setForm] = useState({
    fullName: "",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState("0vw");
  const[editItem,setEditItem]=useState();
  const[allItems,setAllItems]=useState(items)


  const filteredItems = items.filter((item) =>
    item.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <ItemContext.Provider
      value={{
        allItems,setAllItems,
        editItem,setEditItem,
        filteredItems,
        setSearchTerm,
        searchTerm,
        items,
        setItems,
        slide,
        setSlide,
        form,
        setForm,
        editIndex,
        setEditIndex,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
