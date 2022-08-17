<script>
export default {
  props: {
    show: Boolean
  }
}
</script>

<template>
  <Transition name="modal">
    <div v-if="show" id="modal-wrapper">
      <div>Email copied</div>
    </div>
  </Transition>
</template>

<style scoped>
#modal-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
} 
#modal-wrapper div {
  background-color: #666;
  color: #fff;
  border-radius: 5px;
  padding: 5px;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}
</style>