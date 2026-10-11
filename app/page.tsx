'use client';
import { useState } from 'react';

export default function Home() {
  const [respon, setRespon] = useState('');

  const testKoneksi = async () => {
    try {
      const req = await fetch('/api/test', { method: 'POST' });
      const data = await req.json();
      setRespon(data.message);
    } catch (error) {
      setRespon("Gagal menghubungi server.");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Uji Coba MVP</h1>
      <button 
        onClick={testKoneksi} 
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Ping API
      </button>
      <p className="mt-4 font-mono text-sm text-gray-700">{respon}</p>
    </div>
  );
}