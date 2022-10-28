import * as React from 'react'
import useSiteMetadata from './useSiteMetadata'

const Seo = ({title}) => {
    const data = useSiteMetadata()
    
    return <title>{data} | {title}</title>
}

export default Seo