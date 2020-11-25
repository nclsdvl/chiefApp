import React, { useState, useEffect } from 'react'
import DailyMenu from './DailyMenu'
import axios from 'axios'

async function getMenu(codes) {
    let test = [];
    let menus =  codes.map((code) => {  
        axios.get(`https://world.openfoodfacts.org/api/v0/product/${code}.json`) 
        .then((response) => { 
            test.push([response.data.product.product_name,  response.data.product.image_front_small_url])
            return test
       })
    })
    return test
}

function WeekMenu() {
    const dates= ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
    const [menu, setMenu] = useState([])

    useEffect(async () => {
        const codes = ['3454681006511', '737628064502', '3250392392277', '3700009252567', '3564707109888',  '8411555100404',  '5449000000996']
        setMenu(await getMenu(codes))
        }, [])
    



    return (
        <div>
        { dates.map((day, index) => {
            console.log(index)
            console.log(menu[index])
            return <DailyMenu day = {day} key={day} menu={menu} index={index} ></DailyMenu>
            })
        }  


    </div>
    )

}

export default WeekMenu;