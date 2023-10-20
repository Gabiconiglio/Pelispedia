import React from "react";
import Pagination from "react-bootstrap/Pagination";
import "../Paginator/Paginator.css";

function Paginador({ currentPage, onPageChange, totalPages }) {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <Pagination className="pag">
      <Pagination.First onClick={() => handlePageChange(1)} />
      <Pagination.Prev
        onClick={() => {
          if (currentPage > 1) {
            handlePageChange(currentPage - 1);
          }
        }}
      />

      {Array.from({ length: totalPages }, (_, index) => (
        <Pagination.Item
          key={index}
          active={currentPage === index + 1}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </Pagination.Item>
      ))}

      <Pagination.Next
        onClick={() => {
          if (currentPage < 20) {
            handlePageChange(currentPage + 1);
          }
        }}
      />
      <Pagination.Last onClick={() => handlePageChange(totalPages)} />
    </Pagination>
  );
}

export default Paginador;
