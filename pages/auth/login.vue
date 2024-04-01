<script setup lang="ts">
import { storeToRefs } from "pinia";

useHead({ title: "Log In" });
definePageMeta({
	layout: "auth",
	// middleware: ["only-visitor"],
	title: "Log In",
});

const authStore = useAuthStore();

const { loading, authUser } = storeToRefs(authStore);
// const from = <string>route.query.from || "";

const onSubmit = (): string => {
	// TODO: handle login
	console.log(loading, authUser);
	return "";
};
</script>

<template>
	<form action="">Login page</form>
</template>

<style lang="css" scoped></style>
