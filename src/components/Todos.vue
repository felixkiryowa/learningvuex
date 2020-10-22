<template>
  <div id="app">
    <div class="container">
      <h3>TODos</h3>
      <br />
      <div class="todos">
        <div v-for="todo in allTodos" v-bind:key="todo.id" class="todo">
          {{ todo.title }}

          <br>
          <button @click.prevent="delTodo(todo.id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
}

.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  computed: mapGetters(["allTodos"]),
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo']),
    delTodo(id) {
      this.deleteTodo(id);
    }
    
  },
  created(){
    this.fetchTodos();
  }
};
</script>
