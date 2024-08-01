<template>
	<div v-if="visible" class="modal-overlay" @click.self="closeModal">
		<div class="modal-content">
			<span class="close-button" @click="closeModal">&times;</span>
			<h2 class="title">{{ title }}</h2>
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Modal',
	props: {
		visible: {
			type: Boolean,
			required: true
		},
		title: {
			type: String,
			required: true
		}
	},
	methods: {
		closeModal() {
			this.$emit('close');
		}
	}
}
</script>

<style scoped>
.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
}

.modal-content {
	background: white;
	padding: 20px;
	border-radius: 5px;
	position: relative;
	min-width: 500px;
}

.close-button {
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
	font-size: 40px;
	color: #8A20A6;
}

.title {
	color: #8A20A6;
}
</style>