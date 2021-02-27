import React from 'react'

export default function Navigation({handlerModal, handleEdit}) {
    return (
        <div className="navigation">
            <header className="container add-city">
                <nav>
                    <span>Add city</span>
                    <div className="right">
                        <i className="far fa-edit" onClick={handleEdit}></i>
                        <i className="fas fa-sync"></i>
                        <i className="fas fa-plus" onClick={handlerModal}></i>
                    </div>
                </nav>
            </header>
        </div>
    )
}
