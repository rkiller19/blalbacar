import React from "react";
import styled from "styled-components";

export const Banner = styled.div`
  z-index: 1000;
  width: 100%;
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0);
  color: #000;
  padding: 6px;
  /* border-radius: 8px; */
`;

export const BannerTitle = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  margin: 4px;
`;

export const BannerContent = styled.div`
  font-size: 1em;
  text-align: center;
  margin: 4px;
  font-size: 12px;
`;
