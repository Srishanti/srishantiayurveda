import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './ItemPage.css'
import {items} from '../Assets/Items/items.js'
import { useEffect } from 'react'
import { useState } from 'react'


const ItemPage = () => {
    const {id} = useParams();
    const [item, setItem] = useState(null);

    function findItem(val) {
        console.log(id)
        return val.title===id
    }
    useEffect(() => {
        setItem(items.find(findItem))
    }, [])

    return (
    item!==null?<div className='item-section'>
        <div className="item-title">
            <Link to="/">
                <div>
                    <p className='box-item'>{item.title}</p>
                </div>
            </Link>
        </div>
        <div className='item-subtitle'>
            <p style={{padding: 0}}>{item.subtitle}</p>
        </div>
        <div className='viewPortSection'>

            <div className="item-image">
                <img src={item.image} alt="" height='70%' width='60%'/>
            </div>
            <div className="item-indication-benefits-contents">
                <div className='item-subtitlepc'>
                    <p style={{padding: 0}}>{item.subtitle}</p>
                </div>
                <div className="item-indication">
                    <h5>INIDICATIONS</h5>
                    <ul>
                        {
                            item.indications.map((val) => <li>{val}</li>)
                        }
                    </ul>
                </div>
                {
                    item.benefits.length!==0? <div className="item-benefits">
                        <h5>BENEFITS</h5>
                        <ul>
                            {
                                item.benefits.map((val) => <li>{val}</li>)
                            }
                        </ul>
                    </div>:null
                }
                {
                    item.dosage!=="" && 
                    <div className="item-contents">
                        <h5>DOSAGE</h5>
                        {
                            <div className='contents'>
                                <p>{item.dosage}</p>
                            </div>
                        }
                    </div>
                }
                <div className="item-contents">
                    {
                        item.composition?
                        <h5>Composition: </h5>
                        :<h5>Each 10ml contains derived extract from: </h5>
                        
                    }
                    {
                        item.contents.map((val) => <div className='contents'>
                            <p>{val.ing}</p>
                            <p>{val.qty}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    </div>:<div>Loading</div>
  )
}

export default ItemPage