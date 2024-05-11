export async function onRequest(context) {
    // Create a prepared statement with our query
    const ps = context.env.test.prepare('SELECT * from users');
    const data = await ps.first();

    return Response.json(data);
}
const testando = document.getElementById("teste");
testando.innerHTML = data;
console.log(data);