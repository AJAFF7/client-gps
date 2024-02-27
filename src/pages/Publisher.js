import React from 'react';


const Publisher = () => {
   
    const currentYear = new Date().getFullYear();

  return (
    <footer className="publisher-footer">
      <div className="publisher-content">
    
        <p>
          <h4> Publisher SE. AJAFF  &copy; {currentYear} </h4>
        </p>
      </div>
    </footer>
  );
};

export default Publisher;
