import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }

    body {
        min-height: 100vh;
        //width: 100vw;
        background: linear-gradient(180deg, rgb(5, 5, 10) 0%, rgb(9, 10, 14) 8.333%, rgb(13, 14, 18) 16.667%, rgb(18, 19, 22) 25%, rgb(22, 23, 26) 33.333%, rgb(26, 27, 30) 41.667%, rgb(30, 31, 34) 50%, rgb(34, 35, 38) 58.333%, rgb(38, 39, 42) 66.667%, rgb(41, 42, 45) 75%, rgb(44, 45, 48) 83.333%, rgb(46, 47, 51) 91.667%, rgb(48, 49, 53) 100%)
    }












    
    /* -------------------------- */
/* Para telas de tablet (até 768px) */
/* -------------------------- */
@media (max-width: 768px) {
  .mobile-fullscreen-container {
    /* Ocupa a largura total da tela */
    width: 100vw;
    
    /* Ocupa a altura total da tela */
    height: 100vh;
    
    /* Sobrescreve a largura máxima da div */
    max-width: 100%;
    
    /* Remove as margens para que ocupe as bordas da tela */
    margin: 0;
    
    /* Remove o padding interno */
    padding: 20%;
    
    /* Remove as bordas arredondadas */
    border-radius: 0;
  }

  /*
    Opcional: Ajuste o padding do formulário para evitar que ele encoste nas bordas da tela.
  */
  .mobile-fullscreen-container form {
    padding: 1rem; /* Ajusta o padding para 16px */
  }
}

`;

export default GlobalStyles;
