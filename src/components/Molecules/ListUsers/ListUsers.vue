<template>
  <ListLayout>
    <UserCard
        v-for="user in users"
        :key="user.id"
        :user="user"
    />
  </ListLayout>
</template>

<script setup lang="ts">
import ListLayout from '../ListLayout/ListLayout.vue'
import UserCard from '../UserCard/UserCard.vue'

defineProps<{
  users: {
    id: string | number
    name: string
    email: string
    role?: string
    isActive?: boolean
    avatar?: string
  }[]
}>()
</script>
