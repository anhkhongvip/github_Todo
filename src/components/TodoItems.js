import React from 'react'

const TodoItems = (props) => {
    console.log(props.data);
    return (
        <>
            <div className="row mt-5">
                <div className="col-4">
                    Title
                </div>
                <div className="col-8 text-center">
                    Description
                </div>
            </div>
            <div className="row mt-3">
                {props.data.map((val, key) => {
                    return (<>
                        <div className="col-4">
                            {val.title}
                        </div>
                        <div className="col-8  text-center">
                            {val.description}
                        </div>
                    </>)
                })}

            </div>
        </>
    )
}

export default TodoItems
