const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 8,
  health: 100,
  image: "images/snortleblat.png",
  isDead: false,

  attacked() {
    if (this.isDead) return;

    this.health -= 20;

    if (this.health <= 0) {
      this.health = 0;
      this.isDead = true;
      updateDisplay();
      alert("Character Died");
      return;
    }

    updateDisplay();
  },

  levelUp() {
    if (this.isDead) return;

    this.level += 1;
    updateDisplay();
  }
};

function updateDisplay() {
  document.getElementById("name").textContent = character.name;
  document.getElementById("class").textContent = character.class;
  document.getElementById("level").textContent = character.level;
  document.getElementById("health").textContent = character.health;

  document.getElementById("character-image").src = character.image;
}

document.getElementById("attack-btn").addEventListener("click", () => {
  character.attacked();
});

document.getElementById("levelup-btn").addEventListener("click", () => {
  character.levelUp();
});

updateDisplay();