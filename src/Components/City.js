import React from 'react'

export default function ({data}) {
    return (
        <div>
            <div className="City">
                <span>{data.name}</span>
                <div className="weather">
                    <span>

                    </span>
                </div>
            </div>
        </div>
    )
}
