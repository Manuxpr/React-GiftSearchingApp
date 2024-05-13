import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifRid } from "./components/GifRid";

export const GifExpertApp = () =>{
    const [categories, setCategories] = useState(['True Detective']);

    const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory)) return ;

        setCategories([...categories,newCategory])
    }

    return ( 
        <>
            <h1>GifExpertApp</h1>
            {/*Input*/}
            <AddCategory 
            //setCategories={setCategories}
            onNewCategory={event => onAddCategory(event)}
            />
            <button onClick={onAddCategory}>Agregar</button>

            {/* Aqui van los gif */}
            <ol>
                {/* La expresion map es de JS y recibe una funcion, asi puedo mostrar los datos del array Categories */}
                {categories.map(category =>{
                    // Necesitamos un key para mostar los números
                    return (
                        <GifRid key={category} category={category}/>
                    )

                })}
            </ol>

        </>
    )
}