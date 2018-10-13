import Head from 'next/head'

export default (props) => (
  <div>
    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  </div>
)