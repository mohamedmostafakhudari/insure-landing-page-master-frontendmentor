import React from "react";

export default function NavItem({ item }) {
  return (
    <li className="uppercase text-white font-bold text-lg">
      <a href="#">{item}</a>
    </li>
  );
}
