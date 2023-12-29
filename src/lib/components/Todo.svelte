<script lang="ts">
	export let todo: any;
</script>

<li class="flex card justify-between p-4 items-center">
	<div class="flex gap-4">
		<form action="?/triggerComplete" method="POST">
			<button class="btn my-auto" name="id" value={todo.id}>
				{#if !todo.completed}
					<i class="fa-regular fa-circle-check"></i>
				{:else}
					<i class="fa-solid fa-circle-check"></i>
				{/if}
			</button>
		</form>
		<span class={`my-auto ${todo.completed && 'line-through'}`}>{todo.content}</span>
	</div>
	<form method="POST" action="?/deleteTodo">
		<button class="btn" name="id" value={todo.id}><i class="fa-solid fa-trash"></i></button>
	</form>
</li>
