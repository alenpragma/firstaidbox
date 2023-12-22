import React from 'react'

const Container = ({children}) => {
    return (
        <div className='px-[10px] container mx-auto'>
            {children}
        </div>
    )
}

export default Container
