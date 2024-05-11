export async function onRequest(context) {
    // Create a prepared statement with our query
    const ps = context.env.WORK.prepare('SELECT * from Customers');
    const data = await ps.first();

    return Response.json(data);
}
const testando = document.getElementById("teste");
testando.innerHTML = data;
console.log(data);