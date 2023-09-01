// import React, { useState } from "react";
// import axios from "axios";
// import ProductCard from "./ProductCard"; // Import your ProductCard component

// const ProductSearch = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null); // New state for selected product
//   const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:8080/api/product/search?query=${searchTerm}`
//       );
//       setSearchResults(response.data);
//     } catch (error) {
//       console.error("Error searching products:", error);
//     }
//   };

//   const openModal = (product) => {
//     setSelectedProduct(product);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     setIsModalOpen(false);
//   };
//   const ProductCardModal = ({ product, closeModal, addToCart }) => {
//     if (!product) {
//       return null;
//     }
  
//     return (
//       <div className="modal">
//         <div className="modal-content">
//           <span className="close" onClick={closeModal}>
//             &times;
//           </span>
//           <ProductCard item={product} />
//           <div className="text-center">
//             <button onClick={() => addToCart(product)} className="btn bg-color custom-bg-text">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };
  

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter product title"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>

//       {searchResults.length > 0 && (
//         <div>
//           <h3>Search Results:</h3>
//           <ul>
//             {searchResults.map((product) => (
//               <li key={product.id}>
//                 <button onClick={() => openModal(product)}>
//                   {product.title}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {selectedProduct && (
//         <ProductCardModal
//           product={selectedProduct}
//           closeModal={closeModal}
          
//         />
//       )}
//     </div>
//   );
// };

// export default ProductSearch;

import React, { useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/product/search?query=${searchTerm}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching products:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter product title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchResults.length > 0 && (
        <div>
          <h3>Search Results:</h3>
          <div className="col-md-10">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              
                {searchResults.map((searchResults) => {
                  return <ProductCard item={searchResults} />;
                })}
              </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;




