import React, { createContext, useState } from "react";

export const GuitarContext = createContext();

export const GuitarProvider = ({ children }) => {
    const [id, setId] = useState("");
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [sn, setSn] = useState("");
    const [description, setDescription] = useState("");
    const [year, setYear] = useState("");
    const [history, setHistory] = useState([]);
    const [remove, setRemove] = useState();
    //const [onDelete, setOnDelete] = useState("");

    return (
        <GuitarContext.Provider
            value={{
                id,
                brand,
                model,
                sn,
                description,
                year,
                history,
                remove,
                //onDelete,
                setId,
                setBrand,
                setModel,
                setSn,
                setDescription,
                setYear,
                setHistory,
                setRemove,
                //setOnDelete,
            }}
        >
            {children}
        </GuitarContext.Provider>
    );
};
