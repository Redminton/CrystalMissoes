export async function onRequest(context) {
    const ps = context.env.BANCO.prepare('SELECT * from Customers');
    const data = await ps.first();

    return Response.json(data);
}
const testando = document.getElementById("teste");
testando.innerHTML = data;
console.log(data);