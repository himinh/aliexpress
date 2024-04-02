<script setup lang="ts">
useHead({
	title: "Airbnb",
	link: [
		{
			rel: "preconnect",
			href: "https://fonts.googleapis.com",
		},
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
			crossorigin: "",
		},
	],
});

const userStore = useUserStore();
</script>

<template>
	<div>
		<Navbar />

		<Loading v-if="userStore.isLoading" />

		<div class="pt-24 md:pt-36 lg:pt-40"></div>
		<slot />

		<Footer v-if="!userStore.isLoading" />
	</div>
</template>

<style lang="css">
html {
	padding: 0;
	@apply bg-gray-100;
}
</style>
