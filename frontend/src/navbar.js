import React from 'react';

export default function Navbar() {
return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand ms-5" href="#"><img src='media/images/navlogo.svg'></img><img src='media/images/SkinClinic.png'></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ms-5" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>


      <span class="navbar-text navbar navbar-expand-lg bg-body-tertiary ">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
        <li class="nav-item">
          <a class="nav-link" href="#"><img src='media/images/aletacc.svg'></img></a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#"><img src='media/images/vector.svg'></img></a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#"><img src='media/images/vector2.svg'></img></a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#"><img src='media/images/trolly.png'></img></a>
        </li>
        </ul>
      </span>
    </div>
  </div>
</nav>
)
}