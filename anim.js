// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Ooh", time: 4 },
  { text: "I", time: 9 },
  { text: "I just woke up from a dream", time: 12 },
  { text: "Where you and I had to say goodbye", time: 16 },
  { text: "And I don't know what it all means", time: 20 },
  { text: "But since I survived, I realized", time: 25 },
  { text: "Wherever you go, that's where I'll follow", time: 29 },
  { text: "Nobody's promised tomorrow", time: 34 },
  { text: "So I'ma love you every night like it's the last night", time: 38 },
  { text: "Like it's the last night", time: 43 },
  { text: "If the world was ending, I'd wanna be next to you", time: 45 },
  { text: "If the party was over and our time on Earth was through", time: 54 },
  { text: "I'd wanna hold you just for a while", time: 103 },
  { text: "And die with a smile", time: 108 },
  { text: "If the world was ending, I'd wanna be next to you", time: 112 },
  { text: "Woo-ooht", time: 121 },
  { text: "Ooh, lost", time: 125 },
  { text: "Lost in the words that we scream", time: 129 },
  { text: "I don't even wanna do this anymore", time: 133 },
  { text: "'Cause you already know what you mean to me", time: 138 },
  { text: "And our love's the only war worth fighting for", time: 141 },
  { text: "Wherever you go, that's where I'll follow", time: 1447 },
  { text: "Nobody's promised tomorrow", time: 152 },
  { text: "So I'ma love you every night like it's the last night", time: 156 },
  { text: "Like it's the last night", time: 200 },
  { text: "If the world was ending, I'd wanna be next to you", time: 202 },
  { text: "TE AMO ALEJANDRA.", time: 211 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);