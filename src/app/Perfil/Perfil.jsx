"use client";

import { useState } from "react";
import axios from "axios";

export default function Perfil() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(false);

    const buscarUsuarios = async () => {
        setLoading(true);
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/https://api.sampleapis.com/countries/countries");
            setUsuarios(response.data);
        } catch (error) {
            console.error("Erro ao buscar usuarios:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-blue-100 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-4">Usuários</h1>
                <div className="text-center mb-8">
                    <button
                        onClick={buscarUsuarios}
                        disabled={loading}
                        className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600"
                    >
                        {loading ? "Carregando ..." : "🔍Buscar Usuários"}
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {usuarios.map((usuario) => (
                        <div key={usuario.id} className="bg-white p-4 rounded-lg shadow">
                            <h2 className="text-xl font-bold">{usuario.name}</h2>
                            <p className="text-gray-600">{usuario.email}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}