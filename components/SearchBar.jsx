import React, { useState } from "react";
import { MdClose } from "react-icons/md";
//import "./Search.scss";
import useFetch from "../components/hooks/useFetch";
import Link from "next/link";
//import { useNavigate } from "react-router-dom";
//import Link from "next/link";

const Search = ({ setSearchModal }) => {
    const [query, setQuery] = useState("");
    //const navigate = useNavigate();

    const onChange = (e) => {
        setQuery(e.target.value);
    };

    let { data } = useFetch(
        `/api/products?populate=*&filters[name][$contains]=${query.trim().toLocaleLowerCase()}`
    );

    if (!query.length) {
        data = null;
    }

    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"
                    value={query}
                    onChange={onChange}
                />
                <MdClose
                    className="close-btn"
                    onClick={() => setSearchModal(false)}
                />
            </div>
            <div className="search-result-content">
                {!data?.data?.length && (
                    <div className="start-msg">
                        Start typing to see products you are looking for.
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-0 md:px-0">
                    {data?.data?.map((item) => (
                      <Link  href={`/product/${item.attributes.slug}`} key={item.id}>
                        <div className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
                            >
                            <div className="image-container">
                                <img className="suret"
                                    src={
                                        
                                        item.attributes.image.data[0].attributes
                                            .url
                                    }
                                />
                            </div>
                            <div className="prod-details">
                                <span className="name">
                                    {item.attributes.name}
                                </span>
                            </div>
                        </div>
                      </Link>  
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;
