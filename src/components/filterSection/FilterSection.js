import React, { useState, useEffect } from "react";

import {HiStar, HiOutlineStar} from 'react-icons/hi';
import axios from "axios";
import getCategories from "../designUtils/getCategories";
import getFishType from "../designUtils/getFishType";
import "./FilterSection.scss";

const API = process.env.REACT_APP_API_URL;

function FilterSection() {
  const [categories, setCategories] = useState([]);
  const [fishType, setFishType] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((response) => {
        setCategories(getCategories(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${API}/species`)
      .then((response) => {
        setFishType(getFishType(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="filter">
      <div className="filter__category">
        <h3>Category</h3>
        <ul>
          {categories.map((category, index) => {
            return (
              <li key={index} category={category}>
                <button>{category}</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="filter__category">
        <h3>Fish Type</h3>
        <ul>
          {fishType.map((species, index) => {
            return (
              <li key={index} type={species}>
                <button>
                  <input type="checkbox" />
                  <label htmlFor={species}>{species}</label>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="filter__category">
          <h3>Brand</h3>
          <ul>
            <li>
              <button>
                <input type="checkbox" id="api" name="brand-name" value="API" />
                <label htmlFor="api">API</label>
              </button>
            </li>
            <li>
              <button>
                <input
                  type="checkbox"
                  id="aqueon"
                  name="brand-name"
                  value="Aqueon"
                />
                <label htmlFor="aqueon">Aqueon</label>
              </button>
            </li>
            <li>
              <button>
                <input
                  type="checkbox"
                  id="aquaclear"
                  name="brand-name"
                  value="Aquaclear"
                />
                <label htmlFor="aquaclear">Aquaclear</label>
              </button>
            </li>
            <li>
              <button>
                <input
                  type="checkbox"
                  id="caribsea"
                  name="brand-name"
                  value="CaribSea"
                />
                <label htmlFor="caribsea">CaribSea</label>
              </button>
            </li>
            <li>
              <button>
                <input
                  type="checkbox"
                  id="cobaltaquatics"
                  name="brand-name"
                  value="Cobalt Aquatics"
                />
                <label htmlFor="cobaltaquatics">Cobalt Aquatics</label>
              </button>
            </li>
            <li>
              <button>
                <input
                  type="checkbox"
                  id="dr.tims-aquatics"
                  name="brand-name"
                  value="Dr. Tim's Aquatics"
                />
                <label htmlFor="dr.tims-aquatics">Dr. Tim's Aquatics</label>
              </button>
            </li>
            <li>
              <button>
                <input
                  type="checkbox"
                  id="eheim"
                  name="brand-name"
                  value="Eheim"
                />
                <label htmlFor="">Eheim</label>
              </button>
            </li>
            <li>
              <button>
                <input
                  type="checkbox"
                  id="fluval"
                  name="brand-name"
                  value="Fluval"
                />
                <label htmlFor="fluval">Fluval</label>
              </button>
            </li>
            <li>
              <button>
                <input
                  type="checkbox"
                  id="fritz"
                  name="brand-name"
                  value="Fritz"
                />
                <label htmlFor="fritz">Fritz</label>
              </button>
            </li>
            <li>
              <button>
                <input
                  type="checkbox"
                  id="hikari"
                  name="brand-name"
                  value="Hikari"
                />
                <label htmlFor="hikari">Hikari</label>
              </button>
            </li>
            <li>
              <button>
                <input
                  type="checkbox"
                  id="kent"
                  name="brand-name"
                  value="Kent"
                />
                <label htmlFor="kent">Kent</label>
              </button>
            </li>
            <li>
              <button>
                <input
                  type="checkbox"
                  id="marina"
                  name="brand-name"
                  value="Marina"
                />
                <label htmlFor="marina">Marina</label>
              </button>
            </li>
            <li>
              <button>
                <input
                  type="checkbox"
                  id="marineland"
                  name="brand-name"
                  value="Marineland"
                />
                <label htmlFor="marineland">Marineland</label>
              </button>
            </li>
            
          </ul>
        </div>
      <div className="filter__category">
          <h3>Price</h3>
          <ul>
            <li>
              <button>
                <input
                  type="checkbox"
                  id="10-or-less"
                  name="price-range"
                  value="Less than $10"
                />
                <label htmlFor="10-or-less">Less than $10</label>
              </button>
            </li>
            <li>
              <button>
                <input
                  type="checkbox"
                  id="10to20"
                  name="price-range"
                  value="$10 to $20"
                />
                <label htmlFor="10to20">$10 to $20</label>
              </button>
            </li>
            <li>
              <button>
                <input
                  type="checkbox"
                  id="20to30"
                  name="price-range"
                  value="$20 to $30"
                />
                <label htmlFor="20to30">$20 to $30</label>
              </button>
            </li>
            <li>
              <button>
                <input
                  type="checkbox"
                  id="30to40"
                  name="price-range"
                  value="$30 to $40"
                />
                <label htmlFor="">$30 to $40</label>
              </button>
            </li>
            <li>
              <button>
                <input
                  type="checkbox"
                  id="40to50"
                  name="price-range"
                  value="$40 to $50"
                />
                <label htmlFor="">$40 to $50</label>
              </button>
            </li>
            <li>
              <button>
                <input
                  type="checkbox"
                  id="50-or-more"
                  name="price-range"
                  value="$50 & Above"
                />
                <label htmlFor="50-or-more">$50 &#38; Above</label>
              </button>
            </li>
          </ul>
        </div>
      <div className="filter__category">
          <h3>Customer rating</h3>
          <ul className='filter__category__ratings'>
            <li>
              <button>
                <input
                  type="checkbox"
                  id="4-or-more"
                  name="rating"
                  value="4 & up"
                />
                <label htmlFor="4-or-more">
                  <HiStar />
                  <HiStar />
                  <HiStar />
                  <HiStar />
                  <HiOutlineStar />
                  <span> &#38; up</span>
                </label>
              </button>
            </li>
            <li>
              <button>
                <input
                  type="checkbox"
                  id="3-or-more"
                  name="rating"
                  value="3 & up"
                />
                <label htmlFor="3-or-more">
                  <HiStar />
                  <HiStar />
                  <HiStar />
                  <HiOutlineStar />
                  <HiOutlineStar />
                  <span> &#38; up</span>
                </label>
              </button>
            </li>
            <li>
              <button>
                <input
                  type="checkbox"
                  id="2-or-more"
                  name="rating"
                  value="2 & up"
                />
                <label htmlFor="2-or-more">
                  <HiStar />
                  <HiStar />
                  <HiOutlineStar />
                  <HiOutlineStar />
                  <HiOutlineStar />
                  <span> &#38; up</span>
                </label>
              </button>
            </li>
            <li>
              <button>
                <input
                  type="checkbox"
                  id="1-or-more"
                  name="rating"
                  value="1 & up"
                />
                <label htmlFor="1-or-more">
                  <HiStar />
                  <HiOutlineStar />
                  <HiOutlineStar />
                  <HiOutlineStar />
                  <HiOutlineStar />
                  <span> &#38; up</span>
                </label>
              </button>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default FilterSection;
