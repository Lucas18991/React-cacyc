
const header = () =>{
    return(

<header id="head">
        <h1 class="h1cls">CACYC--Centro Argentino de Capacitacion y Certificacion</h1>
			<nav class="navbar navbar-expand-lg bg-light">
				<div class="container-fluid">
				  <a class="navbar-brand" href="../index.html" width="200px" height="200px"><img src="../Media/img/logo.jpg" alt="Logo CACYC"></img></a>
				  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				  </button>
				  <div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav navbarstrpad justify-content-center col-lg col-sm col-md">
					  <li class="nav-item navbarstrpad">
						<a class="nav-link active" aria-current="page" href="../index.html">Home</a>
					  </li>
					  <li class="nav-item navbarstrpad">
						<a class="nav-link active" href="aboutus.html">About us</a>
					  </li>
					  <li class="nav-item navbarstrpad">
						<a class="nav-link active" href="servicios.html">Servicios</a>
					  </li>
				  <li class="nav-item dropdown navbarstrpad">
						<a class="nav-link active dropdown-toggle" href="cursos.html" id="navbarDropdown" 	role="button" data-bs-toggle="dropdown" aria-expanded="false">
						  Cursos
						</a>
						<ul class="dropdown-menu " aria-labelledby="navbarDropdown">
						  <li><a class="dropdown-item active " href="cursos.html">Informacion General Cursos</a></li>
						  <li><a class="dropdown-item active " href="cursosEslinaje.html">Ejemplo Cursos Eslinaje</a></li>
					  <li><a class="dropdown-item active " href="cursosGruasMoviles.html">Ejemplo Curso Gruas Moviles</a></li>
						</ul>
					  </li>
					  
					  <li class="nav-item navbarstrpad">
						<a class="nav-link active" href="contacto.html">Contacto</a>
					  </li>
					</ul>
					<form class="d-flex" role="search">
					  <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"> </input>
					  <button class="btn btn-outline-success" type="submit">Buscar</button>
					</form>
				  </div>
				</div>
			  </nav>
	</header>

    )
    
    }

    export default header;