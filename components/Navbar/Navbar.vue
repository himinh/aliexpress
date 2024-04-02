<script setup lang="ts">
const isAccountMenu = ref<boolean>(false);
</script>

<template>
	<div class="fixed z-10 w-full">
		<div class="hidden w-full border-b md:block">
			<ul
				class="flex h-10 max-w-[1200px] items-center justify-end bg-[#FAFAFA] px-2 text-xs font-light text-[#333333]"
			>
				<li
					class="cursor-pointer border-r border-r-gray-400 px-3 transition hover:text-[#FF4646]"
				>
					Sell on AliExpress
				</li>

				<li
					class="cursor-pointer border-r border-r-gray-400 px-3 transition hover:text-[#FF4646]"
				>
					Cookie Preferences
				</li>

				<li
					class="cursor-pointer border-r border-r-gray-400 px-3 transition hover:text-[#FF4646]"
				>
					Help
				</li>

				<li
					class="cursor-pointer border-r border-r-gray-400 px-3 transition hover:text-[#FF4646]"
				>
					Buyer Protection
				</li>

				<li
					class="cursor-pointer px-3 transition hover:text-[#FF4646]"
				>
					<Icon name="mdi:login" size="17" />
				</li>

				<li
					class="relative flex h-full cursor-pointer items-center px-2.5 hover:text-[#FF4646]"
					:class="
						isAccountMenu
							? 'z-40 border bg-white shadow-[0_10px_100px_40px_rgba(0,0,0,0.3)]'
							: 'border border-[#FAFAFA]'
					"
					@mouseleave="isAccountMenu = false"
					@mouseenter="isAccountMenu = true"
				>
					<Icon name="mdi:account" size="17" />
					Account
					<Icon
						name="mdi:chevron-down"
						size="15"
						class="ml-5"
					/>

					<div
						v-if="isAccountMenu"
						class="absolute -left-[100px] top-[38px] z-40 w-[220px] border-x border-b bg-white text-[#333333]"
					>
						<div v-if="true">
							<p class="text-semibold my-4 px-3 text-sm">
								Welcome to AliExpress!
							</p>

							<div
								class="mb-3 flex items-center gap-1 px-3"
							>
								<NuxtLink
									to="/"
									class="text-md w-full rounded-sm bg-[#FF4646] p-2 text-center text-sm font-semibold text-white"
								>
									Login / Register</NuxtLink
								>
							</div>
						</div>

						<div class="border-t">
							<ul class="bg-white">
								<li
									class="w-full px-4 py-2 text-sm hover:bg-gray-200"
									@click="navigateTo('/')"
								>
									My Orders
								</li>

								<li
									v-if="true"
									class="w-full px-4 py-2 text-sm hover:bg-gray-200"
								>
									Sign Out
								</li>
							</ul>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<NavbarHeader />
	</div>
</template>

<style lang="css" scoped></style>
