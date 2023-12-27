<script lang="ts">
	export let data;
	let todos = data.result;
</script>

<h1 class="h1">
	Todos{#if todos.length}<span>{' '}({todos.length})</span>{/if}:
</h1>
<ul>
	{#each todos as todo}
		<li>
			<input type="checkbox" bind:checked={todo.completed} />
			<span>{todo.content}</span>
		</li>
	{/each}
</ul>
