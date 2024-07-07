<script lang="ts">
	import { todosTable } from '$lib/db/schema';
	export let todo: typeof todosTable.$inferSelect;

	const deleteTodo = async () => {
		await fetch(`/api/delete?id=${todo.id}`);
	};

	const toggleComplete = async () => {
		await fetch(`/api/toggle?id=${todo.id}`);
	};
</script>

<li class="flex card justify-between p-4 items-center">
	<div class="flex gap-4">
		<button class="btn" on:click={() => toggleComplete()}>
			<i class={`${todo.completed ? 'fa-solid' : 'fa-regular'} fa-circle-check text-2xl`}></i>
		</button>
		<div class={`my-auto`}>
			<h2 class={`h2 ${todo.completed && 'line-through'}`}>{todo.title}</h2>
			<p class="text-lg">{todo.content}</p>
		</div>
	</div>
	<button on:click={() => deleteTodo()} class="btn"
		><i class="fa-solid fa-trash text-xl"></i></button
	>
</li>
