<template>
<footer class="d-flex flex-column flex-grow-1">
	<div class="row flex-grow-1">
		<!-- Spacer -->
	</div>
	<div class="footer row flex-grow-0">
		<div class="col-12">
			The Wright Reason © 2019
		</div>
	</div>
</footer>
</template>

<style scoped lang="scss">
$footer-offset: 1.5rem;
footer {
	margin-top: $footer-offset;
}
.footer {
	@import "@/assets/sass/DefaultTheme.scss";

	background-color: map-get($theme-colors, "body-bg") !important;
	border-top: 1px solid map-get($theme-colors, "body-border");
	padding: 15px 0;
}
</style>
