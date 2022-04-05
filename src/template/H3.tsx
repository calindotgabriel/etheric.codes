import React, { ReactNode } from "react";

type H3Props = {
  children: ReactNode
}

export const H3: React.FC<H3Props> = (props) => {
  return (
    <h3 className="uppercase text-xl lg:text-2xl font-bold tracking-wide font-nunito">{props.children}</h3>
  )
}
