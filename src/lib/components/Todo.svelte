<script lang="ts">
	import { todosTable } from '$lib/db/schema';
	export let todo: any;
</script>

<li class="flex card justify-between p-4 items-center">
	<div class="flex gap-4">
		<form action="?/toggleComplete" method="POST" class="my-auto">
			<button class="btn" name="id" value={todo.id}>
				<i class={`${todo.completed ? 'fa-solid' : 'fa-regular'} fa-circle-check text-2xl`}></i>
			</button>
		</form>
		<div class={`my-auto`}>
			<h2 class={`h2 ${todo.completed && 'line-through'}`}>{todo.title}</h2>
			<p class="text-lg">{todo.content}</p>
		</div>
	</div>
	<form method="POST" action="?/deleteTodo">
		<button class="btn" name="id" value={todo.id}><i class="fa-solid fa-trash text-xl"></i></button>
	</form>
</li>
