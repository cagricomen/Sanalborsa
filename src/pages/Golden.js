import React, { useEffect, useState } from 'react'
import dateFormat from 'dateformat';
import * as AiIcons from 'react-icons/ai';


function Golden() {
    const [itemData, setItemData] = useState([])
    const fetchData = () => {
        return fetch(process.env.REACT_APP_API + 'golden')
            .then((response) => response.json())
            .then((data) => setItemData(data.data));
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <h1 style={{ marginLeft: "60px" }}>Dövizler</h1>
            <div className="row d-flex justify-content-between">
                <div style={{ marginLeft: "60px" }} className="table-responsive  col-md-9">
                    <table className="table card-table table-bordered ">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>İsim</th>
                                <th>Alış</th>
                                <th>Satış</th>
                                <th>Değişim</th>
                                <th>Güncelleme</th>
                                <th>Satın Al</th>
                            </tr>
                        </thead>
                        <tbody >
                            {itemData.map(item =>
                                <tr key={'key' + item.id}>
                                    <td >
                                        <AiIcons.AiFillGolden style={{fontSize:'30px' , color:'#FFCE00'}} />
                                    </td>
                                    <td style={{fontWeight:'bold'}} className="text-danger">{item.name}</td>
                                    <td>{item.buyPrice}</td>
                                    <td>{item.salePrice}</td>
                                    <td>{item.change}%</td>
                                    <td>
                                        {dateFormat(item.date, "HH:MM:ss")}
                                    </td>
                                    <td>
                                        <button className="btn btn-danger btn-sm btn-success">Al</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div>
                <div style={{ marginRight: 0 }} className="table-responsive  col-md-2">
                    <table className="table card-table table-bordered ">
                        <thead>
                            <tr>
                                <th>İsim</th>
                                <th>İsim</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>asdasd</td>
                                <td>asdasd</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Golden
