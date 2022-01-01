import React from "react";
import { Table } from "react-bootstrap";
import { UseStateContext } from "../util/state.context.use/UseStateContext";

export const MainPage = () => {

    const { state } = UseStateContext();

    return(

        <>
            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>
                            Currency
                        </th>
                        <th>
                            Time
                        </th>
                        <th>
                            Amount From
                        </th>
                        <th>
                            From
                        </th>
                        <th>
                            To
                        </th>
                        <th>
                            Amount To
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.history.map((eachHistory) => {
                            return(
                                <tr>
                                    <td>
                                        {eachHistory.time}
                                    </td>
                                    <td>
                                        {eachHistory.amtBefore}
                                    </td>
                                    <td>
                                        {eachHistory.from}
                                    </td>
                                    <td>
                                        {eachHistory.to}
                                    </td>
                                    <td>
                                        {eachHistory.amtAfter}
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>

            </Table>
        </>

    );


};