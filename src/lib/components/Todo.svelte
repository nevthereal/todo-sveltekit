<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { todosTable } from '$lib/db/schema';
	import type { deleteSchema, toggleSchema } from '$lib/zod';
	import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';

	export let todo: typeof todosTable.$inferSelect;
	export let toggleFormData: SuperValidated<Infer<typeof toggleSchema>>;
	export let deleteFormData: SuperValidated<Infer<typeof deleteSchema>>;

	const { enhance: toggleEnhance } = superForm(toggleFormData, {
		onSubmit: ({ formData }) => {
			formData.set('id', todo.id.toString());
			formData.set('state', String(todo.completed));
		},
		invalidateAll: true
	});

	const { enhance: deleteEnhance } = superForm(deleteFormData, {
		onSubmit: ({ formData }) => {
			formData.set('id', todo.id.toString());
		},
		invalidateAll: true
	});
</script>

<li class="flex card justify-between p-4 items-center">
	<div class="flex gap-4">
		<button class="btn" form="toggleForm">
			<i class={`${todo.completed ? 'fa-solid' : 'fa-regular'} fa-circle-check text-2xl`}></i>
		</button>

		<div class={`my-auto`}>
			<h2 class={`h2 ${todo.completed && 'line-through'}`}>{todo.title}</h2>
			<p class="text-lg">{todo.content}</p>
		</div>
	</div>
	<button class="btn" form="deleteForm"><i class="fa-solid fa-trash text-xl"></i></button>
</li>
<form class="hidden" action="?/toggle" method="post" use:toggleEnhance id="toggleForm"></form>
<form class="hidden" action="?/delete" method="post" use:deleteEnhance id="deleteForm"></form>
