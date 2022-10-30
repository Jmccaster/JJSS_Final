import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Search({ setSearchProducts }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState({ val: "" });

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    try {
      //   console.log(searchTerm.val);

      setSearchProducts(searchTerm.val);

      navigate(`/api/products/search/${searchTerm.val}`);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <Form className="d-flex" onSubmit={handleFormSubmission}>
        {/* <div width="2000">dff</div> */}
        <Form.Control
          type="search"
          placeholder="Search Products"
          className="me-2 "
          // style={{ width: "100%" }}
          aria-label="Search"
          value={searchTerm.val}
          onChange={(e) => setSearchTerm({ val: e.target.value })}
        />

        <Button variant="secondary" type="submit" className="w-50">
          Search
        </Button>
      </Form>
    </>
  );
}

export default Search;
