import crypto from 'crypto';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { skuCode, customerNo, refId } = body;
        const username = process.env.DIGIFLAZZ_USERNAME;
        const apiKey = process.env.DIGIFLAZZ_API_KEY;
        const signatureString = username + apiKey + refId;
        const sign = crypto.createHash('md5').update(signatureString).digest('hex');
        const response = await fetch('https://api.digiflazz.com/v1/transaction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                buyer_sku_code: skuCode,
                customer_no: customerNo,
                ref_id: refId,
                sign: sign
            }),
        });
        const data = await response.json();

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { message: 'system gagal memproses transaksi', error: error.message },
            { status: 500 }
        );
    }
}