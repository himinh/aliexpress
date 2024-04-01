<script setup lang="ts">
// set title
useHead({
	titleTemplate: "%s - Auth Layout",
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
	<div class="align-center flex min-h-screen justify-center">
		<div class="rounded-lg bg-white p-5 shadow-lg">
			<h4 class="pb-4 text-xl text-blue-500">
				{{ $route.meta.title || "登录" }}
			</h4>
			<slot />
		</div>
	</div>
</template>
