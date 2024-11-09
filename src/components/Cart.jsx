/* 
remove from cart
checkout
*/

import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Cart({sum}) {
    const [total, setTotal] = useState(0)
 
    setTotal(sum);

    return (
        <div>Total : {total}</div>
    )

}


export default Cart
