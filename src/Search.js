import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Search({ data }) {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        console.log(searchWord)
        setWordEntered(searchWord);
        const newFilter = data?.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    const clickHandler = function (event) {
        console.log()
    }

    return (
        <div>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button onClick={clickHandler} variant="outline-success">Search</Button>
            </Form>
        </div>
    );
}



