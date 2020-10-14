import React from 'react';
import Head from 'next/head';
import { Global, css } from '@emotion/core';
import { ThemeProvider, CSSReset, Image, Button } from '@chakra-ui/core';
import { useRouter } from 'next/router'
import { DokzProvider, GithubLink, ColorModeSwitch } from 'dokz'
import Version from "../components/version"

export default function App(props) {
  const { Component, pageProps } = props
  const { pathname } = useRouter()
  var version = "v1.2"
  if (pathname.startsWith('/v')) {
    return (
      <ThemeProvider>
        <DokzProvider
        docsRootPath={"pages/" + version}
        headerLogo={
          <Image src="/SodaFavico64.svg" alt="acert logo" key="0"/>
        }
        headerItems={[
          <Version key='0' />,
          <GithubLink
              key='1'
              url='https://github.com/remorses/dokz'
          />,
          <ColorModeSwitch key='2' />,
      ]}
      sidebarOrdering={{
          'index.mdx': true,
          Documents_Group: {
              'another.mdx': true,
          },
      }}
        >
            <Component {...pageProps} />
        </DokzProvider>
      </ThemeProvider>
    )
  }
  return (
    <ThemeProvider>
      <Head>
        <title>Next.js 9.3 + Prisma</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <Component {...pageProps} />
      <CSSReset />
    </ThemeProvider>
  )
}
