import React from 'react';
import Head from 'next/head';

const CustomHead = () => (
    <Head>
        <title key="title" itemProp="headline">
            Title
        </title>
        <link rel="canonical" href="Domain" />

        <meta name="title" content="Site title" />
        <meta itemProp="keywords" name="keywords" content="Keywords" />
        <meta itemProp="description" name="description" content="Site description" />

        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:title" content="og title" key="ogtitle" />
        <meta property="og:image" content="og image" key="ogimage" />
        <meta property="og:url" content="og url" key="ogurl" />
        <meta property="og:site_name" content="Site name" key="ogsitename" />
        <meta property="og:description" content="Site description" key="ogdesc" />

        <link rel="manifest" href="fav/site.webmanifest.json" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="robots" content="all" />
        <meta name="msapplication-TileImage" content="fav/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="apple-touch-icon" sizes="180x180" href="fav/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="fav/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="fav/favicon-16x16.png" />
        <link rel="manifest" href="fav/site.webmanifest" />
        <link rel="mask-icon" href="fav/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
    </Head>
);

export default CustomHead;
