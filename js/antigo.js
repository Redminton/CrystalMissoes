if (url.pathname.startsWith('/login/')) {
    if (request.method === 'POST') {
        try {
            const client = buildLibsqlClient(env);
            const formData = await request.formData();

            const user = formData.get('user');
            const senha = formData.get('senha');

            console.log("Received form data:");
            console.log("user:", user);
            console.log("senha:", senha);

            if (!user || !senha) {
                return new Response('<h1>Missing credentials</h1>', {
                    status: 400,
                    headers: { "Content-Type": "text/html" }
                });
            }


            const checkCredentialsQuery = `SELECT * FROM credencial WHERE tipo = '${user}' AND chave = '${senha}';`;
            console.log("Executing query:", checkCredentialsQuery);
            const result = await client.execute(checkCredentialsQuery);

            if (result.rows.length > 0) {

                let html = `<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Crystal Missões</title>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <link href="../css/cssindex.css" rel="stylesheet">

</head>



<body>
  <div class="container">
    <form action="/teste/" method="post">
        <label for="nome">Nome do Produto:</label><br>
        <input type="text" id="nome" name="nome"><br>
        <label for="quantidade">Quantidade:</label><br>
        <input type="number' id="quantidade" name="quantidade"><br>
        <label for="preco">preco</label><br>
        <input type="text" id="preco" name="preco"><br>
        <label for="descricao">descrição</label><br>
        <input type="text" id="descricao" name="descricao"><br>
        <label for="imagem">imagem</label><br> 
        <input type="text" id="imagem" name="imagem"><br>
        <label for="categoria">Categoria</label><br>
        <select class="form-control-dark"  id="categoria" name="categoria">
          <option value="promo">Promoções</option>
          <option value="colar">Colares</option>
          <option value="anel">Anéis</option>
          <option value="brinco">Brincos</option>
          <option value="gargantilha">Gargantilhas</option>
          <option value="pulseira">Pulseiras</option>
          <option value="conjunto">Conjuntos</option>
          <option value="acessorio">Acessórios</option>
          <option value="masculino">Masculinos</option>
        </select><br><br>
        <input type="submit" value="Enviar">
    </form>
  </div>
</body>




  <a href="https://redminton.cloud/teste/">Teste</a>

  


  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  </body>
  </html>`;

                return new Response(html, {
                    status: 200,
                    headers: { "Content-Type": "text/html" }
                });
            } else {
                // Credentials do not match
                return new Response('<h1>Invalid credentials</h1>', {
                    status: 401,
                    headers: { "Content-Type": "text/html" }
                });
            }
        } catch (error) {
            console.error("Error checking credentials:", error);
            return new Response('<h1>Internal Server Error</h1>', {
                status: 500,
                headers: { "Content-Type": "text/html" }
            });
        }
    }
}
