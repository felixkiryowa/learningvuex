<template>
  <div>
      <h3>Add Todo</h3>
      <br />
      <div class="add">
      <form @submit.prevent="onSubmit">
            <input id="title" type="text" v-model="title" placeholder="Add Title" />
            <input id="submitBtn" type="submit" value="Submit" />
      </form>
      </div>
  </div>
</template>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data(){
      return {
          title: ''
      }
  },
  methods: {
    ...mapActions(["addTodo"]),

    onSubmit() {
        this.addTodo(this.title);
    }
  },

  created() {
    
  },
};
</script>
