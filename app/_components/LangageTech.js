import React from 'react'

export default function LangageTech({className,text, children}) {
  return (
    <span className={` inline-flex font-semibold`} >
        {text} <span className={`${className} ml-[2px]`} > {children}</span> 
    </span>
  )
}
