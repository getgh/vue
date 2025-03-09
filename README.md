# Personal Website with Vue 3

## Project Description

This project is a personal website built using Vue 3. It includes multiple sections such as Home, Projects, and Contact, and demonstrates key Vue concepts such as reactivity, two-way data binding, list rendering, conditional rendering, event handling, computed properties, and watchers. The website is structured as a single-page application with navigation between sections using Vue Router with some transition fade-in effects for section changes.

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/getgh/vue
    ```

2. Install the project files:
    ```sh
    npm install
    ```

### Running the Project

1. To Start the server:
    ```sh
    npm run serve
    ```

2. Open your web browser and navigate to `http://localhost:8080` to view the website.

## Challenges Faced

- Ensuring proper reactivity and state management across different components.
- Implementing conditional rendering and dynamic data updates using properties and watchers.
- Adding smooth transitions.

## Project Inclueds:

- **Home Page**: A welcome message that can be toggled.
- **Projects Section**: Displays a list of projects and shows a message if there is no projects are available.
- **Contact Section**: Includes a form for users to submit their contact details, with watchers to log changes in form inputs.
- **Interactivity and State Management**: Used `ref()` for reactivity, `v-model` for two-way data binding, `v-for` for list rendering, `v-if` and `v-show` for conditional rendering, `v-on` for event handling, `computed()` for derived data, and `watch()` for tracking changes.
- **Transitions**: Smooth transitions and fade-in effects for section changes.