import React from "react";
import './WidgetLg.css'

export default function WidgetLg() {
    const Button = ({type}) =>{
        return <button className={'widgetLgButton ' + type}>{type}</button>
    }
    return(
        <div className="widgetLg">
            <h3 className="widgetLgTitle"></h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Data</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="images/wer.webp" alt="xyz" className="widgetLgImg" />
                        <span className="widgetLgName">alberto</span>
                    </td>
                    <td className="widgetDate">2 may 2022</td>

                    <td className="widgetLgAmount">$199.95</td>

                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                    {/* <td className="widgetLgUser">
                        <img src="images/wer.webp" alt="xyz" className="widgetLgImg" />
                        <span className="widgetLgName">alberto</span>
                    </td>
                    <td className="widgetDate">2 may 2022</td>

                    <td className="widgetLgAmount">$199.95</td>

                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                    <td className="widgetLgUser">
                        <img src="images/wer.webp" alt="xyz" className="widgetLgImg" />
                        <span className="widgetLgName">alberto</span>
                    </td>
                    <td className="widgetDate">2 may 2022</td>

                    <td className="widgetLgAmount">$199.95</td>

                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td> */}
                </tr>
            </table>
        </div>
    )
};
