const colorPalettes = [
    'color-palette-base',
    'color-palette-purpura',
    'color-palette-azul',
    'color-palette-purpura-claro',
    'color-palette-mixtos',
  ];
  
  const randomPalette = () => {
    const randomIndex = Math.floor(Math.random() * colorPalettes.length);
    const selectedPalette = colorPalettes[randomIndex];
    document.documentElement.classList.remove(...colorPalettes);
    document.documentElement.classList.add(selectedPalette);
  };
  
  // Add event listener to button
  const button = document.getElementById('boton-paleta');
  button.addEventListener('click', randomPalette);


function toggleSidebarWidth() {
  let header = document.getElementById("header-id");
  let main = document.getElementById('main-id')
  let navigation = document.getElementById('navigation-id')
  let perfil = document.getElementById('perfil-id')
  let logo = document.getElementById('logo-titulo-id')

  if (header.classList.contains("small") && main.classList.contains("max")) {
      // Si la barra lateral está en tamaño reducido, eliminar la clase "small"
      header.classList.remove("small");
      main.classList.remove("max");
      navigation.classList.remove("oculto")
      perfil.classList.remove("column")
      logo.classList.remove("column")

  } else {
      // Si la barra lateral está en su tamaño original, agregar la clase "small"
      header.classList.add("small");
      main.classList.add("max")
      navigation.classList.add("oculto")
      perfil.classList.add("column")
      logo.classList.add("column")

  }
}
