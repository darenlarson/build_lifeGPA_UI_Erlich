class Achievement {
    constructor(achievementElement){
      this.achievementElement = achievementElement;
      this.achievementElement.addEventListener("mouseover", () => this.select());
      this.achievementElement.addEventListener("mouseout", () => this.deselect());
    }
  
    select(){
      this.achievementElement.classList.add("shadow-drop-2-center");
    }

    deselect(){
        this.achievementElement.classList.remove("shadow-drop-2-center");
      }
  }

let achievements = document.querySelectorAll(".achievement");
achievements.forEach(achievement => new Achievement(achievement));