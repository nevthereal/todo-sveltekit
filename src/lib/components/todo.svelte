<script lang="ts">
	export let todo;
</script>

<div class="flex card justify-between p-4 items-center">
	<div class="flex gap-4">
		<input class="my-auto" type="checkbox" bind:checked={todo.completed} />
		<div class="flex flex-col">
			<span class={`font-bold ${todo.completed && 'line-through'}`}>{todo.content}</span>
			<span class={`${todo.completed && 'line-through'}`}>Due: {todo.due}</span>
		</div>
	</div>
	<button class="btn"><i class="fa-solid fa-trash"></i></button>
</div>
