import crypto from 'crypto';
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const textBody = await request.text();
        const signatureHeader = request.headers.get('x-hub-signature');
        const secrate = process.env.DIGIFLAZZ_WEBHOOK_SECRATE;
        const hash = 'sha1=' + crypto.createHmac('sha1', secrate).update(textBody).digest('hex');

        if (signatureHeader !== hash) {
            return NextResponse.json({ message: 'akses ditolak' }, { status: 403 });
        }
        
        const payload = JSON.parse(textBody);
        const { ref_id, status, en, price } = payload.data;

        console.log('transaksi ${ref_id} statusnya: ${status} dengan SN: ${sn}');

        return NextResponse.json({ message: 'ok'}, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}