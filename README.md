# p5.js Side-Scrolling Platformer

A classic side-scrolling platformer developed using the **p5.js** library. This project features custom physics, a dynamic camera system, and a unique atmosphere inspired by iconic gaming culture (including "Wasted" death screens and "Mission Passed" milestones).

⠀
  
## 🎮 Game Overview

In this game, the player controls a character navigating through a manually defined world. The goal is to reach the flagpole at the end of the level while collecting coins, avoiding enemies, and navigating treacherous canyons.

### Key Features

* **Custom Physics Engine**: Real-time gravity, friction, and collision detection implemented from scratch.
* **Dynamic Camera**: A scrolling window that follows the player, with optimized rendering for off-screen objects.
* **Platforming Mechanics**: Interactive platforms and "plummeting" logic for canyon falls.
* **Audio Integration**: A rich soundscape featuring event-driven sound effects such as the "Wilhelm Scream" for deaths and custom "Wasted" audio.
* **Performance Optimization**: Fixed frame-rate handling and high-distance rendering margins to prevent visual "pop-in" glitches.

⠀
⠀

## 🛠️ Technical Details

### Collision & Physics
The game utilizes precise axis-aligned bounding box (AABB) logic. The gravity system is defined by a constant acceleration applied to the vertical velocity when the character is not supported by a surface.

The "Plummeting" state is triggered when the character's horizontal position $x_{char}$ falls within the open interval of a canyon:

$$(x_{canyon} + \delta < x_{char} < x_{canyon} + w_{canyon} - \delta)$$

where $\delta$ represents the collision margin adjusted for the character's size.


### Performance Tuning
To ensure consistent gameplay across different hardware (preventing "speed-up" on high-end machines or "slow-down" on battery saving), the following configurations are applied:
* **Target Frame Rate**: Locked at **35 FPS** for stable physics simulation.
* **Render Margin**: Set to **2000px** to ensure background elements like canyons and platforms are drawn long before they enter the visible viewport.

⠀
⠀

## 🚀 Getting Started

You can play the game directly in your web browser without any installation:
**[Play Ninja Game Live](https://nfuent02.github.io/ninja-game/)**


### 💻 Local Installation
If you prefer to run the project locally or modify the source code:

1.  **Clone this repository**:

    ```bash
    git clone [https://github.com/nfuent02/ninja-game.git](https://github.com/nfuent02/ninja-game.git)
    ```
3.  **Open `index.html`** in a web browser.
    * *Note: Using a local server (like VS Code Live Server) is recommended to avoid browser CORS issues with audio assets.*
⠀

### Controls
* **Move Left**: `A` or `Left Arrow`
* **Move Right**: `D` or `Right Arrow`
* **Jump**: `W`, `Space`, or `Up Arrow`

⠀

## License
This project is open-source and available under the MIT License.
