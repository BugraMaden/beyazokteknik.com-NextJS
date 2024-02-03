import React from 'react'

const Head = ({hdtitle,metakeywords,metadescription}) => {
  return (
    <>
      <title>{hdtitle}</title>
        <meta name="description" content={metadescription} />
        <meta name="keywords" content={metakeywords}/>
        <meta name="robots" content="index, follow"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="author" content="Beyaz Ok Beyaz Eşya Teknik Servis"/>
        <meta property="og:title" content="Beyaz Eşya Teknik Servisi | Beyaz Ok Beyaz Eşya Teknik Servis"/>
    </>
  )
}

export default Head
