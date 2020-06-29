import React from 'react';
import { FiSearch } from 'react-icons/fi';
import './BannerSearch.css'

const BannerSearch = () => {
    return (
        <section className="banner">
            <div className="containerBanner">
                <h1>Procure um filme_</h1>
                <div className="searchContainer">
                    <select name="" id="" className="selectSearch">
                        
                        <option value="">All</option>
                        <option value="">Titles</option>
                        <option value="">TV</option>
                        <option value="">Celebs</option>
                    </select>
                    <input type="text" name="" id="" className="searchInput" placeholder="Pesquisar no Filmow"/>
                    <div className="searchIcon">
                        <FiSearch />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerSearch;