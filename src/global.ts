import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-mulish: Mulish;
--font-inter: Inter;

/* font sizes */
--font-size-7xl: 1.625rem;
--font-size-xs: 0.75rem;
--font-size-xl: 1.25rem;
--font-size-15xl: 2.125rem;
--font-size-sm: 0.875rem;
--font-size-5xl: 1.5rem;
--font-size-base: 1rem;
--font-size-lg: 1.125rem;
--font-size-11xl: 1.875rem;
--font-size-19xl: 2.375rem;
--font-size-29xl: 3rem;

/* Colors */
--color-darkblue-100: #4510a3;
--color-mediumaquamarine: #0cd2ab;
--color-darkslategray: #333;
--color-lightgray: #d3d3d3;
--color-white: #fff;
--color-silver-100: #c8c8c8;
--color-black: #000;
--color-gray-100: #7c827f;
--color-gray-200: #777575;
--color-gray-300: rgba(255, 255, 255, 0);
--color-darkgray: #aaa;
--color-whitesmoke-100: #f3f3f3;
--color-whitesmoke-200: #ececec;

/* Border radiuses */
--br-9xs: 4px;
--br-3xs: 10px;
--br-28xl: 47px;
--br-2xs: 11px;
--br-12xs: 1px;

}
`;
