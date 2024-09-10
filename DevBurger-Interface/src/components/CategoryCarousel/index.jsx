import { useEffect, useState } from 'react'
import { api } from '../../services/api'


export function CategoryCarousel() {
    
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function loadCategory() {
            const { data } =  await api.get('/category');
            
            setCategories(data)
            console.log(data)
        }
        loadCategory();
    }, [])

    return (
        <div>
            <h1>ANYTHIG</h1>
        </div>
    )
}