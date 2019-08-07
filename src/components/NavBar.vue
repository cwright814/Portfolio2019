<template>
<b-navbar toggleable="sm" type="light" variant="info" fixed="top">
	<b-navbar-brand>Portfolio 2019</b-navbar-brand>

	<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

	<b-collapse id="nav-collapse" is-nav>
		<b-navbar-nav id="nav">
			<b-nav-item :to="{ name: 'intro' }">Intro</b-nav-item>
			<b-nav-item :to="{ name: 'experience' }">Experience</b-nav-item>
			<b-nav-item :to="{ name: 'examples' }">Examples</b-nav-item>
		</b-navbar-nav>
	</b-collapse>
</b-navbar>
</template>

<style scoped lang="scss">
nav {
	background-color: #ffffff !important;
	border-bottom: 1px solid #eaecef;
}
#nav {
	a {
		font-size: 1.25rem;
		color: #2c3e50;
		@media (max-width: 575px) {
			&:hover, &.router-link-exact-active {
				color: #46bd87 !important;
			}
		}
	}
	.nav-link {
		padding-bottom: 0;
	}
}
@media (min-width: 576px) {
	#nav {
		margin-left: auto;
		margin-right: auto;
		a {
			&.router-link-exact-active {
				border-bottom-color: #46bd87;
				border-bottom-style: solid;
				border-bottom-width: 2px;
			}
			&:hover {
				border-bottom-color: #46bd87;
				border-bottom-style: solid;
				border-bottom-width: 2px;
			}
		}
	}
	#nav-collapse {
		// Force full width regardless of branding
		position: absolute;
		width: 100%;
		margin-left: -16px;
	}
	.navbar-expand-sm .navbar-nav .nav-link {
		padding: 0;
		margin-left: 0.5rem;
		margin-right: 0.5rem;
	}
}
.navbar {
	padding: 0.5rem 1rem;
}
.navbar-brand {
	color: #2c3e50;
}
</style>
