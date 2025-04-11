// ✅ CustomPagination.jsx
import React from 'react';
import { usePagination } from '@mantine/hooks';
import './CustomPagination.css'; // 🔧 You can style this separately

const CustomPagination = ({ totalPages, activePage, setActivePage }) => {
  const pagination = usePagination({
    total: totalPages,
    page: activePage,
    onChange: setActivePage,
    siblings: 1,
    boundaries: 1,
  });

  return (
    <div className="pagination-wrapper">
      <button
        className="page-button nav"
        disabled={activePage === 1}
        onClick={() => setActivePage(activePage - 1)}
      >
        Previous
      </button>

      {pagination.range.map((page, index) =>
        page === 'dots' ? (
          <span key={index} className="page-button ellipsis">…</span>
        ) : (
          <button
            key={index}
            className={`page-button ${activePage === page ? 'active' : ''}`}
            onClick={() => setActivePage(page)}
          >
            {page}
          </button>
        )
      )}

      <button
        className="page-button nav"
        disabled={activePage === totalPages}
        onClick={() => setActivePage(activePage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default CustomPagination;
