import React from 'react'

import './FilterSection.scss'
import {HiStar, HiOutlineStar} from 'react-icons/hi';


function FilterSection() {
    
    return (
        <div className="filter">
            <div className="filter__category">
                <h3>Category</h3>
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
            <div className="filter__category">
                <h3>Fish Type</h3>
                <ul>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="tropical-freshwater" name="fish-type" value="Tropical Freshwater"/>
                            <label for="tropical-freshwater">Tropical Freshwater</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="marine-fish" name="fish-type" value="Marine Fish" />
                            <label for="marine-fish">Marine Fish</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="pond-fish" name="fish-type" value="Koi & Pond Fish"/>
                            <label for="pond-fish">Koi &#38; Pond Fish</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="goldfish" name="fish-type" value="Goldfish"/>
                            <label for="goldfish">Goldfish</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="betta" name="fish-type" value="Betta"/>
                            <label for="betta">Betta</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="cichlid" name="fish-type" value="Cichlid"/>
                            <label for="cichlid">Cichlid</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="invertebrates" name="fish-type" value="Invertebrates"/>
                            <label for="invertebrates">Invertebrates</label>    
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="bottom-feeders" name="fish-type" value="Bottom Feeders"/>
                            <label for="bottom-feeders">Bottom Feeders</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="discus" name="fish-type" value="Discus"/>
                            <label for="discus">Discus</label>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="filter__category">
                <h3>Brand</h3>
                <ul>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="api" name="brand-name" value="API"/>
                            <label for="api">API</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="aqueon" name="brand-name" value="Aqueon"/>
                            <label for="aqueon">Aqueon</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="aquaclear" name="brand-name" value="Aquaclear"/>
                            <label for="aquaclear">Aquaclear</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="caribsea" name="brand-name" value="CaribSea"/>
                            <label for="caribsea">CaribSea</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="cobaltaquatics" name="brand-name" value="Cobalt Aquatics"/>
                            <label for="cobaltaquatics">Cobalt Aquatics</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="dr.tims-aquatics" name="brand-name" value="Dr. Tim's Aquatics"/>
                            <label for="dr.tims-aquatics">Dr. Tim's Aquatics</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="eheim" name="brand-name" value="Eheim"/>
                            <label for="">Eheim</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="fluval" name="brand-name" value="Fluval"/>
                            <label for="fluval">Fluval</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="fritz" name="brand-name" value="Fritz"/>
                            <label for="fritz">Fritz</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="hikari" name="brand-name" value="Hikari"/>
                            <label for="hikari">Hikari</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="kent" name="brand-name" value="Kent"/>
                            <label for="kent">Kent</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="marina" name="brand-name" value="Marina"/>
                            <label for="marina">Marina</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="marineland" name="brand-name" value="Marineland"/>
                            <label for="marineland">Marineland</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="northfin" name="brand-name" value="Northfin"/>
                            <label for="northfin">Northfin</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="penn-plax" name="brand-name" value="Penn-plax"/>
                            <label for="penn-plax">Penn-plax</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="tetra" name="brand-name" value="Tetra"/>
                            <label for="tetra">Tetra</label></a>
                    </li>
                </ul>
            </div>
            <div className="filter__category">
                <h3>Price</h3>
                <ul>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="10-or-less" name="price-range" value="Less than $10"/>
                            <label for="10-or-less">Less than $10</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="10to20" name="price-range" value="$10 to $20"/>
                            <label for="10to20">$10 to $20</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="20to30" name="price-range" value="$20 to $30"/>
                            <label for="20to30">$20 to $30</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="30to40" name="price-range" value="$30 to $40"/>
                            <label for="">$30 to $40</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="40to50" name="price-range" value="$40 to $50"/>
                            <label for="">$40 to $50</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="50-or-more" name="price-range" value="$50 & Above"/>
                            <label for="50-or-more">$50 &#38; Above</label>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="filter__category">
                <h3>Customer rating</h3>
                <ul>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="4-or-more" name="rating" value="4 & up"/>
                            <label for="4-or-more"><HiStar /><HiStar /><HiStar /><HiStar /><HiOutlineStar /> &#38; up</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="3-or-more" name="rating" value="3 & up"/>
                            <label for="3-or-more"><HiStar /><HiStar /><HiStar /><HiOutlineStar /><HiOutlineStar /> &#38; up</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="2-or-more" name="rating" value="2 & up"/>
                            <label for="2-or-more"><HiStar /><HiStar /><HiOutlineStar /><HiOutlineStar /><HiOutlineStar /> &#38; up</label>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <input type="checkbox" id="1-or-more" name="rating" value="1 & up"/>
                            <label for="1-or-more"><HiStar /><HiOutlineStar /><HiOutlineStar /><HiOutlineStar /><HiOutlineStar /> &#38; up</label>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FilterSection