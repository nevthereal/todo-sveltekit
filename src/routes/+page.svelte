<script lang="ts">
	import Todo from '$lib/components/Todo.svelte';
	export let data;
	let todos = data.result;
</script>

<div class="w-[60%] mx-auto mt-16">
	<h1 class="h1 mb-4">
		Todos{#if todos.length}<span>{' '}({todos.length})</span>{/if}:
	</h1>
	<form method="POST" class="mb-4 flex gap-2 text-black">
		<input type="text" name="title" placeholder="Title" />
		<input type="text" name="content" placeholder="What needs to be done?" />
		<button class="btn variant-ghost-primary text-white">Add</button>
	</form>

	<ul class="flex flex-col gap-4">
		{#each todos as todo (todo.id)}
			<Todo {todo} />
		{/each}
	</ul>
</div>
