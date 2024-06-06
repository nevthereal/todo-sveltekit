<script lang="ts">
	import Todo from '$lib/components/Todo.svelte';
	import { db } from '$lib/db/db';
	import { todosTable } from '$lib/db/schema';
	import { createQuery } from '@tanstack/svelte-query';
	// export let data;
	// let todos = data.result;

	const query = createQuery({
		queryKey: ['todos'],
		queryFn: async () => {
			const todos = await db.select().from(todosTable);
			return todos;
		}
	});
</script>

<div class="w-[60%] mx-auto mt-16">
	<h1 class="h1 mb-4">
		{#if $query.isLoading}
			<span>Loading data...</span>
		{:else if $query.isSuccess && $query.data}
			Todos{#if $query.data.length}<span>{' '}({$query.data.length})</span>{/if}:
		{/if}
	</h1>
	<form method="POST" class="mb-4 flex gap-2 text-black">
		<input type="text" name="title" placeholder="Title" />
		<input type="text" name="content" placeholder="What needs to be done?" />
		<button class="btn variant-ghost-primary text-white">Add</button>
	</form>
	{#if $query.isLoading}
		<span>Loading todos...</span>
	{:else if $query.error}
		<span>Query failed</span>
	{:else if $query.isSuccess && $query.data}
		<ul class="flex flex-col gap-4">
			{#each $query.data as todo (todo.id)}
				<Todo {todo} />
			{/each}
		</ul>
	{/if}
</div>
