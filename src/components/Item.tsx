import React, {FC} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useFetchSingleItemQuery} from '../store/fakeStoreAPI';
import Loader from "./Loader";

const Item: FC = () => {
    const {id} = useParams(), navigate = useNavigate();
    const {data} = useFetchSingleItemQuery(id ? +id : 0);

    const getBack = () => {
        navigate('/');
    };

    if (!data) {
        return <Loader/>
    }

    return (
        <div className='wrapper__item'>
            <div className='wrapper__item-credentials'>
                <button className='btn' onClick={getBack}>back</button>
                <h1>{data.title}</h1>
            </div>
            <div className='wrapper__item-data'>
                <img src={data.image} alt=''/>
                <div>
                    <table>
                        <tbody>
                        {Object.entries(data).filter(el => typeof el[1] === 'string').map(el => {
                            const [key, value] = el;
                            return (
                                <tr key={key}>
                                    <th>{key}</th>
                                    <td title={key === 'description' && value ? value : ''}><p>{value}</p></td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Item;
