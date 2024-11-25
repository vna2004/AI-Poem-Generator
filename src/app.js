function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: `वो अपनों की बातें, वो अपनों की ख़ू—बू
                <br>
                हमारी ही हिंदी, हमारी ही उर्दू!`,
    autoStart: true,
    delay: 100,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
