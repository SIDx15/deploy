import React from 'react'

const recipeitem = (props)=> {
    const {name,img,ing}=props;
    return (
        
            
                    <div class="col">
                        <div class="col2">
                            <img src={img} className="image"/>

                            <div class="name">
                                <h5>{name}</h5>
                            </div>
                            <div className="lit">
                            <u1 >
                                {
                                    ing.map(ing=>(
                                        <li className="ing">{ing}</li>
                                    ))
                                }
                            </u1>
                            </div>
                        </div>
                    </div>


                
            
        
    )
}

export default recipeitem
