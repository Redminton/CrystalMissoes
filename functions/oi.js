export async function onRequest(context) {
    const ps = context.env.BANCO.prepare('SELECT * from Customers');
    const data = await ps.first();
    return data;
}
