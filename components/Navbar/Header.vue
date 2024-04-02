<script setup lang="ts">
const isSearching = ref<boolean>(true);
const searchItem = ref<string>("");
const isCartHover = ref<boolean>(true);
</script>

<template>
	<dv class="flex w-full items-center bg-white">
		<div
			class="mx-auto flex w-full max-w-[1150px] items-center justify-between gap-10 px-3 py-5 lg:justify-start"
		>
			<!-- logo -->
			<NuxtLink to="/" class="min-w-[170px]">
				<img
					src="assets/images/logo.png"
					alt="Logo"
					width="170"
				/>
			</NuxtLink>

			<!-- search -->
			<div class="hidden w-full max-w-[700px] md:block">
				<div class="relative">
					<div
						class="flex w-full items-center rounded-md border-2 border-[#FF4646]"
					>
						<input
							v-model="searchItem"
							class="w-full pl-3 text-sm placeholder-gray-400 focus:outline-none"
							placeholder="kitchen accessories"
							type="text"
						/>
						<Icon
							v-if="isSearching"
							class="mr-2"
							name="eos-icons:loading"
							size="25"
						/>
						<div
							class="flex h-full cursor-pointer items-center bg-[#FF4646] p-1.5 px-2 transition duration-200 hover:opacity-80"
						>
							<Icon
								name="mdi:magnify"
								size="20"
								color="#ffffff"
							/>
						</div>
					</div>

					<div
						class="absolute h-auto w-full max-w-[700px] bg-white"
					>
						<div v-if="false" class="p-1">
							<NuxtLink
								to="/auth/login"
								class="flex w-full cursor-pointer items-center justify-between hover:bg-gray-100"
							>
								<div class="flex items-center">
									<img
										width="40"
										src="https://picsum.photos/300/320"
										alt=""
										class="rounded-md"
									/>
									<p class="ml-2 truncate">TESTING</p>
								</div>
								<div class="truncate">$ 98.99</div>
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>

			<!-- cart -->
			<NuxtLink to="/" class="flex items-center">
				<button
					class="relative hidden md:block"
					@mouseenter="isCartHover = true"
					@mouseleave="isCartHover = false"
				>
					<span
						class="absolute -right-3 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#FF4646] px-0.5 text-xs text-white"
					>
						0
					</span>

					<div class="min-w-[40px]">
						<Icon
							name="i-ion-cart-outline"
							size="33"
							:color="isCartHover ? '#FF4646' : ''"
						/>
					</div>
				</button>
			</NuxtLink>

			<button
				class="-mt-[4px] block rounded-full p-1.5 transition duration-200 hover:bg-gray-200 md:hidden"
			>
				<Icon name="i-ri-menu-line" size="33" />
			</button>
		</div>
	</dv>
</template>

<style lang="css" scoped></style>
