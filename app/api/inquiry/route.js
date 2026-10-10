import crypto from 'crypto';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { skuCode, costomerNo, refId } = await request.json();
        const username = process.env.DIGIFLAZZ_USERNAME;
        const apiKey = process.env.DIGIFLAZZ_API_KEY;
        const sign = crypto.createHash('md5').update(username + apiKey + refId).digest('hex');
        
        const res = await fetch('https://api.digiflazz.com/v1/transaction', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                commands: 'inq-pasca',
                username: username,
                buyer_sku_code: skuCode,
                customer_no: customerNo,
                ref_id: refId,
                sign: sign
            }),
        });
        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    
}