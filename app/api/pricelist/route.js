import crypto from 'crypto';
import { NextResponse } from 'next/server';

let cachedData = null;
let lastFetchTime = 0;

export async function GET(request) {
  const 

  const username = process.env.DIGIFLAZZ_USERNAME;
  const apiKey = process.env.DIGIFLAZZ_API_KEY;
  const signatureString = username + apiKey + 'depo';
  const sign = crypto.createHash('md5').update(signatureString).digest('hex');

  try {
    const response = await fetch('https://api.digiflazz.com/v1/price-list', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cmd: 'prepaid',
        username: username,
        sign: sign
      }),
    });
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: 'Gagal menarik data API', error: error.message }, 
      { status: 500 }
    );
  }
}
