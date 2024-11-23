const loadButtons = async () => {
  try {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json();

    const buttons = data.data || [];

    if(!Array.isArray(buttons)) {
      console.error(buttons);
      return;
    }

    diplayButtons(buttons);
  } catch (error){
    console.error("Failed to load:", error);    
  }
};

const diplayButtons = (buttons) => {
  const getButtons = document.getElementById('button-container')

  buttons.forEach(button => {
    const buttonShed = document.createElement('div');
    buttonShed.classList = `text-center mt-5 mx-3`;
    buttonShed.innerHTML = `
    <button class="btn btn-active">${button.category}</button>
    `
    getButtons.appendChild(buttonShed);
  });
}

loadButtons();