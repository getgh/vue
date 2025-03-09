<template>
  <div class="projects">
    <h1>My Projects</h1>
    <p>Total Projects: {{ projectCount }}</p>
    <p v-if="projects.length === 0">⛔ No projects available.</p>
    <ul v-else>
      <li v-for="(project, index) in projects" :key="index">
        {{ project }}
        <button class="cus1" @click="removeProject(index)">Remove</button>
      </li>
    </ul>
    <input v-model="newProject" placeholder="Add a new project" />
    <button class="cus1" @click="addProject">Add Project</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'ProjectsView',
  setup() {
    const projects = ref(['Project 1', 'Project 2', 'Project 3']);
    const newProject = ref('');

    const projectCount = computed(() => projects.value.length);

    const addProject = () => {
      if (newProject.value.trim() !== '') {
        projects.value.push(newProject.value);
        newProject.value = '';
      }
    };

    const removeProject = (index) => {
      projects.value.splice(index, 1);
    };

    return {
      projects,
      newProject,
      projectCount,
      addProject,
      removeProject,
    };
  },
};
</script>

<style scoped>
.projects {
  padding: 20px;
}
</style>