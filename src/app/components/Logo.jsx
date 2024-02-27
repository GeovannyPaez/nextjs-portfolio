import Image from 'next/image'
import React from 'react'

export default function Logo({ width = 50, height = 50, ...rest }) {
  return (
    <Image
      src={"/images/logo.png"}
      width={width}
      style={{ width: "auto", height: "auto" }}
      height={height}
      alt='logo image'
      priority
      {...rest}
    />
  )
}
