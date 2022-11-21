import React, {FC} from 'react';
import {Link} from "react-router-dom";
import Loader from "./Loader";
import {useFetchItemsQuery} from '../store/fakeStoreAPI';
import {IProductItem} from "../interfaces";

const List: FC = () => {
    const {data, isLoading} = useFetchItemsQuery();

    if (isLoading) {
        return <Loader/>
    }

    return (
        <div className='wrapper__list'>
            {data && data.map((el: IProductItem) => {
                return <div className='wrapper__list-item' key={el.id}>
                    <p>{el.title}</p>
                    <Link to={`/item/${el.id}`}><img src={el.image} alt=''/></Link>
                    <span>{el.category}</span>
                </div>
            })}
        </div>
    );
};

export default List;
