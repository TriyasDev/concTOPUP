import { NextResponse } from 'next/server';

export async function POST() {
  // Logika sederhana untuk memastikan route terpanggil
  return NextResponse.json({ 
    success: true, 
    message: "Koneksi MVP berhasil diterima dari jaringan publik!" 
  });
}