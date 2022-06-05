function recuperaremail() {
   let REmail = document.querySelector("div#bloco");
   REmail.innerHTML = ` 
      <h1 id="titulo">Recuperar senha</h1>
      <h2 id="subtitulo" style="color: #474744">
         Enviamos um email com um link de alteração de senha.<br/>
         Caso não esteja na caixa de entrada verifique sua caixa de spam.
      </h2>   
    `;
}

function outraforma() {
   let Rnumero = document.querySelector("div#bloco");
   Rnumero.innerHTML = `
      <h1 id="titulo">Recuperar senha</h1>
      <h2 id="subtitulo">Digite o telefone usado no cadastro de sua conta.</h2>

      <input type="number" name="" id="input" placeholder="Telefone" />

      <p id="info">
         <a href="recuperarconta.html">Recuperar com email.</a>
      </p>

      <button id="botaoconfirmar" onclick="recuperarnumero()">Recuperar senha</button>
    `;
}

function recuperarnumero() {
   let Rnumero = document.querySelector("div#bloco");
   Rnumero.innerHTML = `
      <h1 id="titulo">Recuperar senha</h1>
      <h2 id="subtitulo">
         Enviamos um sms com um codigo de  alteração de senha.<br/>
         Digite o codigo de recuperação abaixo.
      </h2>

    <input type="text" name="código" class="rinput" id="input" placeholder="Código" maxlength="6"/>

    <a href="../pages/alterarsenha.html">
      <button type="submit" id="botaoconfirmar">Alterar senha</button>
    </a>
    `;
}

function asenha() {}
