import * as React from "react"
import { Link } from "gatsby"

function ProductCatchAll(props) {
    console.log(props);
  return (
    <div className="wrapper">
      <header>
        <Link to="/">Go back to "Home"</Link>
      </header>
      <main>
        <h1>Couldn't find product</h1>
        <p>We couldn't locate the product "{props.params.name}"</p>
        <p>なんでもいいわけ？</p>
      </main>
    </div>
  )
}

export default ProductCatchAll
