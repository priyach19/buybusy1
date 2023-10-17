import { useState } from "react";
import styles from "../../styles/Home.module.css";
// render the filter bar
export default function FilterBar(props){
  // to  apply filter 
  const [applyFilter,setApplyFilter]=useState(false);
    const {price,setPrice,setCategory}=props;
    console.log(price)
    return(
        <div className={styles.filterBar}>
            <h2>
                FilterBar
            </h2>

            {/* price ranger and price slider  */}
            <div className={styles.priceRange}>
                {/* sub heading */}
                <span>Price</span>{`<= ${price}`}
                <br />
                {/* slider  */}
                <input type="range" 
                    min="100" 
                    max="200000" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} />
            </div>
                  
            {/* sort item by category */}
            <div className={styles.categoryBox}>
                {/* sub heading */}
                <span>Category:</span>

                {/* radio buttons for differnet category */}
                <div>
                    {/* men category */}
                    <input type="radio" 
                        id="men" 
                        value="men" 
                        name="category" 
                        onClick={()=>setCategory("men")}/>
                    <label for="men">Men</label>
                    <br/>
                    
                    {/* women category */}
                    <input type="radio" 
                        id="women" 
                        value="women" 
                        name="category"
                        onClick={()=>setCategory("women")}/>
                    <label for="women">Women</label>
                    <br/>
                    
                    {/*gadgets category*/}
                    <input type="radio" 
                        id="gadgets" 
                        value="gadgets" 
                        name="category"
                        onClick={()=>setCategory("gadgets")}/>
                    <label for="gadgets">Gadgets</label>
                    <br/>
                    <br/>
                    <button onClick={() => setApplyFilter(!applyFilter)}>
                    {applyFilter?"Cancel":"Apply"}
                </button>
                </div>

            </div>
            
        </div>
        
    )
}