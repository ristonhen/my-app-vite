<template>
    <div>
        <h1 class="font-extrabold text-3xl">Home</h1>
        <p class="mb-6">Name in store is : {{ name }}</p>


        <input v-model="newName" type="text" name="" id="" class="mr-4 p-2 rounded border border-gray-600">
        <button @click="saveName" class="p-2 text-white bg-indigo-600 rounded">Submit</button>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const router = useRouter()

const store = useStore()

const name = computed(() => {
    return store.state.user.name
})

const newName = ref('')
const saveName = () => {
    store.dispatch('saveName', newName.value)
    newName.value = ''
    router.push('/about')
}
</script>

<style></style>