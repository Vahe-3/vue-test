<template>
	<div class="create-user-form">
		<input v-model="formData.name" name="name" class="user-input" type="text" placeholder="Имя" />
		<input v-model="formData.lastName" name="lastName" class="user-input" type="text" placeholder="Фамилия" />
		<input v-model="formData.phone" name="phone" class="user-input" type="number" placeholder="Телефон" />
		<select :value="selectedUser" @change="handleChangeSelect($event.target.value)" class="users-select">
			<option value="main">Глав. Начальник</option>
			<option v-for="user in allUsers" :value="user.id" :key="user.id">{{ `${user.name} ${user.lastName}` }}</option>
		</select>
		<Button @click="handleSubmit" :disabled="disableButton" variant="primary">Сохранить</Button>
	</div>
</template>

<script>
import Button from './Button.vue';

export default {
	name: 'CreateUserForm',
	components: {
		Button,
	},
	data() {
		return {
			formData: { name: '', lastName: '', phone: '' }
		}
	},
	props: {
		allUsers: {
			type: Array,
			required: true,
		},
		addNewUser: {
			type: Function,
			required: true
		},
		selectedUser: {
			type: String,
			required: true
		},
		handleChangeSelect: {
			type: Function,
			required: true
		}
	},
	methods: {
		handleSubmit() {
			const newUser = {
				id: Math.random().toString(),
				name: this.formData.name,
				lastName: this.formData.lastName,
				phone: this.formData.phone,
				workers: []
			}

			this.addNewUser(newUser)
			this.formData = { name: '', lastName: '', phone: '' };
		},
	},
	computed: {
		disableButton() {
			return !Object.values(this.formData).every(value => value.trim() !== '');
		}
	}
}
</script>

<style scoped>
.create-user-form {
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	row-gap: 20px;
}

.user-input {
	all: unset;
	font-size: 20px;
	height: 30px;
	padding: 5px;
	border: 2px solid #8A20A6;
	border-radius: 5px;
}

.users-select {
	font-size: 20px;
	height: 40px;
	padding: 5px;
	border-radius: 5px;
	cursor: pointer;
	background: transparent;
}

.users-select:focus {
	border: 2px solid #8A20A6;
	outline: none;
}
</style>