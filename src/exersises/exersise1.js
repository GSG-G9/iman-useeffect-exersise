import React from 'react';
const Counter = () => {
    const [count, setCount] = React.useState(0);

    const incrementCount = () => {
        setCount((prevCount) => {
            return prevCount + 1

        })
    }
    React.useEffect(() => {
        document.addEventListener('mousedown', incrementCount)

    }, [])
    

    return (
        <>
        <span>{count}</span>
        </>
    )

}

export default Counter;