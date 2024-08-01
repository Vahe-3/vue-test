<template>
	<div>
		<div class="table">
			<Button variant="secondary" class="button" @click="showModal">Добавить</Button>
			<header class="header">
				<div class="header-item">Имя</div>
				<div class="header-item">Фамилия</div>
				<div class="header-item">Телефон</div>
			</header>
			<TableItem v-for="user in users" :key="user.id" :user="user" :handleSelectUser="handleSelectUser"
				:handleDeleteUser="handleDeleteUser" />
		</div>
		<Modal :visible="isModalVisible" @close="closeModal" title="Добавление пользователя">
			<CreateUserForm :allUsers="allUsers" :addNewUser="addNewUser" :selectedUser="selectedUser"
				:handleChangeSelect="handleChangeSelect" />
		</Modal>
	</div>
</template>

<script>
import TableItem from './TableItem.vue';
import Button from './Button.vue';
import Modal from './Modal.vue';
import CreateUserForm from './CreateUserForm.vue';
import { getAllUsers, addUser, deleteUser } from '../utils';


export default {
	name: 'Table',
	components: {
		TableItem,
		Button,
		Modal,
		CreateUserForm,
	},
	data() {
		return {
			users: this.loadUsersFromLocalStorage() || [],
			isModalVisible: false,
			selectedUser: 'main'
		}
	},
	methods: {
		addNewUser(newUser) {
			if (this.selectedUser === 'main') {
				this.users.push(newUser)
			} else {
				addUser(this.users, this.selectedUser, newUser)
			}
			this.closeModal()
		},
		handleDeleteUser(id) {
			deleteUser(this.users, id)
		},
		showModal() {
			this.isModalVisible = true;
		},
		closeModal() {
			this.isModalVisible = false;
			this.selectedUser = 'main'
		},
		handleSelectUser(id) {
			this.selectedUser = id;
			this.isModalVisible = true;
		},
		handleChangeSelect(id) {
			this.selectedUser = id;
		},
		loadUsersFromLocalStorage() {
			const users = localStorage.getItem('users');
			return users ? JSON.parse(users) : [];
		},
		saveUsersToLocalStorage() {
			localStorage.setItem('users', JSON.stringify(this.users));
		},
	},
	computed: {
		allUsers() {
			return getAllUsers(this.users);
		}
	},
	watch: {
		users: {
			handler() {
				this.saveUsersToLocalStorage();
			},
			deep: true
		}
	}
}
</script>

<style scoped>
.table {
	color: black;
	width: 90vw;
	border-radius: 10px;
	margin-top: 100px;
	height: fit-content;
}

.header {
	background-color: #36304A;
	height: 50px;
	display: flex;
	align-items: center;
	font-size: 20px;
	color: white;
	padding: 5px;
	padding-left: 10px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
}

.header-item {
	width: 30%;
	padding-left: 5px;
	border-right: 1px solid #6b6868;
}

.button {
	margin-bottom: 10px;
}
</style>