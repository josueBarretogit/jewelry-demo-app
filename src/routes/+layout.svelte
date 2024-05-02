<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

	import '../app.pcss';
</script>

<Navbar>
	<NavBrand href="/">
		<img src="" class="me-3 h-6 sm:h-9" alt="Joyeria 3D logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>Joyeria 3D</span
		>
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href="/rings">Anillos 3D</NavLi>
	</NavUl>
</Navbar>

<slot></slot>
