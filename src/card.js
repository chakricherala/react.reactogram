import React from "react";

const Card = () => {
    return (
        <div>
            <div className="card shadow-sm">
                <div className="card-body px-2">
                    <div className="row">
                        <div className="col-6">
                            img
                        </div>
                        <div className="col-6">
                            <span className="float-end">Right</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card