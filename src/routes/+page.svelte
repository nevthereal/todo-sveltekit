<script lang="ts">
	import { invalidate } from '$app/navigation';
	import Todo from '$lib/components/Todo.svelte';
	import { superForm } from 'sveltekit-superforms';

	export let data;
	$: todos = data.todos;

	const { form, enhance } = superForm(data.createForm, {
		onUpdated() {
			invalidate('query:todos');
		}
	});
</script>

<div class="w-[60%] mx-auto mt-16">
	<h1 class="h1 mb-4">
		Todos{#if todos.length}<span>{' '}({todos.length})</span>{/if}:
	</h1>
	<form method="POST" class="mb-4 flex gap-2 text-black" action="?/create" use:enhance>
		<input type="text" name="title" placeholder="Title" bind:value={$form.title} />
		<input
			type="text"
			name="content"
			placeholder="What needs to be done?"
			bind:value={$form.content}
		/>
		<button class="btn variant-ghost-primary text-white">Add</button>
	</form>
	<ul class="flex flex-col gap-4">
		{#each todos as todo (todo.id)}
			<Todo {todo} toggleFormData={data.toggleForm} deleteFormData={data.deleteForm} />
		{/each}
	</ul>
</div>
