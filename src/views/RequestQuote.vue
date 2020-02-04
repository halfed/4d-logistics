<template>
	<div>
		<page-body>
			<h3>Request A Quote</h3>
		</page-body>
		<div class="grid-x grid-padding-x">
			<div class="cell small-12">
				<form method="post" class="quote" id="quote" v-on:submit.prevent="submitForm">
					<div class="grid-x grid-margin-x">
						<div class="cell small-12 medium-5" :class="{'input-error': $v.firstName.$error}">
							<label for="firstName">First Name</label>
							<input type="text" name="firstName" class="first-name" id="firstName" v-model="firstName" />
							<div class="form-error" v-if="!this.$v.firstName.required">First Name Required</div>
						</div>
						<div class="cell small-12 medium-5" :class="{'input-error': $v.lastName.$error}">
							<label for="lastName">Last Name</label>
							<input type="text" name="lastName" id="lastName" class="last-name" v-model="lastName" />
							<div class="form-error" v-if="!this.$v.lastName.required">Last Name Required</div>
						</div>
					</div>

					<div class="grid-x grid-margin-x">
						<div class="cell small-12 large-5" :class="{'input-error': $v.email.$error}">
							<label for="email">Email</label>
							<input type="email" name="email" id="email" class="email" v-model="email" />
							<div class="form-error" v-if="!this.$v.email.required">Email Required</div>
							<div class="form-error" v-if="!this.$v.email.email">Valid Email Required</div>
						</div>
						<div class="cell small-12 large-5" :class="{'input-error': $v.phone.$error}">
							<label for="phone">Phone</label>
							<input type="text" name="phone" id="phone" class="phone" v-model="phone" />
							<div class="form-error" v-if="!this.$v.phone.required">Phone Required</div>
						</div>
					</div>

					<div class="grid-x grid-margin-x">
						<div class="cell large-6 small-12"> 
							<div :class="{'input-error': $v.addressPickUp.$error}">
								<label for="addressPickUp">Address (Pick Up)</label>
								<input type="text" name="addressPickUp" id="start-address" class="start-address" v-model="addressPickUp" />
								<div class="form-error" v-if="!this.$v.addressPickUp.required">Address Required</div>
							</div>

							<div>
								<label for="addressPickUp2">Address 2 (Pick Up)</label>
								<input type="text" name="addressPickUp2" id="start-address2" class="start-address2" v-model="addressPickUp2" />
							</div>
						</div>

						<div class="cell large-4 small-12">
							<div class="grid-x grid-margin-x">
								<div class="cell small-4" :class="{'input-error': $v.picUpCity.$error}">
									<label for="picUpCity">City</label>
									<input type="text" name="picUpCity" id="start-city" class="start-city" v-model="picUpCity" />
									<div class="form-error" v-if="!this.$v.picUpCity.required">City Required</div>
								</div>
								<div class="cell small-4" :class="{'input-error': $v.pickUpStateSelected.$error}">
									<label for="pickUpState">State</label>
									<select name="pickUpState" v-model="pickUpStateSelected">
										<option disabled value="">Select</option>
										<option v-for="state in pickUpState.states" v-bind:value="state.id" v-bind:key="state.id"> {{ state.name }} </option>
									</select>
									<div class="form-error" v-if="!this.$v.pickUpStateSelected.required">State Required</div>
								</div>
								<div class="cell small-4" :class="{'input-error': $v.pickUpZip.$error}">
									<label for="pickUpZip">Zip</label>
									<input type="text" name="pickUpZip" id="start-zip" class="start-zip" v-model="pickUpZip" />
									<div class="form-error" v-if="!this.$v.pickUpZip.required">Zip Required</div>
								</div>
							</div>
						</div>
					</div>

					<div class="grid-x grid-margin-x">
						<div class="cell large-6 small-12">
							<div :class="{'input-error': $v.addressDropOff.$error}">
								<label for="addressDropOff">Address (Drop Off)</label>
								<input type="text" name="addressDropOff" id="end-address" class="end-address" v-model="addressDropOff" />
								<div class="form-error" v-if="!this.$v.addressDropOff.required">Address Required</div>
							</div>
							<div>
								<label for="addressDropOff2">Address 2 (Drop Off)</label>
								<input type="text" name="addressDropOff2" id="end-address2" class="end-address2" v-model="addressDropOff2" />
							</div>
						</div>

						<div class="cell large-4 small-12">
							<div class="grid-x grid-margin-x">
								<div class="cell small-4" :class="{'input-error': $v.dropOffCity.$error}">
									<label for="dropOffCity">City</label>
									<input type="text" name="dropOffCity" id="end-city" class="end-city" v-model="dropOffCity" />
									<div class="form-error" v-if="!this.$v.dropOffCity.required">City Required</div>
								</div>
								<div class="cell small-4" :class="{'input-error': $v.dropOffStateSelected.$error}">
									<label for="dropOffState">State
									<select name="dropOffState" v-model="dropOffStateSelected">
										<option disabled value="">Select</option>
										<option v-for="state in dropOffState.states" v-bind:value="state.id" v-bind:key="state.id"> {{ state.name }} </option>
									</select>
									</label>
									<div class="form-error" v-if="!this.$v.dropOffStateSelected.required">State Required</div>
								</div>
								<div class="cell small-4" :class="{'input-error': $v.dropOffZip.$error}">
									<label for="dropOffZip">Zip</label>
									<input type="text" name="dropOffZip" id="end-zip" class="end-zip" v-model="dropOffZip" />
									<div class="form-error" v-if="!this.$v.dropOffZip.required">Zip Required</div>
								</div>
							</div>
						</div>
					</div>
					<div class="grid-x grid-margin-x">
						<div class="cell large-6 small-12" :class="{'input-error': $v.equipmentType.$error}">
							<label for="equipmentType">Equipment Type</label>
							<input type="text" name="equipmentType" v-model="equipmentType" />
							<div class="form-error" v-if="!this.$v.equipmentType.required">Required</div>
						</div>
					</div>
					<div class="grid-x grid-margin-x">
						<div class="cell large-6 small-12" :class="{'input-error': $v.weight.$error}">
							<label for="weight">Weight</label>
							<input type="text" name="weight" v-model="weight" />
							<div class="form-error" v-if="!this.$v.weight.required">Required</div>
						</div>
					</div>
					<div class="terms" :class="{'input-error': $v.terms.$error}">
						<input type="checkbox" name="terms" id="terms" v-model="terms" />
						<span>I agree to the <a href="https://app.termly.io/document/privacy-policy/46d47efe-0a29-4bc8-8ee1-35030bc5db76" target="_blank">Privacy Policy</a></span>
						<div class="form-error" v-if="!this.$v.terms.required">Required</div>
					</div>
					<button type="submit" class="button" :disabled="disableButton">Submit</button>
					<p class="alert-message" v-if="displayMessage === 'ERROR'">Please fill the form correctly.</p>
  					<p class="" v-if="displayMessage === 'OK'">Thanks for your submission! We will contact you to set up your move.</p>
  					<p class="" v-if="displayMessage === 'PENDING'">Sending...</p>
  					<p class="" v-if="displayMessage === 'ERR'">{{ errorStatus }}</p>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import { required, minLength, between, email } from 'vuelidate/lib/validators';
	import Vue from 'vue';
	import VCalendar from 'v-calendar';
	import {mapActions} from 'vuex';
	// Use v-calendar & v-date-picker components
	Vue.use(VCalendar, {
	  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
	 // ...,                // ...other defaults
	});
	export default {
		name: 'quote',
		data() {
			return {
				mode: 'single',
          		inputValue: '',
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				addressPickUp: '',
				addressPickUp2: '',
				picUpCity: '',
				pickUpStateSelected: '',
				pickUpState: {
					states: [
						{
							id: 6,
							name: 'Colorado',
							value: 'Colorado'
						},
						{
							id: 9,
							name: 'Florida',
							value: 'Florida'
						}
					]
				},
				pickUpZip: '',
				addressDropOff: '',
				addressDropOff2: '',
				dropOffCity: '',
				dropOffStateSelected: '',
				dropOffState: {
					states: [
						{
							id: 6,
							name: 'Colorado',
							value: 'Colorado'
						},
						{
							id: 9,
							name: 'Florida',
							value: 'Florida'
						}
					]
				},
				dropOffZip: '',
				equipmentType: '',
				weight: '',
				terms: '',
				disableButton: false,
				payload: {}
			}
		},
		validations: {
	    	firstName: {
	      		required
	    	},
	    	lastName: {
	      		required
	    	},
	    	email: {
	    		required,
	    		email
	    	},
	    	phone: {
	    		required
	    	},
	    	addressPickUp: {
	    		required
	    	},
	    	picUpCity: {
	    		required
	    	},
	    	pickUpStateSelected: {
	    		required
	    	},
	    	pickUpZip: {
	    		required
	    	},
	    	addressDropOff: {
	    		required
	    	},
	    	dropOffCity: {
	    		required
	    	},
	    	dropOffStateSelected: {
	    		required
	    	},
	    	dropOffZip: {
	    		required
	    	},
	    	weight: {
	    		required
	    	},
	    	equipmentType: {
	    		required
	    	},
	    	terms: {
	    		required
	    	}
	  	},
	  	computed: {
	  		displayMessage() {
	  			return this.$store.state.mainStore.submitStatus;
	  		},
	  		errorStatus() {
	  			return this.$store.state.mainStore.returnMessage;
	  		}
	  	},
		methods: {
			...mapActions({
		        postForm: 'postFormdata'
		    }),
			submitForm(event) {
				event.preventDefault();
				this.$v.$touch();

				if (this.$v.$invalid) {
			        this.$store.state.mainStore.submitStatus = 'ERROR'
			    } else {
			        // do your submit logic here
			          	this.payload["firstName"] = this.firstName;
						this.payload["lastName"] = this.lastName;
						this.payload["email"] = this.email;
						this.payload["phone"] = this.phone;
						this.payload["addressPickUp"] = this.addressPickUp;
						this.payload["addressPickUp2"] = this.addressPickUp2;
						this.payload["picUpCity"] = this.picUpCity;
						this.payload["pickUpState"] = this.pickUpStateSelected;
						this.payload["pickUpZip"] = this.pickUpZip;
						this.payload["addressDropOff"] = this.addressDropOff;
						this.payload["addressDropOff2"] = this.addressDropOff2;
						this.payload["dropOffCity"] = this.dropOffCity;
						this.payload["dropOffState"] = this.dropOffStateSelected;
						this.payload["dropOffZip"] = this.dropOffZip;
						this.payload["terms"] = this.terms;
						this.postForm(this.payload);
			    }
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import 'node_modules/@livelybone/vue-datepicker/lib/css/index.scss';

	textarea {
		margin: 0px 0px 16px;
    	height: 229px;
	}

	.form-error-date {
		margin-top: 5.5px;
	}

	.terms {
		span {
			position: relative;
			top: -2px;
			display: inline-block;
		}
	}
</style>