
if ("speechSynthesis" in window) {
  // Web Speech API is supported
} else {
  alert("Web Speech API is not supported in this browser.");
}

// let addVoices = [];

// let voiceSelect = document.querySelector("select");
// window.speechSynthesis.onvoiceschanged = () => {
//   addVoices = window.speechSynthesis.getVoices();
//   speech.voice = addVoices[0];

//   addVoices.forEach(
//     (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
//   );
// };
