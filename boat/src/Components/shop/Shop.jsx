import React from "react";
import { useCart } from "react-use-cart";
import ProductsArray from "../../ProductData/Productdata";
import Styles from "./Shop.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import sorted_data from "../../redux/action";

const Shop = () => {
  const { addItem } = useCart();

  const [data, setData] = useState(ProductsArray);
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  const sortedData = useSelector((state) => state.sortedData);
  const handleSort = (e) => {
    if (e.target.value === "asc") {
      const Sdata = data.sort((a, b) => {
        return Number(a.price) - Number(b.price);
      });
      sorted_data(dispatch, Sdata);
      setState(true);
    } else if (e.target.value === "desc") {
      const Sdata = data.sort((a, b) => {
        return Number(b.price) - Number(a.price);
      });
      sorted_data(dispatch, Sdata);
      setState(true);
    }
  };

  return (
    <>
      <div className={Styles.con}>
        <img
          className={Styles.imgpic}
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz-_Catgry_web_d201c6e3-e067-4280-a127-56a2e1b51399.jpg?v=1634806683"
          alt=""
        />
        <div className={Styles.topleft}>Home/ Wireless Headphones</div>
      </div>

      <div className={Styles.sortDiv}>
        <div className={Styles.counter}>
          <h1>Wireless Headphones</h1>
          <h3>
            {" "}
            <span style={{ paddingRight: "40px" }}>Show filters</span>{" "}
            {data.length} Products
          </h3>
        </div>
        <div
          onClick={handleSort}
          style={{ display: "flex", justifyContent: "right", gap: "35%" }}
        >
          <select style={{ width: "300px", height: "40px", margin: "30px" }}>
            <option value="">SORT BY</option>
            <option value="asc">Price, low to high</option>
            <option value="desc">Price, high to low</option>
            <option value="">Alphabetically, A-Z</option>
            <option value="">Alphabetically, Z-A</option>
          </select>
        </div>
      </div>
      {/* //................................................................................... */}
      <div className={Styles.midshops}>
        <div className={Styles.container}>
          <div className={Styles.grid}>
            {state
              ? sortedData.map((elem, index) => {
                  return (
                    <div key={index} className={Styles.innercon}>
                      <div>
                        <img className={Styles.size} src={elem.image} alt="" />
                      </div>
                      <div className={Styles.smallcon}>
                        <div>
                          <h3>{elem.title}</h3>
                        </div>
                        <div className={Styles.flexf}>
                          <div className={Styles.flexff}>
                            <div>
                              <p style={{ color: "red", fontWeight: "650" }}>
                                ₹{elem.price}
                              </p>
                            </div>

                            <div>
                              <p>
                                ₹<s>{elem.mrp}</s>
                              </p>
                            </div>
                          </div>

                          <div>
                            <button
                              className={Styles.adata}
                              onClick={() => addItem(elem)}
                            >
                              ADD +
                            </button>
                          </div>
                        </div>

                        <div>
                          <p>{elem.color}</p>
                        </div>
                      </div>
                    </div>
                  );
                })
              : data.map((elem, index) => {
                  return (
                    <div key={index} className={Styles.innercon}>
                      <div>
                        <img className={Styles.size} src={elem.image} alt="" />
                      </div>
                      <div className={Styles.smallcon}>
                        <div>
                          <h3>{elem.title}</h3>
                        </div>
                        <div className={Styles.flexf}>
                          <div className={Styles.flexff}>
                            <div>
                              <p style={{ color: "red", fontWeight: "650" }}>
                                ₹{elem.price}
                              </p>
                            </div>

                            <div>
                              <p>
                                ₹<s>{elem.mrp}</s>
                              </p>
                            </div>
                          </div>

                          <div>
                            <button
                              className={Styles.adata}
                              onClick={() => addItem(elem)}
                            >
                              ADD +
                            </button>
                          </div>
                        </div>

                        <div>
                          <p>{elem.color}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
        <h1 style={{ color: "white", marginLeft: "200px" }}>
          Airdopes - The Top Rated Bluetooth Earbuds in the Market
        </h1>
        <div className={Styles.datadd}>
          <p>
            Airdopes offer the most incredible listening experience with
            revolutionary design. Truly in ear wireless with no cables, no
            connectors, and no hassles. Designed for comfort and unstoppable
            music, always remain on your toes as Airdopes brings to you the
            dopest tech there is out there!
          </p>
          <p>
            Powered with boAt’s Insta Wake n’ Pair™ technology & ASAP™ Fast
            Charge, these true wireless earbuds power on and connect instantly
            right out of the charging case. No more going into settings to find
            and pair the device, welcome to the new era of seamless, instant
            connection.{" "}
          </p>
          <p>
            boAt Airdopes come with passive and active noise cancellation
            technology that cancels out external noise, delivering only the
            sound of your media to your ears. No longer will there be any
            interference from external sources. Airdopes are designed and
            perfected for superior calls and entertainment. These wireless
            earbuds come with massive drivers that deliver superior sound, sound
            that is unmatched and inimitable.
          </p>
          <p>
            Made from fine and premium materials, these bluetooth earbuds are
            made to be comfortable and secure. You can choose from a variety of
            silicone tips provided to adjust accordingly and ensure a supreme
            and comfortable fit based on how you want your experience to be.
          </p>
          <p>
            Love adventure? Airdopes are here for you. The IPX rating ensures
            all the mechanical parts are tightly enclosed in an airtight housing
            that prevents water, sweat from seeping into the earbuds. No longer
            do you have to worry about damaging a device. Airdopes are rugged
            and sturdy, able to take on anything that is thrown at it. Make the
            best of your day without worry.
          </p>
          <p>
            Airdopes are perfect for WFH calls or meetings. Microphones are
            placed in key locations on the earbuds that accurately picks up your
            voice while cancelling out background noise. The result is a clear
            and crisp voice and a consistent experience. Moreover, with the
            latest Bluetooth technology, pairing instantly with multiple devices
            while switching between those devices has never been easier.
            Simplicity and elegance define Airdopes.
          </p>
          <p>
            Sound with unmatched style. Airdopes are available in a variety of
            colours that bring the latest fashion trends to the forefront. The
            variety of colours available make Airdopes the earbuds to die for.
          </p>
          <p>
            Style it up with our best earbuds, the new way to flaunt your vibe!
            From the Queen of Prints, Masaba's funky take on our Airdopes 441
            wireless earbuds, to our TRebel range of earbuds, only for women -
            boAt is bringing to you crazy new feats every passing day. Magic and
            Music are synonymous when you plug in the Airdopes earphones!
          </p>
        </div>

        <div className={Styles.para}>
          <p>
            India's fastest growing audio & wearables brand. The most incredible
            range of wireless earphones, earbuds, headphones, smart watches, and
            home audio. From workouts to adventures, boAt will get you sailing!
          </p>
        </div>
      </div>
    </>
  );
};

export default Shop;
