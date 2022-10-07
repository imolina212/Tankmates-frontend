import React from 'react'

import './FilterSection.scss'


function FilterSection() {
    
    return (
        <div className="filter">
            <div className="filter__category">
                <p>Category</p>
                <ul>
                    <li><a href="#" >Pond Shop</a></li>
                    <li><a href="#" >Décor</a></li>
                    <li><a href="#" >Filters &#38; Media</a></li>
                    <li><a href="#" >Water Care</a></li>
                    <li><a href="#" >Cleaners &#38; Pumps</a></li>
                    <li><a href="#" >Food</a></li>
                    <li><a href="#" >Heating &#38; Lighting</a></li>
                    <li><a href="#" >Tanks &#38; Aquariums</a></li>
                    <li><a href="#" >Health &#38; Wellness</a></li>
                    <li><a href="#" >Feeders</a></li>
                    <li><a href="#" >Gifts &#38; Books</a></li>
                </ul>
            </div>
            <div className="filter__fish-type">
                <p>Fish Type</p>
                <ul>
                    <li>
                        <a href="#" ><input type="checkbox"/>Tropical Freshwater</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>Marine Fish</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>Koi &#38; Pond Fish</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>Goldfish</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>Betta</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>Cichlid</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>Invertebrates</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>Bottom Feeders</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>Discus</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>Feeders</a>
                    </li>
                </ul>
            </div>
            <div className="filter__brand">
                <p>Brand</p>
                <ul>
                    <li>
                        <a href="#" ><input type="checkbox"/>API</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>Aqueon</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>Aquaclear</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>CaribSea</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>Cobalt Aquatics</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>Dr. Tim's Aquatics</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>Eheim</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>Fluval</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>Fritz</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>Hikari</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>Kent</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>Marina</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>Marineland</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>Northfin</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>Penn-plax</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>Tetra</a>
                    </li>
                </ul>
            </div>
            <div className="filter__category">
                <p>Price</p>
                <ul>
                    <li>
                        <a href="#" ><input type="checkbox"/>Less than $10</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>$10 to $20</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>$20 to $30</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>$30 to $40</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>$40 to $50</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>$50 &#38; Above</a>
                    </li>
                </ul>
            </div>
            <div className="filter__category">
                <p>Customer rating</p>
                <ul>
                    <li>
                        <a href="#" ><input type="checkbox"/>4 &#38; up</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>3 &#38; up</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>2 &#38; up</a>
                    </li>
                    <li>
                        <a href="#" ><input type="checkbox"/>1 &#38; up</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FilterSection