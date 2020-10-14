import React from 'react';
import Head from 'next/head';
import { Global, css } from '@emotion/core';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { useRouter } from 'next/router'
import { DokzProvider, GithubLink, ColorModeSwitch } from 'dokz'

export default function App(props) {
  const { Component, pageProps } = props
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