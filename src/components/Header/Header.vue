<template>
	<header 
  		class="off-canvas-content grid-x"
  		v-bind:class="[slideout ? 'is-open-left has-transition-push has-position-left' : '']"
  	>
  		<div class="cell large-12 medium-12 small-12">
  			
  			<p class="header-banner"><img src="../../assets/new-large-header.png"></p>
  		</div>
  		<div class="cell large-6 medium-12 small-12">
  			<div class="menu-bar" data-responsive-toggle="example-animated-menu" data-hide-for="medium">
		      	
		      	<div class="title-bar-title"><router-link v-bind:to="'/dev/request-quote'">Request A Quote</router-link></div>
		          
		    </div>
  		</div>
	</header>
</template>

<script>
	export default {
		name: 'Header',
		props:['slideout'],
		methods: {
			toggleButton() {
				this.$emit('toggleButon');
			}
		}
	}
</script>


<style lang="scss">
	.title-bar-title a {
		color: #FFFFFF;
		text-decoration: underline;
		top: -1px;
    	position: relative;
	}

	.toggle-button {
		color: #FFFFFF;
		font-weight: 700;
	}

	.top-header-image {
		padding: 10px 0;

		img {
			margin: 10px 10px;
		}
	}

	.bottom-header-image {
		text-align: right;
    	padding: 10px;
    	position: relative;
    	left: -70px;
	}

	.top-header-image-link, bottom-header-image-link {
		cursor: pointer;
	}

	.top-header-image-link {
		img {
			max-width: 150%;
			width: 150%;
		}
	}

	.bottom-header-image-link {
		img {
			max-width: 45%;
			width: 45%;
		}
	}

	.image-link {
		cursor: pointer;
	}

	.main {
		.menu-bar {
			display: block;
			background-color: #bbc4db;
			line-height: 2;
    		color: #FFF;
    		padding-left: 20px;

    		span {
    			float: right;
    			padding-right: 20px;
    			font-weight: 700;
    			margin-top: 1px;
    		}

    		div {
    			padding-left: 5px;
    		}
		}
		h1 {
			color: #FFF;
			background-color: #000;
			font-weight: 700;
			font-size: 1.4rem;
			line-height: 2;
			text-align: center;
		}

		h2 {
			text-align: center;
			font-size: 1.5rem;
		}
	}

	p.header-banner {
		margin: 0;
	}

	@media only screen and (max-width: 376px) {
		.main {
			h2 {
				font-size: 1.0rem;
			}
		}
	}

	@media only screen and (max-width: 768px) and (min-width: 376px) {
		.off-canvas-content {
			background-image: url("../../assets/background-img.png");
			background-repeat: repeat-x;
		}
	}

	@media only screen and (min-width: 769px) {
		.off-canvas-content {
			background-image: url("../../assets/background-img.png");
			background-repeat: repeat-x;
		}
		.main {
			
			img {
				//width: 68%;
				//margin-top: 16px;
			}

			.menu-bar {
				display: none;
			}

			h1 {
				text-align: left;
			    color: #FFF;
			    font-size: 2.2rem;
			    background-color: transparent;
			    padding-top: 4%;
			}

			h2 {
				text-align: left;
			    top: 25%;
			    font-size: 1.4rem;
			    position: relative;
			}
		}
	}

	@media only screen and (width: 1024px) {
    	.main {
			img {
				width: 80%;
			}
		}
  	}
</style>