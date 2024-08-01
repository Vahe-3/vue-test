<template>
	<button :disabled="disabled" class="button" :class="buttonClasses" @click="handleClick">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'Button',
	props: {
		variant: {
			type: String,
			default: 'primary',
			validator(value) {
				return ['primary', 'secondary'].includes(value);
			}
		},
		disabled: {
			type: Boolean
		}
	},
	computed: {
		buttonClasses() {
			return {
				'primary-button': this.variant === 'primary' && !this.disabled,
				'secondary-button': this.variant === 'secondary' && !this.disabled,
				'disabled-button': this.disabled
			};
		}
	},
	methods: {
		handleClick() {
			this.$emit('click');
		}
	}
}
</script>

<style scoped>
.button {
	padding: 10px 20px;
	font-size: 16px;
	border: none;
	cursor: pointer;
	transition: background-color 0.3s;
	color: white;
	border-radius: 5px;
	border: 1px solid #fff;
}

.primary-button {
	background-color: #8A20A6;
}

.primary-button:hover {
	background-color: #4343f0;
}

.secondary-button {
	background: transparent;
	border: 1px solid #fff;
}

.secondary-button:hover {
	background-color: #8A20A6;
}

.disabled-button {
	background-color: #ccc;
	color: #666;
	cursor: not-allowed;
	border-color: #ccc;
}

.disabled-button.primary-button {
	background-color: #ccc;
}

.disabled-button.secondary-button {
	background-color: transparent;
	border-color: #ccc;
}
</style>