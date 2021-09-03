import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

console.log(`${process.env.NODE_ENV}`);     // development
console.log(`${process.env.GATSBY_SHOPIFY_STORE_URL}`);     // .env.development ファイルの GATSBY_SHOPIFY_STORE_URL キーの値 your-url.myshopify.com
console.log(`${process.env.GATSBY_STOREFRONT_ACCESS_TOKEN}`);   // .env.development ファイルの GATSBY_STOREFRONT_ACCESS_TOKEN キーの値 XXX
console.log(`${process.env.USERNAME}`);
console.log(`${process.env}`);
console.log(process.env);

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>NODE_ENV is {`${process.env.NODE_ENV}`}</p>
    <p>GATSBY_SHOPIFY_STORE_URL is {`${process.env.GATSBY_SHOPIFY_STORE_URL}`}</p>
    <p>GATSBY_STOREFRONT_ACCESS_TOKEN is {`${process.env.GATSBY_STOREFRONT_ACCESS_TOKEN}`}</p>
    <p>Windowsの環境変数へのアクセス {`${process.env.USERNAME}`}</p>

    <p>Hoting環境をFirebaseに変更しました。</p>
    <p>カスタマイズしたから、再アップロードしました。</p>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
