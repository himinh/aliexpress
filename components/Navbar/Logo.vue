<script setup lang="ts"></script>

<template>
	<div>
		<img
			@click="navigateTo('/')"
			src="~/assets/images/logo.png"
			alt="Logo"
			class="hidden cursor-pointer md:block"
			width="100"
			height="100"
		/>
	</div>
</template>

<style lang="css" scoped></style>
