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
</script>

<template>
	<div>
		<Navbar />

		<slot />
	</div>
</template>

<style lang="css"></style>
