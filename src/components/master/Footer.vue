<script setup>

</script>

<template>

  <footer class="poppins-regular">
    <div class="footer-infos">
      <div class="banner">
        <figure>
          <img src="../../assets/logo/lyombre-logo.png" alt="Lyombre Logotype in the footer" />
        </figure>
      </div>
      <div class="footer-links">
        <ul class="general-links">
          <h3>Liens rapides</h3>
          <li class="idk">
            <a href="#"><i class="bi bi-cursor"></i> Must be determined</a>
          </li>
          <li class="idk">
            <a href="#"><i class="bi bi-cursor"></i> Must be determined</a>
          </li>
          <li class="idk">
            <a href="#"><i class="bi bi-cursor"></i> Must be determined</a>
          </li>
          <li class="idk">
            <a href="#"><i class="bi bi-cursor"></i> Must be determined</a>
          </li>
          <hr>
          <li class="idk">
            <a href="#"><i class="bi bi-cursor"></i> Must be determined</a>
          </li>
        </ul>
      </div>
    </div>
    <hr>
    <div class="copyright">
      <p>Lyombre - Victor Yvray Ruffinatti & Louane K'Dual & Raphaël Aubry & Baptiste Gosselin</p>
      <p>Développé par des étudiants de <a href="https://www.unicaen.fr/"><img src="../../assets/logo/unicaen-favicon.png" alt="Unicaen icon in the coryright"> Unicaen</a>.</p>
    </div>
  </footer>

</template>

<style scoped>

footer{
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 8px #D3D3D3;
  background-color: #ffffff;
}
footer > *{
  width: 80%;
}
footer .footer-infos{
  display: flex;
  justify-content: center;
  margin: 30px 0;
  align-items: center;
}
footer .footer-infos .banner{
  display: flex;
  align-items: center;
  justify-content: center;
}
footer .footer-infos .banner figure img{
  height: 100px;
}
footer .footer-infos .footer-links{
  display: flex;
  width: 50%;
  flex-direction: row-reverse;
}
footer .footer-infos .footer-links ul{
  padding: 0;
}
footer .footer-infos .footer-links ul h3 {
  margin: 0 0 10px 0;
}
footer .footer-infos .footer-links ul li{
  display: block;
}
footer .footer-infos .footer-links ul li a{
  text-decoration: none;
  color: black;
}
footer .footer-infos .footer-links .general-links hr{
  width: 100%;
}
footer .footer-infos .footer-links .contact-links .lyombre a{
  display: flex;
  align-items: center;
}

footer .footer-infos .footer-links .contact-links .lyombre a img{
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
footer hr{
  margin: 3px 0;
  width: 80%;
  border: none;
  border-top: 1px double #333;
  color: #333;
}
footer .copyright{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
footer .copyright p{
  display: flex;
  align-items: center;
  font-size: 16px;
  margin: 5px;
}
footer .copyright p a{
  text-decoration: none;
  display: flex;
  align-items: center;
  color: black;
}
footer .copyright p a img{
  height: 25px;
  margin: 0 4px;
}

@media screen and (max-width: 1482px) {
  footer > *{
    width: 90%;
  }

  footer hr{
    width: 90%;
  }

  footer .footer-infos .footer-links{
    width: 55%;
  }
}

@media screen and (max-width: 1182px) {

  footer .footer-infos .footer-links{
    width: 100%;
  }

  footer .copyright{
    flex-direction: column;
  }

  footer .copyright p{
    text-align: center;
  }

  footer hr{
    width: 75%;
  }
}

@media screen and (max-width: 768px) {
  footer hr{
    width: 85%;
  }
}

@media screen and (max-width: 674px) {
  footer > *{
    width: 100%;
  }

  footer .footer-infos .banner figure img{
    height: 70px;
  }

  footer .footer-infos{
    flex-direction: column;
  }
  footer .footer-infos .footer-links{
    width: 40%;
    flex-direction: column;
    font-size: 1.2rem;
  }

  footer .copyright p:first-child{
    width: 70%;
  }

  footer hr{
    width: 70%;
  }
}

@media screen and (max-width: 458px) {
  footer .footer-infos .footer-links {
    width: 45%;
  }

  footer .copyright p:first-child{
    width: 80%;
  }

  footer hr{
    width: 80%;
  }
}


</style>