<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

	import '../app.pcss';
</script>

<Navbar>
	<NavBrand href="/">
		<img src="/images/jalbac-logo.jpg" class="me-3   w-20 h-20" alt="Joyeria 3D logo" />

		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>Joyeria 3D</span
		>

		
	</NavBrand>

  <NavUl>
		<NavLi href="/rings">Catalogo</NavLi>
	</NavUl>
	<NavHamburger />
	
</Navbar>

<slot></slot>
