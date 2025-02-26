'use client';
import Table from "../components/Table";
import { useState, useEffect } from "react";
const data = [
    { name: "IITD", rank: 1, location: "Delhi" },
    { name: "IITB", rank: 2, location: "Mumbai" },
    { name: "IIITA", rank: 3, location: "Prayagraj" },
  ];
  
  const columns = [
    { header: "College Name", accessor: "name" },
    { header: "Rank", accessor: "rank" },
    { header: "Location", accessor: "location" },
  ];
  

export default function orcr () {
    const [exam, setExam] = useState<String>("ADVANCED");
    const [year, setYear] = useState<Number>(2023);
    const [round, setRound] = useState<Number>(1);
    const [type, setType] = useState<String>("JOSSA");
    const [institute, setInstitute] = useState<String>("");
    const [orcrData, setOrcrData] = useState([]);
    const [loading, setLoading] = useState<Boolean>(false);
    const [error, setError] = useState<String>("");
    const fetchOrcrData = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/getOrcr", {
                method: "POST",
                body: JSON.stringify({ exam, year, round, type }),
            });
            const data = await res.json();
            setOrcrData(data);
        } catch (error) {
            setError("An error occurred while fetching the data");
        }
        setLoading(false);
    };
    useEffect(() => {
        fetchOrcrData();
    }, []);
    return (
        <div>
            <p className="font-mono text-white glow-border neon-text text-3xl">ORCR stands for Opening and Closing Ranks. It is the rank range within which the admissions are offered by the colleges. The ranks are based on the scores obtained by the candidates in the entrance exams. The ORCR data is provided by JoSAA and CSAB.</p>
            <button className="clicky-button bg-purple-500 neon-text text-white p-4">Click me!</button>
            <Table data={data} columns={columns} />
        </div>
    )
}