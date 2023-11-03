import React from 'react';
import {Inter} from 'next/font/google';


import './globals.css';
import StyledComponentsRegistry from "@/app/components/AntdRegistry";
import {ConfigProvider} from "antd";
import theme from "@/app/components/theme/themeConfig";

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({children}: React.PropsWithChildren) => (
  <html lang="en">
  <body className={inter.className}>
  <StyledComponentsRegistry>
    <ConfigProvider theme={theme}>
      {children}
    </ConfigProvider>
  </StyledComponentsRegistry>
  </body>
  </html>
);

export default RootLayout;