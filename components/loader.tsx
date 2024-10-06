import React from 'react'

function Loader() {
    return (
        <div>
            <div>
                <div className="flex justify-center items-center h-screen w-full z-50 bg-white/60 fixed top-0 left-0 ">
                    <div className="rounded-full h-20 w-20 bg-primary animate-ping"></div>
                </div>
            </div>
        </div>
    )
}

export default Loader