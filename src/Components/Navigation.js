import React from 'react'

export default function Navigation() {
    return (
        <div className="navigation">
            <header className="container add-city">
                <nav>
                    <span>Add city</span>
                    <div className="right">
                        <i className="far fa-edit"></i>
                        <i className="fas fa-sync"></i>
                        <i className="fas fa-plus"></i>
                    </div>
                </nav>
            </header>
        </div>
    )
}
