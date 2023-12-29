<script lang="ts">
	export let data;
	let todos = data.result;
</script>

<div class="w-[60%] mx-auto mt-4">
	<h1 class="h1 mb-4">
		Todos{#if todos.length}<span>{' '}({todos.length})</span>{/if}:
	</h1>
	<form method="POST" action="?/createTodo" class="mb-4 flex gap-2 text-black">
		<input type="text" name="content" placeholder="What needs to be done?" />
		<button class="btn variant-ghost-primary text-white">Add</button>
	</form>

	<ul class="flex flex-col gap-4">
		{#each todos as todo (todo.id)}
			<li class="flex card justify-between p-4 items-center">
				<div class="flex gap-4">
					<input class="my-auto" type="checkbox" bind:checked={todo.completed} />
					<div class="flex flex-col">
						<span class={`font-bold ${todo.completed && 'line-through'}`}>{todo.content}</span>
					</div>
				</div>
				<form method="POST" action="?/deleteTodo">
					<button class="btn" name="id" value={todo.id}><i class="fa-solid fa-trash"></i></button>
				</form>
			</li>
		{/each}
	</ul>
</div>
