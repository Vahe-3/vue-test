<template>
	<div :class="['table-item', { 'table-item--open': isOpen }]">
		<div class="content">
			<div class="content-item">
				<div class="open-button" @click="setIsOpen">{{ isOpen ? '▼' : '►' }}</div>
				<Button @click="handleSelectUser(user.id)" class="add-button" variant="primary">+</Button>
				{{ user.name }}
			</div>
			<div class="content-item">{{ user.lastName }}</div>
			<div class="content-item">{{ user.phone }}</div>
			<div class="content-button"><Button class="add-button" variant="primary"
					@click="handleDeleteUser(user.id)">x</Button></div>
		</div>
		<TableItem v-for="user in user.workers" :key="user.id" :user="user" :handleDeleteUser="handleDeleteUser"
			:handleSelectUser="handleSelectUser" />
	</div>
</template>

<script>
import Button from './Button.vue';
export default {
	name: 'TableItem',
	components: {
		Button
	},
	data() {
		return {
			isOpen: true
		}
	},
	props: {
		user: {
			type: Object,
			required: true
		},
		handleSelectUser: {
			type: Function,
			required: true
		},
		handleDeleteUser: {
			type: Function,
			required: true
		}
	},
	methods: {
		setIsOpen() {
			this.isOpen = !this.isOpen
		},
	},
}
</script>

<style scoped>
.table-item {
	background-color: #fff;
	font-size: 18px;
	padding-left: 10px;
	height: 40px;
	overflow: hidden;
}

.content {
	display: flex;
	align-items: center;
	background-color: #fff;
	height: 40px;
}

.content-item {
	width: 30%;
	display: flex;
	border-right: 1px solid #000;
	align-items: center;
	gap: 5px;
	padding-left: 5px;
	overflow: hidden;
}

.add-button {
	padding: 5px;
	margin-right: 5px;
}

.content-button {
	width: 10%;
	display: flex;
	justify-content: center;
}

.open-button {
	font-size: 18px;
	font-weight: bold;
	color: #40124d;
	cursor: pointer;
	text-align: center;
}

.table-item--open {
	height: fit-content;
}

.hidden {
	visibility: hidden;
}
</style>