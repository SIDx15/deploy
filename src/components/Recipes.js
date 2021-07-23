import React from 'react'
import recipeitem from './recipeitem';

const Recipes = (props) =>  {
    const {recipes}=props;  
    return (
        <div class="row">
            {
                recipes.map(para=>(
                    <div class="col">
                        <div class="col2">
                            <img src={para.recipe.image} className="image"/>

                            <div class="name">
                                <h5>{para.recipe.label}</h5>
                            </div>
                            <div className="lit">
                            <u1 >
                                {
                                    para.recipe.ingredientLines.map(ing=>(
                                        <li className="ing">{ing}</li>
                                    ))
                                }
                            </u1>
                            </div>
                        </div>
                    </div>

                ))
            }
            
        </div>
    )
}

export default Recipes
