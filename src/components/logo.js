import React from "react";
import logo from "../images/logo.svg";
import { Image } from "rebass";
import { Link } from "gatsby";

const Logo = () => (
  <Link to="/">
    <Image alt="Skien Live 2019" width={[180, 180, 250]} m={0} src={logo} />
  </Link>
);

export default Logo;
