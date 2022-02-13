import React, { ReactNode } from "react";

type H4Props = {
  children: ReactNode
}

export const H4: React.FC<H4Props> = (props) => {
  return (
    <p className="text-md md:text-lg lg:text-xl">{props.children}</p>
  )
}
